import "./index.scss";

type Props = {
  dates: string;
  degree: string;
  location?: string;
  school: string;
};

export const Education = ({ dates, degree, location, school }: Props) => {
  return (
    <div className="education">
      <div>
        {school}, {location}
      </div>
      <div>
        <span className="degree">{degree}</span> <span className="dates">{dates}</span>
      </div>
    </div>
  );
};
