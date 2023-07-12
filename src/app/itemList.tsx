
import ItemCard from './itemCard';
import {ItemCardProps} from './itemCard';

// assert the type of productListing to be ItemCardProps[]
const productListing = require('../../data/hotSauces.json') as ItemCardProps[];

export default function ProductList() {
  return (
    <>
      {productListing.map((product: ItemCardProps) => (
        <ItemCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          photo={product.photo}
          price={product.price}
          spiciness={product.spiciness}
        />
      ))}
    </>
  );
}
