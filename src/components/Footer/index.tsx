import { Link, useLocation } from "react-router-dom";
import { Container, ContentDesktop, ContentMobile } from "./style";

import homeIcon from "../../assets/botao-home.png";
import productIcon from "../../assets/carrinho.png";
import aboutIcon from "../../assets/sobre.png";
import contactIcon from "../../assets/cliente.png";

export function Footer() {
  const location = useLocation();

  function onActiveClass(path: String) {
    return location.pathname === path ? 'active' : ''
  }

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
            <li className={onActiveClass('/')}>
              <Link to="/">
                <img
                  src={homeIcon}
                />
                  Home
              </Link>
            </li>
            <li className={onActiveClass('/products')}>
              <Link to="products">
                <img
                  src={productIcon}
                />
                Produtos
              </Link>
            </li>
            <li className={onActiveClass('/about')}>
              <Link to="/about">
                <img
                  src={aboutIcon}
                />
                Sobre
              </Link>
            </li>
            <li className={onActiveClass('/contact')}>
              <Link to="/contact">
                <img
                  src={contactIcon}
                />
                Contato
              </Link>
            </li>
          </ul>
        </ContentMobile>
      )}
    </Container>
  );
}