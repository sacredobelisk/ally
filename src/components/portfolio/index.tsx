import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Thumbs } from "./components/thumbs";
import { Image, PortfolioParams } from "./types";
import { designImages, retouchImages } from "./utils";

import "./index.scss";

export const Portfolio = () => {
  const { portfolioType } = useParams<PortfolioParams>();

  const [images, setImages] = useState<Image[]>(portfolioType === "retouching" ? retouchImages : designImages);
  const [activeImage, setActiveImage] = useState<Image>(images[0]);

  useEffect(() => {
    setImages(portfolioType === "retouching" ? retouchImages : designImages);
  }, [portfolioType]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

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
