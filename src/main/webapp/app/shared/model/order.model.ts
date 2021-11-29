import { OrderStatus } from 'app/shared/model/enumerations/order-status.model';

export interface IOrder {
  id?: number;
  petId?: number | null;
  quantity?: number | null;
  shipDate?: string | null;
  status?: OrderStatus | null;
  complete?: boolean | null;
}

export const defaultValue: Readonly<IOrder> = {
  complete: false,
};
