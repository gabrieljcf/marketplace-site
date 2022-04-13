import { Container, ContainerText, Content } from "./styles";
import { Link } from "react-router-dom";

interface CtaProps {
  reverse: boolean;
  link?: string;
  title: string;
  subtitle: string;
  paragraph: string;
  image: string;
}

export function Cta({ reverse, link, title, subtitle, paragraph, image }: CtaProps) {
  return (
    <Container>
      <Content reverse={reverse}>
        <ContainerText>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{paragraph}</p>

          {
            link
              ? <Link to={link}>
                <button>
                  compre agora
                </button>
              </Link>
              : ''
          }

        </ContainerText>

        <img src={image} alt="" />
      </Content>
    </Container>
  );
}