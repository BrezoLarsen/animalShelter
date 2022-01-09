import { ISpecie } from './specie';
import { IPhoto } from './animalPhotos';

export class IAnimal {
    id: string;
    name?: string;
    specie?: ISpecie;
    subspecie?: string;
    breed?: string;
    gender?: string;
    isSterilized?: boolean;
    dateBirth?: string;
    status?: string;
    placeText?: string;
    compatibleWith?: string;
    health?: string;
    behaviour?: string;
    story?: string;
    chip?: string;
    imageUrl?: string;
    needLiscense?: boolean;
    fbLink?: string;
    adoptionDate?: string;
    passAwayDate?: string;
    showInAdoptionPage?: boolean;
    photosArray?: IPhoto[];
}
