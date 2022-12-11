import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "../Tooltip";
import { Card, PriceContainer } from "./styles";

import notFountImg from "../../assets/noimage.png";
import { Button } from "../Button";
import { convertValue } from "utils/mask";

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
        data-testid="product-name-label"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {name}
      </p>
      <PriceContainer>
        <small>{convertValue(price)}</small>
      </PriceContainer>

      {hover && (
        <Tooltip isHover={hover} description={name} />
      )}

      <Link to={`/products/${_id}`}>
        <Button fullWidth={true}>Comprar</Button>
      </Link>
    </Card>
  );
}
