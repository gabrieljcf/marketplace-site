import { useState } from "react";
import { SelectQuantity } from "../SelectQuantity";

import trashImg from "../../assets/trash-o.svg";

import { CartListContainer } from "./styles";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  quantity: number;
}

interface CartListProps {
  product: Product;
  onChangeQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}
export function CartList({
  product,
  onChangeQuantity,
  onRemove,
}: CartListProps) {
  const [quantity, setQuantity] = useState(product.quantity);
  function handleQuantityChange(value: number) {
    setQuantity(value);
    onChangeQuantity(product._id, value);
  }
  return (
    <CartListContainer>
      <div>
        <Link to={`/products/${product._id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-img"
          />
        </Link>
        <p>{product.name}</p>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
      </div>

      <div>
        <SelectQuantity
          quantity={quantity}
          setQuantity={handleQuantityChange}
        />

        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price * quantity)}
        </p>

        <button onClick={() => onRemove(product._id)}>
          <img src={trashImg} alt="Remover" />
        </button>
      </div>
    </CartListContainer>
  );
}
