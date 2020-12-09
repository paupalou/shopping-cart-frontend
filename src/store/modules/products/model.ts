export interface IProduct {
  id: number;
  name: string;
  customerPrice: number;
}

export interface IProductSelection {
  id: number;
  quantity: number;
}

export interface IProductsDomain {
  list: IProduct[];
  selection: IProductSelection[];
  loading: boolean;
  error: boolean;
}

export const initialState: IProductsDomain = {
  list: [],
  selection: [],
  loading: false,
  error: false
};
