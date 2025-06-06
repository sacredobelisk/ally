import type { Route } from "../+types/root";
import { Contact } from "../components/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - Allison Weinreb O'Brien" },
    { name: "description", content: "Contact - Allison Weinreb O'Brien" },
  ];
}

export default function Component() {
  return <Contact />;
}
