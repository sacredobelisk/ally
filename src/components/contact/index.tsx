import image from "./circle.png";

import "./index.scss";

export const Contact = () => (
  <div className="contact">
    <img src={image} alt="Digital illustration of a circle" />

    <ul>
      <li>
        <span>LinkedIn</span>
        <a href="https://www.linkedin.com/in/allyswobrien/" target="_blank" rel="noreferrer">
          https://www.linkedin.com/in/allyswobrien/
        </a>
      </li>
      <li>
        <span>Email</span>
        <a href="mailto:allyswo@gmail.com">allyswo@gmail.com</a>
      </li>
      <li>
        <span>Instagram</span>
        <a href="https://www.instagram.com/AllyOArtStuff/" target="_blank" rel="noreferrer">
          https://www.instagram.com/AllyOArtStuff/
        </a>
      </li>
    </ul>
  </div>
);
