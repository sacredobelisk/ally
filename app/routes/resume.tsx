import { Resume } from "../components/resume";

export function meta() {
  const title = "Resume - Allison Weinreb O'Brien";
  const description =
    "View Allison Weinreb O'Brien's professional resume, showcasing skills, experience, and expertise in graphic design.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.allisonweinreb.com/resume" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function ResumePage() {
  return <Resume />;
}
