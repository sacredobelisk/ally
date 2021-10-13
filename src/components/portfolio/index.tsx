import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { designImages, retouchImages } from "./utils";
import { Image, PortfolioParams } from "./types";
import { Thumbs } from "./components/thumbs";

import "./index.scss";

export const Portfolio = () => {
  const { type = "portfolio" } = useParams<PortfolioParams>();

  const [images, setImages] = useState<Image[]>(type === "retouch" ? retouchImages : designImages);
  const [activeImage, setActiveImage] = useState<Image>(images[0]);

  useEffect(() => {
    setImages(type === "retouch" ? retouchImages : designImages);
  }, [type]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <div className="portfolio">
      <div className="thumbs-container">
        <Thumbs activeThumb={activeImage} images={images} onHover={setActiveImage} />
      </div>
      <div className="large">
        <img alt={activeImage.text} src={`/images/${type}/large/${activeImage.filename}`} />
      </div>
    </div>
  );
};
