export type Image = {
  filename: string;
  text: string;
};

export enum PortfolioType {
  GraphicDesign = "graphic-design",
  Retouching = "retouching",
}

export type PortfolioParams = { portfolioType: PortfolioType };

export type ThumbProps = {
  activeThumb: Image;
  images: Image[];
  onHover: (image: Image) => void;
};
