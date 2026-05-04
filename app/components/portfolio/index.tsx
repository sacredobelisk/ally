import { useState } from "react";
import { useParams } from "react-router";
import { Thumbs } from "./components/thumbs";
import { type Image, type PortfolioParams, PortfolioType } from "./types";

import "./index.scss";

interface Props {
  images: Image[];
}

const headings: Record<PortfolioType, string> = {
  [PortfolioType.GraphicDesign]: "Graphic Design Portfolio",
  [PortfolioType.Retouching]: "Retouching Portfolio",
};

export const Portfolio = ({ images }: Props) => {
  const { portfolioType = PortfolioType.GraphicDesign } = useParams<PortfolioParams>();

  const [activeImage, setActiveImage] = useState<Image>(images[0]);

  return (
    <div className="portfolio">
      <h2 className="visually-hidden">{headings[portfolioType]}</h2>
      <div className="thumbs-container">
        <Thumbs activeThumb={activeImage} images={images} onHover={setActiveImage} />
      </div>
      <div className="large">
        <img alt={activeImage.text} loading="lazy" src={`/images/${portfolioType}/large/${activeImage.filename}`} />
      </div>
    </div>
  );
};
