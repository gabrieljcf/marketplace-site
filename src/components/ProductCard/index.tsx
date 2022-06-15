import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "../Tooltip";
import { Card, PriceContainer } from "./styles";

import notFountImg from '../../assets/noimage.png'

interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  images: string[];
}

export function ProductCard({ _id, name, price, images }: ProductCardProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Card>
      <img src={images[0] ?? notFountImg} alt={name} />
      <p
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {name}
      </p>
      <PriceContainer>
        <small>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(price)}
        </small>
      </PriceContainer>

      <Tooltip isHover={hover} description={name}/>
      
      <Link to={`/marketplace/product/${_id}`}>
        <button>Comprar</button>
      </Link>
    </Card>
  )
}