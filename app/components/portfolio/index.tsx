import { useState } from "react";
import { useParams } from "react-router";
import { Thumbs } from "./components/thumbs";
import { Image, PortfolioParams } from "./types";

import "./index.scss";

interface Props {
  images: Image[];
}

export const Portfolio = ({ images }: Props) => {
  const { portfolioType } = useParams<PortfolioParams>();

  const [activeImage, setActiveImage] = useState<Image>(images[0]);

  return (
    <div className="portfolio">
      <div className="thumbs-container">
        <Thumbs activeThumb={activeImage} images={images} onHover={setActiveImage} />
      </div>
      <div className="large">
        <img alt={activeImage.text} loading="lazy" src={`/images/${portfolioType}/large/${activeImage.filename}`} />
      </div>
    </div>
  );
};
