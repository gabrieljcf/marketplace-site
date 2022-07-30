import { useWindowDimensions } from "hooks/useWindowDimensions";
import { useBasketBadge } from "../../hooks/useBasketBadge";
import basketImg from "../../assets/basket.svg";
import basketMobileImg from "../../assets/basket.png";
import { BasketContainer } from "./styles";

export function BasketButton() {
  const { badge } = useBasketBadge();
  const { width } = useWindowDimensions();

  const getBasketImg = () => (width >= 768 ? basketImg : basketMobileImg);

  return (
    <BasketContainer>
      <span>{badge}</span>
      <img src={getBasketImg()} alt="Carrinho de compras" />
    </BasketContainer>
  );
}
