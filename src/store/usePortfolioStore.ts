import { create } from 'zustand';

interface PortfolioState {
  // Navigation & menu
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;

  // Selected project modal / detail sheet
  activeProjectModalId: string | null;
  openProjectModal: (id: string) => void;
  closeProjectModal: () => void;

  // Cursor states
  cursorVariant: 'default' | 'hover' | 'project' | 'magnetic' | 'text';
  cursorText: string;
  setCursorVariant: (variant: 'default' | 'hover' | 'project' | 'magnetic' | 'text', text?: string) => void;

  // Active section for nav indicator
  activeSection: string;
  setActiveSection: (section: string) => void;

  // Loading & brand intro sequence
  introPhase: 'loading' | 'flying' | 'ready';
  setIntroPhase: (phase: 'loading' | 'flying' | 'ready') => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  closeMenu: () => set({ menuOpen: false }),

  activeProjectModalId: null,
  openProjectModal: (id: string) => set({ activeProjectModalId: id }),
  closeProjectModal: () => set({ activeProjectModalId: null }),

  cursorVariant: 'default',
  cursorText: '',
  setCursorVariant: (variant, text = '') => set({ cursorVariant: variant, cursorText: text }),

  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),

  introPhase: 'loading',
  setIntroPhase: (phase) => set({ introPhase: phase }),
}));
