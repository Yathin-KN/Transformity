import { create } from 'zustand';

interface DisplayModeStore {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
  toggleMode: () => void;
}

const useModeStore = create<DisplayModeStore>((set) => {
  const storedMode = localStorage.getItem('mode');

  return {
    mode: (storedMode as 'light' | 'dark') || 'dark',

    setMode: (mode) => {
      set({ mode });
      localStorage.setItem('mode', mode);
    },

    toggleMode: () => {
      set((state) => {
        const newMode = state.mode === 'dark' ? 'light' : 'dark';
        localStorage.setItem('mode', newMode);
        return { mode: newMode };
      });
    },
  };
});

export default useModeStore;
