import { Resume } from "../components/resume";

export function meta() {
  return [
    { title: "Resume - Allison Weinreb O'Brien" },
    {
      name: "description",
      content:
        "View Allison Weinreb O'Brien's professional resume, showcasing skills, experience, and expertise in graphic design.",
    },
  ];
}

export default function ResumePage() {
  return <Resume />;
}
