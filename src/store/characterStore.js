import { create } from 'zustand';

export const useCharacterBook = create((set) => ({
  status: '',
  statusSelect: (newStatus) => set(({
    status: newStatus,
  })),
  specie: '',
  specieSelect: (newSpecie) => set(({
    specie: newSpecie,
  })),
  name: '',
  searchName: (newName) => set(({
    name: newName,
  })),
}));
