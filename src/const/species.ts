export enum Species {
  DOG = 1,
  CAT = 2,
  BIRD = 3,
  FERRET = 4,
  RABBIT = 5,
  TURTLE = 6,
  RODENT = 7,
}

export const SpeciesLabels: Record<Species, string> = {
  [Species.DOG]: 'perro',
  [Species.CAT]: 'gato',
  [Species.FERRET]: 'hurón',
  [Species.RABBIT]: 'conejo',
  [Species.BIRD]: 'ave',
  [Species.RODENT]: 'roedor',
  [Species.TURTLE]: 'tortuga',
};
