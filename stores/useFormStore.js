// stores/useFormStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFormStore = create(
    persist(
        (set) => ({
            stepOne: "",
            setStepOneData: (data) => set({ stepOne: data }),
            clearStepOneData: () => set({ stepOne: "" }),
        }),
        { name: 'customerData' } // Key for localStorage
    )
);

export default useFormStore;