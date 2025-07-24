import { create } from 'zustand'

export const useStore = create((set) => ({
    cars: [],
    
    add: (payload) => set((state) => ({ cars: [...state.cars, payload] })),
    removeCar: (payload) => set((state) => ({ cars: state.cars.filter(car => car.id !== payload) }))

}))