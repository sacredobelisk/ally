import "./index.scss";

type Props = {
  dates: string;
  degree: string;
  location?: string;
  school: string;
};

export const Education = ({ dates, degree, location, school }: Props) => (
  <div className="education">
    <div>
      <span className="school">{school}</span>, <span className="location">{location}</span>
    </div>
    <div>
      <span className="degree">{degree}</span> <span className="dates">{dates}</span>
    </div>
  </div>
);
