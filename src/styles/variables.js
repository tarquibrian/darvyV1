import { css } from "styled-components";

const variables = css`
  :root {
    /* --fz-xxs: 12px; */
    /* --fz-xs: 13px; */
    /* --fz-sm: 14px; */
    /* --fz-md: 16px; */
    /* --fz-lg: 18px; */
    /* --fz-xl: 20px; */
    /* --fz-xxl: 22px; */
    /* --fz-heading: 32px; */

    /* FONTS */
    --ff-oswald: "Oswald", "Sofia Sans Condensed", "DM Sans", "Raleway",
      sans-serif;
    --ff-sofia: "Sofia Sans Condensed", "DM Sans", "Raleway", sans-serif;
    --ff-dmsans: "DM Sans", "Sofia Sans Condensed", sans-serif;

    --fz-sm: clamp(16px, 2vw, 20px);
    --fz-md: clamp(16px, 2vw, 20px);
    --fz-header: clamp(30px, 8vw, 80px);

    /* BORDER */
    --border-size: 1px;
    --border-radius: 4px;
    --border-light: rgba(255, 255, 255, 0.4);

    /* BACKGROUND COLOR */
    --bg-light: rgba(255, 255, 255, 0.1);
    --bg-dark: rgba(0, 0, 0, 0.1);
    --bg-light-hover: rgba(255, 225, 142, 0.1);
  }
`;

export default variables;
