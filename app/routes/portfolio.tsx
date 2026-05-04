import { Portfolio } from "../components/portfolio";
import { type Image, PortfolioType } from "../components/portfolio/types";
import { designImages, retouchImages } from "../components/portfolio/utils";
import type { Route } from "./+types/portfolio";

const descriptions: Record<string, string> = {
  [PortfolioType.Retouching]:
    "Explore Allison Weinreb O'Brien's photo retouching portfolio, featuring professional image enhancement and digital editing work.",
  [PortfolioType.GraphicDesign]:
    "View Allison Weinreb O'Brien's graphic design portfolio, showcasing branding, logos, and creative visual design projects.",
};

export async function clientLoader({ params }: Route.ClientLoaderArgs): Promise<Image[]> {
  const { portfolioType = PortfolioType.GraphicDesign } = params;
  return portfolioType === PortfolioType.Retouching ? retouchImages : designImages;
}

export function meta({ params }: Route.MetaArgs) {
  const type = params.portfolioType ?? PortfolioType.GraphicDesign;
  const title = `${capitalizeWords(type.replaceAll("-", " "))} Portfolio - Allison Weinreb O'Brien`;
  const description =
    descriptions[type] ||
    `View Allison Weinreb O'Brien's ${type} portfolio showcasing professional graphic design work.`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `https://www.allisonweinreb.com/portfolio/${type}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function PortfolioPage({ loaderData, params }: Route.ComponentProps) {
  return <Portfolio key={params.portfolioType} images={loaderData} />;
}

function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
