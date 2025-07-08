import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useUserStore } from "../stores/userStore";

export const useAuthorizedUser = () => {
  // If true, user gets redirect to onboarding
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);

  // Token used for stable react query caching
  const { loginWithRedirect, logout, user, getAccessTokenSilently } = useAuth0();

  // Update user state based on DB - set to null if first time user
  const setUserState = useUserStore((state) => state.setUser);

  // Get user details
  const { data: userDetails, isLoading: fetchingUser, refetch } = useQuery({
    queryKey: ["users", user?.sub],
    enabled: !!user?.sub,
    queryFn: async () => {
      const token = await getAccessTokenSilently();

      console.log('token:', token);

      const userRes = await fetch(`/api/users/protected`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!userRes.ok) throw new Error("Failed to get user details from DB");
      console.log("user details", userRes);
      return userRes.json();
    },
  });

  // Every time user logs in, run query for user details
  useEffect(() => {
    if (user?.sub) refetch();
  }, [user?.sub]);

  // TODO Implement JWT checker in backend, and return user is first message (design the data model for it)
  return {
    userDetails,
    fetchingUser,
    isFirstTimeUser,
    loginWithRedirect,
    logout,
    user,
  };
};
