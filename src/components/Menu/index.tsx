import logoImg from '../../assets/logo.svg';
import basketImg from '../../assets/basket.svg'
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logoImg} alt="Arte Festas" />
        </Link>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="products">Produtos</Link></li>
          <li><Link to="#about">Sobre</Link></li>
          <li><Link to="#contact">Contato</Link></li>
        </ul>

        <Link to="basket">
          <img src={basketImg} alt="Carrinho de compras" />
        </Link>
      </Content>
    </Container>
  )
}