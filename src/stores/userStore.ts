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

export const useUserStore = create<UserState>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  updateUser: (updates) =>
    set((state) =>
      state.user ? { user: { ...state.user, ...updates } } : { user: null }
    ),

  clearUser: () => set({ user: null }),
}));
