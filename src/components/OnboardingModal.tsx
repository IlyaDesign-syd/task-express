import { useState } from "react";
import type { UserOnboarding } from "../types/User";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

type OnboardingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const OnboardingModal = ({ isOpen, onClose }: OnboardingModalProps) => {
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

  const userFields: (keyof UserOnboarding)[] = [
    "firstName",
    "lastName",
    "email",
  ];

  const handleUserFormSubmit = () => {
    console.log("User details submitted:... wip");
  };

  return (
    <Dialog open={isOpen} as="div" onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-black/30">
        <DialogPanel className="bg-white rounded-lg shadow p-6 w-full max-w-sm">
          <DialogTitle className="text-lg font-semibold mb-4">
            Complete your profile
          </DialogTitle>
          <form onSubmit={handleUserFormSubmit} className="flex flex-col gap-3">
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
        </DialogPanel>
      </div>
    </Dialog>
  );
};
