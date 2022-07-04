import { Container, Content } from "./styles";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contato
            </NavLink>
          </li>
        </ul>

        <Link to="basket">
          <BasketButton />
        </Link>
      </Content>
    </Container>
  );
}
