// class
// ProductModel - essa tipagem segue a do back
export interface ProductModel {
  code: string;
  comments: string;
  costPrice:  number;
  description: string;
  hasActive: boolean;
  id: number;
  name: string;
  preparationTime: string;
  productType: string;
  salePrice: number;
}
