import { Cta } from "../../components/Cta";
import notFoundImg from "../../assets/page-not-found.png";
import ctaImg from "../../assets/cta.png";
import { NotFoundContainer } from "./styles";

export function NotFound() {
  return (
    <>
      <Cta
        title="Os melhores produtos para você"
        subtitle="Solte sua imaginação ao criar novos produtos"
        paragraph="Que tal trabalhar com algo novo ?
        Aqui você encontra o que há de mais novo no mercdo, para vocẽ poder inovar"
        reverse={false}
        image={ctaImg}
        link="/products"
        buttonText="Compre Agora"
      />
      <NotFoundContainer>
        <h1><span>Opsss!</span> Não encontramos essa página</h1>
        <img src={notFoundImg} alt="Não encontramos essa página" />
      </NotFoundContainer>
    </>
  );
}
