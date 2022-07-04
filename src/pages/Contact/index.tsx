import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Cta } from "../../components/Cta";

import ctaImg from "../../assets/cta.png";
import localizationImg from "../../assets/localization.png";
import { Line } from "../Products/styles";
import { ContactContainer, ContactContent } from "./styles";

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

        <ContactContent>
          <div className="informationsContainer">
            <div>
              <h2>
                Alagoinhas-<span>BA</span>
              </h2>
              <p>Endereço: Rua Centro 1234</p>
              <p>Telefone: 75 3333-3435</p>
              <p>E-mail: artefestasalagoinhas@hotmailcom</p>
            </div>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Arte+Festas/@-12.1386252,-38.4252464,17z/data=!3m1!4b1!4m5!3m4!1s0x716bd268fd2de65:0x9308ec7757a9fb61!8m2!3d-12.1386252!4d-38.4230577"
              rel="noreferrer"
            >
              <img
                src={localizationImg}
                alt="Localização da loja"
                title="Localização da loja"
              />
            </a>
          </div>

          <div className="informationsContainer">
            <div>
              <h2>
                Catu-<span>BA</span>
              </h2>
              <p>Endereço: Rua Centro 1234</p>
              <p>Telefone: 75 3333-3435</p>
              <p>E-mail: artefestascatu@hotmailcom</p>
            </div>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Arte+Festas+(Catu-BA)/@-12.3525733,-38.3784202,17z/data=!3m1!4b1!4m5!3m4!1s0x7168d7a1a761ce1:0x355b01d60d891dac!8m2!3d-12.3525797!4d-38.3762492"
              rel="noreferrer"
            >
              <img
                src={localizationImg}
                alt="Localização da loja"
                title="Localização da loja"
              />
            </a>
          </div>
        </ContactContent>
      </ContactContainer>
      {isLoading && <Loading />}
    </main>
  );
}
