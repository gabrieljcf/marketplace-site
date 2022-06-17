import { Cta } from "../../components/Cta";
import { OurProducts } from "../../components/OurProducts";

import ctaImg from "../../assets/cta.png";
import creamImg from "../../assets/cta-2.png";
import { ProductsHighlight } from "../../components/ProductsHighlight";
import { Address } from "../../components/Address";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
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
      <OurProducts />
      <Cta
        title="Conheça a Nossa História"
        subtitle="Com mais de 10 anos de mercado"
        paragraph="A arte festas tem se dedicado a trazer qualidade e melhores preços ao mercado de festas e intretenimento, o nosso compromisso é com o melhor para os nossos clientes"
        reverse={true}
        image={creamImg}
        link="/about"
        buttonText="Saiba Mais"
      />
      <ProductsHighlight />

      <Address />
    </HomeContainer>
  );
}
