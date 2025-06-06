import { useParams } from "react-router";
import { type PortfolioParams, type ThumbProps } from "../../types";

import "./index.scss";

export const Thumbs = ({ activeThumb, images, onHover }: ThumbProps) => {
  const { portfolioType } = useParams<PortfolioParams>();
  return (
    <ul className={["thumbs", portfolioType].join(" ")}>
      {images.map((thumb) => (
        <li
          className={activeThumb.filename === thumb.filename ? "active" : ""}
          key={thumb.filename}
          onMouseEnter={() => onHover(thumb)}
        >
          <img alt={thumb.text} key={thumb.filename} src={`/images/${portfolioType}/thumbs/${thumb.filename}`} />
        </li>
      ))}
    </ul>
  );
};
