import "./index.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
  title: string;
};

export const ResumeSection = ({ className, children, title }: Props) => (
  <div className={["resume-section", className].filter(Boolean).join(" ")}>
    <h2 className="section-header">{title}</h2>
    <div className="section-content">{children}</div>
  </div>
);
