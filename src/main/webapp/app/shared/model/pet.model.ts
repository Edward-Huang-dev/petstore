import { IPhotoUrl } from 'app/shared/model/photo-url.model';
import { ICategory } from 'app/shared/model/category.model';
import { ITag } from 'app/shared/model/tag.model';
import { Status } from 'app/shared/model/enumerations/status.model';

export interface IPet {
  id?: number;
  name?: string | null;
  status?: Status | null;
  photoUrls?: IPhotoUrl[] | null;
  category?: ICategory | null;
  tags?: ITag[] | null;
}

export const defaultValue: Readonly<IPet> = {};
