import {ProductModel} from '../models/product.model';

export class ProductService {
getAll() : ProductModel[]{
  return [
    {id: 1, name: 'صورتی', price: 100, imageUrl: 'https://picsum.photos/200/300?image=80'},
    {id: 2, name: 'هویج', price: 200, imageUrl: 'https://picsum.photos/200/300?image=29'},
    {id: 3, name: 'هندزفری', price: 9000, imageUrl: 'https://picsum.photos/200/300?image=99'},
    {id: 4, name: 'قاشق', price: 800, imageUrl: 'https://picsum.photos/200/300?image=69'},
    {id: 5, name: 'پنگال', price: 400, imageUrl: 'https://picsum.photos/200/300?image=49'},
    {id: 6, name: 'روسری' , price: 5020 , imageUrl: 'https://picsum.photos/200/300?image=33' },
    {id: 7, name: 'نسکافه' , price: 2500 , imageUrl: 'https://picsum.photos/200/300?image=9' },
  ];
  []
}
}
