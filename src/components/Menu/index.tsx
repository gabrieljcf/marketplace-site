import logoImg from '../../assets/logo.svg';
import basketImg from '../../assets/basket.svg'
import { Container, Content } from './styles';

export function Menu() {
  return (
    <Container>
      <Content>
        <a href="#home">
          <img src={logoImg} alt="Arte Festas" />
        </a>

        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="products">Produtos</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

        <a href="#basket">
          <img src={basketImg} alt="Carrinho de compras" />
        </a>
      </Content>
    </Container>
  )
}