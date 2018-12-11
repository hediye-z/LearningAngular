import {ProductModel} from '../models/product.model';

export class ProductService {
  getAll(): ProductModel[] {
    return [
      {id: 1, name: 'a', price: 100, imageUrl: 'https://picsum.photos/200/300?image=80'},
      {id: 2, name: 'c', price: 200, imageUrl: 'https://picsum.photos/200/300?image=29'},
      {id: 3, name: 'b', price: 9000, imageUrl: 'https://picsum.photos/200/300?image=99'},
      {id: 4, name: 'f', price: 800, imageUrl: 'https://picsum.photos/200/300?image=69'},
      {id: 5, name: 'd', price: 400, imageUrl: 'https://picsum.photos/200/300?image=49'},
      {id: 6, name: 'e', price: 5020, imageUrl: 'https://picsum.photos/200/300?image=33'},
      {id: 7, name: 'g', price: 300, imageUrl: 'https://picsum.photos/200/300?image=9'},
      {id: 7, name: 'h', price: 5050, imageUrl: 'https://picsum.photos/200/300?image=2'},
      {id: 7, name: 'i', price: 700, imageUrl: 'https://picsum.photos/200/300?image=7'},
    ];
  }
}
