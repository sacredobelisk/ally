import { Contact } from "../components/contact";

export function meta() {
  return [
    { title: "Contact - Allison Weinreb O'Brien" },
    {
      name: "description",
      content: "Get in touch with Allison Weinreb O'Brien for graphic design projects, collaborations, or inquiries.",
    },
  ];
}

export default function ContactPage() {
  return <Contact />;
}
