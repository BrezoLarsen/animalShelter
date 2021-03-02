export interface IAnimal {
    id: number;
    name: string;
    chip: string;
    entryDate: string;
    characteristic: string;
    gender: string;
    captureZone: string;
    imageUrl: string;
    isSick: boolean;
    medicalDosis: string;
    isWeak: boolean;
    specie?: string;
    //medicalHistory: [];
}
