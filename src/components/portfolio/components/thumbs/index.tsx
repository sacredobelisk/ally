import { useParams } from "react-router";

import { PortfolioParams, ThumbProps } from "../../types";

import "./index.scss";

export const Thumbs = ({ activeThumb, images, onHover }: ThumbProps) => {
  const { type = "portfolio" } = useParams<PortfolioParams>();
  return (
    <ul className="thumbs">
      {images.map((thumb) => (
        <li
          className={activeThumb.filename === thumb.filename ? "active" : ""}
          key={thumb.filename}
          onMouseEnter={() => onHover(thumb)}
        >
          <img alt={thumb.text} key={thumb.filename} src={`/images/${type}/thumbs/${thumb.filename}`} />
        </li>
      ))}
    </ul>
  );
};
