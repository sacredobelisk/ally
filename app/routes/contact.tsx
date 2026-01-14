import { Contact } from "../components/contact";

export function meta() {
  return [
    { title: "Contact - Allison Weinreb O'Brien" },
    { name: "description", content: "Personal Website of Allison Weinreb O'Brien, Graphic Designer" },
  ];
}

export default function ContactPage() {
  return <Contact />;
}
