export interface ICartItem {
  id: number;
  name: string;
  quantity: number;
  price: string;
  total: string;
  totalWithOffers?: string;
  offers?: { name: string; description: string }[];
}

export interface ICartDomain {
  items: ICartItem[];
  loading: boolean;
  error: boolean;
  total?: string;
  totalWithOffers?: string;
}

export const initialState: ICartDomain = {
  items: [],
  loading: false,
  error: false
};
