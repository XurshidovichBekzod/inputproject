import { create } from 'zustand'

export const useStore = create((set) => ({
    cars: [],
    
    addCar: (car) => set((state) => ({ cars: [...state.cars, car] })),
    deleteCar: (id) => set((state) => ({ cars: state.cars.filter(car => car.id !== id) }))

}))