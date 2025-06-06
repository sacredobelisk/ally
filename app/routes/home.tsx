import type { Route } from "../+types/root";
import { About } from "../components/about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Allison Weinreb O'Brien" },
    { name: "description", content: "About - Allison Weinreb O'Brien" },
  ];
}

export default function Component() {
  return <About />;
}
