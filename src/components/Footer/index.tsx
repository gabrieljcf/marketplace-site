import { NavLink, Link } from "react-router-dom";
import { Container, ContentDesktop, ContentMobile } from "./style";

import homeIcon from "../../assets/botao-home.png";
import productIcon from "../../assets/carrinho.png";
import aboutIcon from "../../assets/sobre.png";
import contactIcon from "../../assets/cliente.png";

export function Footer() {
  function getWidthSize() {
    return document.documentElement.clientWidth;
  }

  return (
    <Container>
      {getWidthSize() >= 768 ? (
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
                <img
                  src={homeIcon}
                />
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src={productIcon}
                />
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src={aboutIcon}
                />
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <img
                  src={contactIcon}
                />
                Contato
              </NavLink>
            </li>
          </ul>
        </ContentMobile>
      )}
    </Container>
  );
}