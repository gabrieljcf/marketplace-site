import { Container, Content } from "./styles";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";
import { BasketButton } from "../BasketButton";

export function Menu() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logoImg} alt="Arte Festas" />
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Produtos</Link>
          </li>
          <li>
            <Link to="about">Sobre</Link>
          </li>
          <li>
            <Link to="contact">Contato</Link>
          </li>
        </ul>

        <Link to="basket">
          <BasketButton />
        </Link>
      </Content>
    </Container>
  );
}
