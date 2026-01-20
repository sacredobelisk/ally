import image from "./circle.png";

import "./index.scss";

export const Contact = () => (
  <div className="contact">
    <h2 className="visually-hidden">Contact Information</h2>
    <img src={image} alt="Decorative circle illustration" />

    <ul>
      <li>
        <span>LinkedIn</span>
        <a
          aria-label="LinkedIn profile (opens in new tab)"
          href="https://www.linkedin.com/in/allyswobrien/"
          rel="noreferrer"
          target="_blank"
        >
          https://www.linkedin.com/in/allyswobrien/
        </a>
      </li>
      <li>
        <span>Email</span>
        <a href="mailto:allyswo@gmail.com" aria-label="Send email to allyswo@gmail.com">
          allyswo@gmail.com
        </a>
      </li>
      <li>
        <span>Instagram</span>
        <a
          aria-label="Instagram profile (opens in new tab)"
          href="https://www.instagram.com/AllyOArtStuff/"
          rel="noreferrer"
          target="_blank"
        >
          https://www.instagram.com/AllyOArtStuff/
        </a>
      </li>
    </ul>
  </div>
);
