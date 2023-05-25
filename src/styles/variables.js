import { css } from "styled-components";

const variables = css`
  :root {
    /* FONTS */
    --ff-oswald: "Oswald", "Sofia Sans Condensed", "DM Sans", "Raleway",
      sans-serif;
    --ff-sofia: "Sofia Sans Condensed", "DM Sans", "Raleway", sans-serif;
    --ff-dmsans: "DM Sans", "Sofia Sans Condensed", sans-serif;
    --ff-chivo: "Chivo Mono", "Sofia Sans Condensed", sans-serif;
    --ff-rubik: "Rubik", "Sofia Sans Condensed", sans-serif;

    /* SIZES */
    --fz-sm: clamp(12px, 2vw, 16px);
    --fz-smm: clamp(14px, 2vw, 18px);
    --fz-md: clamp(16px, 2vw, 20px);
    --fz-lg: clamp(20px, 3vw, 24px);
    --fz-subtitle: clamp(24px, 2vw, 2rem);
    --fz-title: clamp(24px, 4vw, 3.5rem);
    --fz-header: clamp(30px, 8vw, 80px);

    /* BORDER */
    --border-size: 1px;
    --border-radius: 16px;
    --br-buttns: 8px;
    --border-light: rgba(255, 255, 255, 0.4);

    /* BACKGROUND COLOR */
    --bg-orange: linear-gradient(
      93.3deg,
      rgba(236, 80, 80, 1) 21.5%,
      rgba(255, 97, 29, 1) 93.9%
    );
    --bg-light: rgba(255, 255, 255, 0.1);
    --bg-dark: rgba(0, 0, 0, 0.1);
    --bg-light-hover: rgba(255, 225, 142, 0.1);
    --bg-dark-hover: rgba(0, 0, 0, 0.15);
    --bg-color: rgba(255, 255, 255, 0.1);
    --bg-color-hover: rgba(255, 255, 255, 0.05);

    --c-dark: #000;
    --c-light: #fff;
  }
`;

export default variables;
