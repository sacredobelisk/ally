import { memo } from "react";
import { useParams } from "react-router";
import { type PortfolioParams, type ThumbProps } from "../../types";

import "./index.scss";

export const Thumbs = memo(({ activeThumb, images, onHover }: ThumbProps) => {
  const { portfolioType } = useParams<PortfolioParams>();
  return (
    <ul className={["thumbs", portfolioType].join(" ")}>
      {images.map((thumb) => (
        <li
          aria-label={`View ${thumb.text}`}
          aria-pressed={activeThumb.filename === thumb.filename}
          className={activeThumb.filename === thumb.filename ? "active" : ""}
          key={thumb.filename}
          onFocus={() => onHover(thumb)}
          onMouseEnter={() => onHover(thumb)}
          role="button"
          tabIndex={0}
        >
          <img alt={thumb.text} loading="lazy" src={`/images/${portfolioType}/thumbs/${thumb.filename}`} />
        </li>
      ))}
    </ul>
  );
});

Thumbs.displayName = "Thumbs";
