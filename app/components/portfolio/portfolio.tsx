import { useState } from "react";
import { useParams } from "react-router";
import { Thumbs } from "./components/thumbs/thumbs";
import { type Image, type PortfolioParams } from "./types";
import { designImages, retouchImages } from "./utils";

import "./index.scss";

export const Portfolio = () => {
  const { portfolioType } = useParams<PortfolioParams>();

  const images = portfolioType === "retouching" ? retouchImages : designImages;

  const [activeImage, setActiveImage] = useState<Image>(images[0]);

  return (
    <div className="portfolio" key={portfolioType}>
      <div className="thumbs-container">
        <Thumbs activeThumb={activeImage} images={images} onHover={setActiveImage} />
      </div>
      <div className="large">
        <img alt={activeImage.text} src={`/images/${portfolioType}/large/${activeImage.filename}`} />
      </div>
    </div>
  );
};
