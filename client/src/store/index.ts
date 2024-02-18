import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
  selectedParty: string;
  setSelectedParty: (party: string) => void;
}

export const useStore = create<State>()(
  devtools((set) => ({
    selectedParty: '',
    setSelectedParty: (party) => set({ selectedParty: party }),
  }))
);