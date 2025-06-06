import { Education } from "./components/education/education";
import { Job } from "./components/job/job";
import { ResumeSection } from "./components/section/section";

import "./index.scss";

export const Resume = () => (
  <div className="resume">
    <div className="resume-inner">
      <ResumeSection title="Experience">
        <Job company="Various" dates="July 2006 - Present" title="Self-Employed">
          Designed logos, web graphics, websites, door hangers, retouched images, integrated logos realistically in
          photographs, edited PDFs, and created clipping paths for various clients.
        </Job>

        <Job
          company="Industrial Color"
          dates="March 2016 - September 2022"
          location="King of Prussia, PA"
          title="Retouch Artist"
        >
          Edited and executed any necessary touch-ups and color correction in Photoshop on product and model photographs
          for a diverse selection of clients such as New York &amp; Company, Dressbarn, Maurices, John Hardy, Draper
          James, Aeropostale, Apple TV+, and Bombas. Maintained a consistent and high-quality level of photographs for
          partner websites. Communicated with partners on a frequent basis to make sure their needs are met. Trained
          coworkers and freelancers and verified the work met client guidelines.
        </Job>

        <Job
          company="eBay Enterprise (Formerly GSI Interactive &amp; True Action)"
          dates="December 2007 - March 2016"
          location="King of Prussia, PA"
          title="Production Artist"
        >
          Retouched and color corrected a comprehensive amount of product images for diverse companies such as
          Christopher &amp; Banks, Calvin Klein Underwear, NFL, NHL, NBA, The Sports Authority, Betsey Johnson, and
          Dick&apos;s Sporting Goods. Communicate with the partner and studio team to ensure consistent, high-quality
          images. Worked on multiple clients in a fast paced environment.
        </Job>

        <Job
          company="The Trend (A Brian Tierney Publication)"
          dates="June 2006 - December 2007"
          location="King of Prussia, PA"
          title="Assistant Production Director"
        >
          Paginated numerous issues for a direct mail newspaper with over one million circulation on a weekly basis.
          Helped production director in troubleshooting printer problems and assisted other designers with day-to-day
          operations. Instructed clients and sales associates in layout and design standards.
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
      </ResumeSection>

      <ResumeSection title="Education">
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
      </ResumeSection>

      <ResumeSection title="Skills">
        Advanced in Adobe Photoshop, Adobe Illustrator, Quark XPress, Adobe Acrobat, Adobe Bridge, and Microsoft Word.
        Working knowledge of HTML, Adobe InDesign, Adobe Dreamweaver, Canva, and Figma. Capable of working easily with
        Mac and PC. Strong background in the fine arts including drawing and photography.
      </ResumeSection>
    </div>
  </div>
);
