import { useUserStore } from "../stores/userStore";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuthorizedUser } from "../hooks/useAuthorizedUser";
import { useEffect, useState } from "react";
import { OnboardingModal } from "./OnboardingModal";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const loggedUser = useUserStore((state) => state.user);
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  const { userDetails, fetchingUser, isFirstTimeUser } = useAuthorizedUser();

  const [onboardingModalOpen, setOnboardingModalOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User details (Nav):");
    console.log(isFirstTimeUser);
    console.log("is user logged in? " + isAuthenticated);
    // setOnboardingModalOpen(isFirstTimeUser && isAuthenticated)
    if(isAuthenticated && isFirstTimeUser) navigate('/onboarding')
    console.log("🪟 Modal open:", onboardingModalOpen);
  }, [userDetails, fetchingUser, isFirstTimeUser, isAuthenticated]);

  const initials = loggedUser?.fullName
    ? loggedUser.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <nav className="bg-gray-800 text-white h-12 px-4 flex items-center justify-between shadow">
      <h1 className="text-sm font-semibold">Task Express</h1>
      <div className="w-8 h-8 bg-gray-600 rounded-md flex items-center justify-center text-xs font-bold">
        <OnboardingModal
          isOpen={onboardingModalOpen}
          onClose={() => setOnboardingModalOpen(false)}
        />
        {isLoading && <p>Loading user info...</p>}
        {isAuthenticated && <p className="text-xs">{initials} data:</p>}

        {!isAuthenticated ? (
          <button
            onClick={() => {
              console.log("Logging in..."); // should appear
              loginWithRedirect();
            }}
            className="text-xs bg-blue-600 px-2 py-1 rounded"
          >
            Log In
          </button>
        ) : (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="text-xs bg-gray-600 px-2 py-1 rounded"
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}
