import {create} from 'zustand'

export const useSlider = create((set)=> ({
    slideropen : false,

    toggleSlider : () => set((state) => ({slideropen : !state.slideropen}))
    
}))