import { Contact } from "../components/contact";

export function meta() {
  const title = "Contact - Allison Weinreb O'Brien";
  const description =
    "Get in touch with Allison Weinreb O'Brien for graphic design projects, collaborations, or inquiries.";

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

export default function ContactPage() {
  return <Contact />;
}
