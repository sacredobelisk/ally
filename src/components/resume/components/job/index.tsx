import "./index.scss";

type Props = {
  children?: React.ReactNode;
  company?: string;
  dates: string;
  location?: string;
  title: string;
};

export const Job = ({ children, company, dates, location, title }: Props) => (
  <div className="job">
    <div>
      <span className="title">{title}</span> &bull; <span className="dates">{dates}</span>
    </div>

    <div>
      {company && <span className="company">{company}</span>}
      {company && location && <>,</>} {location && <span className="location">{location}</span>}
    </div>

    {children && <div>{children}</div>}
  </div>
);
