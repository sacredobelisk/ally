import { About } from "../components/about";

export function meta() {
  return [
    { title: "About - Allison Weinreb O'Brien" },
    {
      name: "description",
      content:
        "Learn about Allison Weinreb O'Brien, a creative graphic designer specializing in visual design, branding, and digital art.",
    },
  ];
}

export default function AboutPage() {
  return <About />;
}
