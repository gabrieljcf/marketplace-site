import { NavLink, Link } from "react-router-dom";
import { Container, ContentDesktop, ContentMobile } from "./style";
import { useWindowDimensions } from "hooks/useWindowDimensions";

import homeIcon from "../../assets/botao-home.png";
import productIcon from "../../assets/carrinho.png";
import aboutIcon from "../../assets/sobre.png";
import contactIcon from "../../assets/cliente.png";
import { BasketButton } from "components/BasketButton";

export function Footer() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      {width >= 768 ? (
        <ContentDesktop>
          <div>
            <span>redes sociais</span>
            <ul>
              <li>
                <a href="#/" target="_blank">
                  facebook
                </a>
              </li>
              <li>
                <a href="#/" target="_blank">
                  instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span>Contato</span>
            <ul>
              <li>Telefone: 75 3421-3148</li>
              <li>E-mail: artefestasemail.com</li>
            </ul>
          </div>

          <div className="links">
            <span>Links</span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="products">Produtos</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </div>
        </ContentDesktop>
      ) : (
        <ContentMobile>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={homeIcon} alt="Página inicial" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={productIcon} alt="Produtos" />
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={aboutIcon} alt="Sobre a loja" />
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img src={contactIcon} alt="Entre em contato" />
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/basket"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <BasketButton />
                Cesta
              </NavLink>
            </li>
          </ul>
        </ContentMobile>
      )}
    </Container>
  );
}
