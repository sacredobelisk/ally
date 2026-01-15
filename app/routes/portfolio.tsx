import { Route } from "../../.react-router/types/app/routes/+types/portfolio";
import { Portfolio } from "../components/portfolio";
import { Image } from "../components/portfolio/types";
import { designImages, retouchImages } from "../components/portfolio/utils";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const { portfolioType } = params;
  return portfolioType === "retouching" ? retouchImages : designImages;
}

export function meta({ params }: Route.MetaArgs) {
  const type = params.portfolioType;
  const descriptions: Record<string, string> = {
    retouching:
      "Explore Allison Weinreb O'Brien's photo retouching portfolio, featuring professional image enhancement and digital editing work.",
    "graphic-design":
      "View Allison Weinreb O'Brien's graphic design portfolio, showcasing branding, logos, and creative visual design projects.",
  };

  return [
    { title: `${capitalizeWords(params.portfolioType.replaceAll("-", " "))} Portfolio - Allison Weinreb O'Brien` },
    {
      name: "description",
      content:
        descriptions[type] ||
        `View Allison Weinreb O'Brien's ${type} portfolio showcasing professional graphic design work.`,
    },
  ];
}

export default function PortfolioPage({ loaderData, params }: Route.ComponentProps) {
  return <Portfolio key={params.portfolioType} images={loaderData as unknown as Image[]} />;
}

function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
