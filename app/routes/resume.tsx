import { Resume } from "../components/resume";

export function meta() {
  return [
    { title: "Resume - Allison Weinreb O'Brien" },
    { name: "description", content: "Personal Website of Allison Weinreb O'Brien, Graphic Designer" },
  ];
}

export default function ResumePage() {
  return <Resume />;
}
