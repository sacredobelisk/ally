export type Image = {
  filename: string;
  text: string;
};

export type PortfolioParams = { portfolioType: "graphic-design" | "retouching" };

export type ThumbProps = {
  activeThumb: Image;
  images: Image[];
  onHover: (image: Image) => void;
};
