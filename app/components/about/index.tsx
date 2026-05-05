import image from "./ally.png";

import "./index.scss";

export const About = () => (
  <div className="about">
    <h2 className="visually-hidden">About Ally</h2>
    <img src={image} alt="Digital illustration of Ally as a kid" />

    <p>
      Hi! I&apos;m Ally O&apos;Brien, a retouch artist and graphic designer based outside of Philadelphia. I specialize
      in high-end retouching, color correction, logo design, print design, and web graphics.
    </p>
  </div>
);
