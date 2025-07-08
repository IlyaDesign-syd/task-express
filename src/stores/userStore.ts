import { create } from 'zustand';

type User = {
  id: string;
  fullName: string;
  email: string;
  bio: string;
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (updates: Partial<User>) => void;
  clearUser: () => void;
};

// For testing display
const dummyUser: User = {
  id: 'user-001',
  fullName: 'Jane Doe',
  email: 'jane.doe@example.com',
  bio: 'Product Manager at Task Express',
};

export const useUserStore = create<UserState>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  updateUser: (updates) =>
    set((state) =>
      state.user ? { user: { ...state.user, ...updates } } : { user: null }
    ),

  clearUser: () => set({ user: null }),
}));
