import { useState } from "react";
import noImage from "../../assets/noimage.png";
import { Content, ImagesToSelectContainer } from "./styles";

interface ProductImageDetailsProps {
  images: string[];
}

export function ProductImageDetails({ images }: ProductImageDetailsProps) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <Content>
      <img
        src={images.length > 0 ? images[activeImage] : noImage}
        alt="Product"
      />

      <ImagesToSelectContainer>
        {/* isSelected={index === activeImage} */}
        {images.map((image, index) => (
          <div
            key={index}
            className={index === activeImage ? "active" : ""}
            onClick={() => setActiveImage(index)}
          >
            <img src={image} alt="Product" />
          </div>
        ))}
      </ImagesToSelectContainer>
    </Content>
  );
}
