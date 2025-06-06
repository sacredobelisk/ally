import type { Route } from "../+types/root";
import { Portfolio } from "../components/portfolio/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio - Allison Weinreb O'Brien" },
    { name: "description", content: "Portfolio - Allison Weinreb O'Brien" },
  ];
}

export default function Component({ params }: Route.ComponentProps) {
  return <Portfolio key={params.portfolioType} />;
}
