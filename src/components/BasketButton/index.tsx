import basketImg from "../../assets/basket.svg";
import { useBasketBadge } from "../../hooks/useBasketBadge";
import { BasketContainer } from "./styles";

export function BasketButton() {
  const { badge } = useBasketBadge();

  return (
    <BasketContainer>
      <span>{badge}</span>
      <img src={basketImg} alt="Carrinho de compras" />
    </BasketContainer>
  );
}
