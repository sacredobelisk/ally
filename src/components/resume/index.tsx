import { Education } from "../education";
import { Job } from "../job";
import "./index.scss";

export const Resume = () => {
  return (
    <div className="resume">
      <h3 className="experience">
        <span>Experience</span>
      </h3>
      <div className="section">
        <Job
          company="Industrial Color"
          dates="December 2007 - Present"
          location="King of Prussia, PA"
          title="Retouch Artist"
        >
          Edit a comprehensive amount of product images for diverse companies such as Christopher &amp; Banks, Calvin
          Klein Underwear, NFL, NHL, NBA, The Sports Authority, Betsey Johnson, and Dick&apos;s Sporting Goods.
          Communicate with the partner and studio team to ensure consistent, high quality images.
        </Job>

        <Job company="Various" dates="July 2006 - Present" title="Freelance Graphic Designer">
          Designed the layout and graphics of the Web site for O&apos;Brien Family Tree Service
          (http://www.obrienfamilytreeservice.com), the online portfolio of editor Debra Bell (http://www.dsbell.com),
          and the Web site for Dimple Date (http://dimpledate.com)
        </Job>

        <Job
          company="The Trend (A Brian Tierney Publication)"
          dates="June 2006 - December 2007"
          location="King of Prussia, PA"
          title="Assistant Production Director"
        >
          Paginate numerous issues for a direct mail newspaper with over one million circulation on a weekly basis. Aid
          production director in troubleshooting printer problems and help other designers with day-to-day operations.
          Instructs clients and sales associates in layout and design standards.
        </Job>

        <Job
          company="The Trend (A Brian Tierney Publication)"
          dates="September 2004 - June 2006"
          location="King of Prussia, PA"
          title="Production Assistant/Typesetter"
        >
          Designed a large volume of advertisements for a variety of clients. Prepared multiple issues and commercial
          jobs for print on a weekly deadline.
        </Job>

        <Job
          company="College Directory Publishing, Inc."
          dates="June 2004 - September 2004"
          location="Conshohocken, PA"
          title="Graphic Design Intern"
        >
          Created a vast amount of advertisements for college phone directories nationwide. Completed projects with
          speed and accuracy.
        </Job>
      </div>

      <h3 className="education">
        <span>Education</span>
      </h3>
      <div className="section">
        <Education
          dates="Graduated Cum Laude in April 2004"
          degree="Bachelor of Fine Arts in Graphic Design"
          location="Jacksonville, FL"
          school="University of North Florida"
        />
        <Education
          dates="Graduated in August 2002"
          degree="Associates in Science in Graphic Design"
          location="Orlando, FL"
          school="Valencia Community College"
        />
      </div>

      <h3>
        <span>Skills</span>
      </h3>
      <div className="section skills">
        Advanced in Adobe Photoshop, Adobe Illustrator, Quark XPress, Adobe, and Microsoft Word. Working knowledge of
        HTML, Adobe InDesign, Adobe Dreamweaver. Able to work easily with Mac and PC. Strong background in the fine arts
        including drawing and photography.
      </div>
    </div>
  );
};
