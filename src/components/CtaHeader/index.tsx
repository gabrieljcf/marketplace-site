import { Container, ContainerText, Content } from "./styles";
import ctaImg from '../../assets/cta.png'
import { Link } from "react-router-dom";

export function CtaHeader() {
  return (
    <Container>
      <Content>
        <ContainerText>
          <h1>Os melhores <span>produtos</span> para você</h1>
          <h2>Solte sua imaginação ao criar novos <span>produtos</span></h2>
          <p>Que tal trabalhar com algo novo ?<br />Aqui você encontra o que há de mais novo no mercdo, para vocẽ poder inovar</p>

          <Link to="products">
            <button>
              compre agora
            </button>
          </Link>
        </ContainerText>

        <img src={ctaImg} alt="" />
      </Content>
    </Container>
  );
}