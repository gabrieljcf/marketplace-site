import { Container, ContainerText, Content } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../Button";

interface CtaProps {
  reverse: boolean;
  link?: string;
  title: string;
  subtitle: string;
  paragraph: string;
  image: string;
  buttonText?: string;
}

export function Cta({
  reverse,
  link,
  title,
  subtitle,
  paragraph,
  image,
  buttonText,
}: CtaProps) {
  return (
    <Container>
      <Content reverse={reverse}>
        <ContainerText>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <h2 dangerouslySetInnerHTML={{ __html: subtitle }} />
          <p>{paragraph}</p>

          {link && (
            <Link to={link}>
              <Button>{buttonText}</Button>
            </Link>
          )}
        </ContainerText>

        <img src={image} alt={title} />
      </Content>
    </Container>
  );
}
