
import { create } from 'zustand'

type WizardStoreType = {
  data: {
    userType: 'therapist' | 'patient' | null
  },
  setData: (data: Partial<WizardStoreType['data']>) => void
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const useWizardStore = create<WizardStoreType>((set) => ({
  data: {
    userType: null
  },
  setData: (data: Partial<WizardStoreType['data']>) => set(state => ({ ...state, data: { ...state.data, ...data } })),
  currentStep: 0,
  setCurrentStep: (step: number) => set({ currentStep: step })
}))