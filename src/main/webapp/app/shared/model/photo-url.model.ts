import { IPet } from 'app/shared/model/pet.model';

export interface IPhotoUrl {
  id?: number;
  url?: string | null;
  pets?: IPet | null;
}

export const defaultValue: Readonly<IPhotoUrl> = {};
