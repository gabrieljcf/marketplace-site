import { Address } from "components/Address";
import { ProductsHighlight } from "components/ProductsHighlight";
import creamImg from "../../assets/cta-2.png";
import ctaImg from "../../assets/cta.png";
import { Cta } from "../../components/Cta";
import { OurProducts } from "../../components/OurProducts";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Cta
        title="Os melhores <span>produtos</span> para você"
        subtitle="Solte sua imaginação ao criar novos <span>produtos</span>"
        paragraph="Que tal trabalhar com algo novo ?
        Aqui você encontra o que há de mais novo no mercdo, para vocẽ poder inovar"
        reverse={false}
        image={ctaImg}
        link="/products"
        buttonText="Compre Agora"
      />
      <OurProducts />
      <Cta
        title="Conheça a Nossa <span>História</span>"
        subtitle="Com mais de <span>10 anos</span> de mercado"
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
