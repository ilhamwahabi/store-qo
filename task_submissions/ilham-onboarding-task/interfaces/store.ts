export interface IStore {
  id: string;
  name: string;
  type: string;
  price_rating: number;
}

export interface IStores {
  count: number;
  next: string | null;
  previous: string | null;
  results: IStore[];
}

export interface IStoreDetail {
  id: number;
  name: string;
  phone: string;
  address: string;
  type: string;
  description: string;
  price_rating: number;
  image: string;
  owner: number;
}
