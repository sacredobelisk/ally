import { About } from "../components/about";

export function meta() {
  const title = "About - Allison Weinreb O'Brien";
  const description =
    "Learn about Allison Weinreb O'Brien, a creative graphic designer specializing in visual design, branding, and digital art.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function AboutPage() {
  return <About />;
}
