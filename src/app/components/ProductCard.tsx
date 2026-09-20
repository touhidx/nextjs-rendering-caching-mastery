import Image from "next/image";
import React from "react";
interface Iporps {
  id: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  rating: number;
  image: string;
  description: string;
}

const ProductCard = ({ product }: Iporps) => {
  console.log(product);
  return (
    <div className="col-span-1">
      <div className="card bg-base-100  shadow-sm">
        <figure>
          {/* <Image
            src={product.image}
            width={400}
            height={400}
            alt="image"
          ></Image> */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
            <div className="badge badge-secondary">{product.category}</div>
          </h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.price}</div>
            <div className="badge badge-outline">{product.rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
