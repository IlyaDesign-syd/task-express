import { useState } from "react";
import type { UserOnboarding } from "../types/User";
import { useAuth0 } from "@auth0/auth0-react";

export const OnboardingUser = () => {
  const { getAccessTokenSilently } = useAuth0();


  const [userFormRegistry, setUserFormRegistry] = useState<UserOnboarding>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormRegistry((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User details submitted:", userFormRegistry);
    
    const token = await getAccessTokenSilently();

    console.log('response body:')
    console.log(JSON.stringify(userFormRegistry))

    const response = await fetch("/api/users/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userFormRegistry),
    })

    const UserDetails = await response.json();
    console.log('registered user:')
    console.log(UserDetails)
  };

  const userFields: (keyof UserOnboarding)[] = [
    "firstName",
    "lastName",
    "email",
  ];

   

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h1>
        <form onSubmit={handleUserFormSubmit} className="flex flex-col gap-4">
          {userFields.map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field}
              onChange={handleUserInput}
              value={userFormRegistry[field]}
              required
              className="border border-gray-300 rounded px-3 py-2"
            />
          ))}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
