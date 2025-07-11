export interface UserResponse {
  isUserRegistered: boolean;
  auth0Id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserOnboarding {
  firstName: string;
  lastName: string;
  email: string;
}