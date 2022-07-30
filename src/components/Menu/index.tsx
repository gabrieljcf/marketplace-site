import { Container, Content } from "./styles";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";
import { BasketButton } from "../BasketButton";
import { useWindowDimensions } from "hooks/useWindowDimensions";
import { MenuItems } from "components/MenuItems";

export function Menu() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logoImg} alt="Arte Festas" />
        </Link>
        {width >= 768 && (
          <>
            <MenuItems />
            <Link to="basket">
              <BasketButton />
            </Link>
          </>
        )}
      </Content>
    </Container>
  );
}
