import { Container, ContainerText, Content } from "./styles";
import mapImg from "../../assets/map.png";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export function Address() {
  return (
    <Container>
      <Content>
        <ContainerText>
          <h1>
            Conheça nossas <span>lojas</span>
          </h1>
          <h2>
            Alagoinhas-<span>BA</span>
          </h2>
          <p>Endereço: Rua Centro 1234</p>
          <p>Telefone: 75 3333-3435</p>

          <h2>
            Catu-<span>BA</span>
          </h2>
          <p>Endereço: Rua Centro 1234</p>
          <p>Telefone: 75 3333-3435</p>
        </ContainerText>

        <div>
          <img src={mapImg} alt="Mapa com endereço da loja" />
          <Link to="contact">
            <Button>Entre em contato</Button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
