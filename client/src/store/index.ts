import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface State {
  selectedParty: string;
  setSelectedParty: (party: string) => void;
}

export const useStore = create<State>()(
  persist(
    devtools((set) => ({
      selectedParty: '',
      setSelectedParty: (party) => set({ selectedParty: party }),
    })), {
      name: 'taldang-storage',
    }
  )
);