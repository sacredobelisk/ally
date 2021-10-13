import "./index.scss";

type Props = {
  dates: string;
  company?: string;
  location?: string;
  title: string;
};

export const Job: React.FC<Props> = ({ children, company, dates, location, title }) => {
  return (
    <div className="job">
      <span className="dates">{dates}</span>
      <>
        {(company || location) && <> &bull; </>}
        {company && <span className="company">{company}</span>}
        {company && location && <>,</>} {location && <span className="location">{location}</span>}
      </>{" "}
      <span className="title">&bull; {title}</span> <div>{children}</div>
    </div>
  );
};
