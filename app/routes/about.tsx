import { About } from "../components/about";

export function meta() {
  return [
    { title: "About - Allison Weinreb O'Brien" },
    { name: "description", content: "Personal Website of Allison Weinreb O'Brien, Graphic Designer" },
  ];
}

export default function AboutPage() {
  return <About />;
}
