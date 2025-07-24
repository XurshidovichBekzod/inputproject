import { create } from 'zustand'

export const useStore = create((set) => ({
    cars: [],
    
    add: (car) => set((state) => ({ cars: [...state.cars, car] })),
    removeCar: (id) => set((state) => ({ cars: state.cars.filter(car => car.id !== id) }))

}))