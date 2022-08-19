import { ISpecie } from './specie';
import { IPhoto } from './animalPhotos';

export class IAnimal {
  id: string;
  name?: string;
  specie?: string;
  subspecie?: string;
  breed?: string;
  gender?: string;
  genderId?: number;
  isSterilized?: string;
  birthDate?: string;
  status?: string;
  city?: string;
  compatibleWith?: string;
  health?: string;
  behaviour?: string;
  story?: string;
  chip?: string;
  imageUrl?: string;
  needLicense?: string;
  adoptionDate?: string;
  passAwayDate?: string;
  showInAdoptionPage?: boolean;
  photosArray?: IPhoto[];
  extraInformation: string;
}
