import {create} from 'zustand';

interface DisplayModeStore {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
  toggleMode: () => void;
}

const useModeStore = create<DisplayModeStore>()((set) => ({
  mode: 'light',

  setMode: (mode) => set({ mode }),

  toggleMode: () => set((state) => ({ mode: state.mode === 'dark' ? 'light' : 'dark' })),
}));

export default useModeStore;
