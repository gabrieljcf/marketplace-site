import { Link } from "react-router-dom";
import { Container, Content } from "./style";

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <span>redes sociais</span>
          <ul>
            <li><a href="#" target="_blank">facebook</a></li>
            <li><a href="#" target="_blank">instagram</a></li>
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="products">Produtos</Link></li>
            <li><Link to="/#about">Sobre</Link></li>
            <li><Link to="/#contact">Contato</Link></li>
          </ul>
        </div>
      </Content>
    </Container>
  );
}