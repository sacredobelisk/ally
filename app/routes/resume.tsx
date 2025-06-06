import type { Route } from "../+types/root";
import { Resume } from "../components/resume/resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume - Allison Weinreb O'Brien" },
    { name: "description", content: "Resume - Allison Weinreb O'Brien" },
  ];
}

export default function Component() {
  return <Resume />;
}
