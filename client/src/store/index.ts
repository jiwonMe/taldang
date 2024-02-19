import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface State {
  selectedParty: string;
  setSelectedParty: (party: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  name: string;
  setName: (name: string) => void;
  birth: string;
  setBirth: (birth: string) => void;
  address: string;
  setAddress: (address: string) => void;
  detail: string;
  setDetail: (detail: string) => void;
  resetAll: () => void;
}

export const useStore = create<State>()(
  persist(
    devtools((set) => ({
      selectedParty: '',
      setSelectedParty: (party) => set({ selectedParty: party }),
      phone: '',
      setPhone: (phone) => set({ phone: phone }),
      name: '',
      setName: (name) => set({ name: name }),
      birth: '',
      setBirth: (birth) => set({ birth: birth }),
      address: '',
      setAddress: (address) => set({ address: address }),
      detail: '',
      setDetail: (detail) => set({ detail: detail }),
      resetAll: () => set({ selectedParty: '', phone: '', name: '', birth: '', address: '', detail: '' }),
    })), {
      name: 'taldang-storage',
    }
  )
);