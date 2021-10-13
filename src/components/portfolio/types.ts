export type Image = {
  filename: string;
  text: string;
};

export type PortfolioParams = { type: string };

export type ThumbProps = {
  activeThumb: Image;
  images: Image[];
  onHover: (image: Image) => void;
};
