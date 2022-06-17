import { Loading } from "../../components/Loading";
import { Cta } from "../../components/Cta";

import ctaImg from "../../assets/cta.png";
import { ContactContainer } from "./styles";
import { Line } from "../Products/styles";
import { useEffect, useState } from "react";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <main>
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

      <ContactContainer>
        <h3>
          Conheça nossas <span>lojas</span>
        </h3>
        <Line />

        <div>
          <h2>
            Alagoinhas-<span>BA</span>
          </h2>
          <p>Endereço: Rua Centro 1234</p>
          <p>Telefone: 75 3333-3435</p>
          <p>E-mail: artefestasalagoinhas@hotmailcom</p>

          <h2>
            Catu-<span>BA</span>
          </h2>
          <p>Endereço: Rua Centro 1234</p>
          <p>Telefone: 75 3333-3435</p>
          <p>E-mail: artefestascatu@hotmailcom</p>
        </div>
      </ContactContainer>
      {isLoading && <Loading />}
    </main>
  );
}
