import PropTypes from "prop-types";

export const NextArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32.237"
    height="29.238"
    viewBox="0 0 32.237 29.238"
  >
    <path
      id="Path_10432"
      data-name="Path 10432"
      d="M12994.354,13674.438v-11.114l32.237,15.237-32.237,14v-11.134l6.991-2.867Z"
      transform="translate(-12994.354 -13663.324)"
      fill="currentColor"
    />
  </svg>
);

export const PrevArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32.237"
    height="29.238"
    viewBox="0 0 32.237 29.238"
  >
    <path
      id="Path_10433"
      data-name="Path 10433"
      d="M12994.354,13674.438v-11.114l32.237,15.237-32.237,14v-11.134l6.991-2.867Z"
      transform="translate(13026.592 13692.563) rotate(180)"
      fill="currentColor"
    />
  </svg>
);
export const Difficulty = ({ DifficultyStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13.121"
    height="24.5"
    viewBox="0 0 13.121 24.5"
  >
    <g id="noun-electric-3408686" transform="translate(-25.033 -2)">
      <path
        id="Path_10415"
        data-name="Path 10415"
        d="M36.866,10.875H33.259l2.668-7.337A.783.783,0,0,0,35.21,2.5h-6.4a.769.769,0,0,0-.766.618L25.551,14.8a.779.779,0,0,0,.766.939h2.89l-2.619,9.239a.781.781,0,0,0,1.383.667L37.508,12.11A.8.8,0,0,0,36.866,10.875Z"
        transform="translate(0)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        style={DifficultyStyle}
      />
    </g>
  </svg>
);

export const TopShape = ({ ShapeMain, ShapeBorder }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="917.894"
    height="320.98"
    viewBox="0 0 917.894 320.98"
    className="hero__top-shape"
  >
    <g
      id="Group_8738"
      data-name="Group 8738"
      transform="translate(-1014.982 4.913)"
    >
      <path
        id="Path_10410"
        data-name="Path 10410"
        d="M-1700,13987c5.959,3.782,625.894,228.042,625.894,228.042l-10.054-38.326,285.8,122.979V13987Z"
        transform="translate(2723 -13987)"
        fill={ShapeMain}
      />
      <path
        id="Path_10428"
        data-name="Path 10428"
        d="M12406.908,13579.71l647.122,243.79-6.875-34.511,277.646,108.983-314.883-146.219,11.287,43.2-600.313-217.965Z"
        transform="translate(-11391.926 -13581.905)"
        fill={ShapeBorder}
      />
    </g>
  </svg>
);

export const BottomShape = ({ ShapeMain, ShapeBorder }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1688.093"
    height="159.12"
    viewBox="0 0 1688.093 159.12"
    className="hero__bottom-shape"
  >
    <g
      id="Group_8735"
      data-name="Group 8735"
      transform="translate(-12891 -15876.88)"
    >
      <path
        id="Path_10437"
        data-name="Path 10437"
        d="M-2723,14926.653l786.312,74.817-82.239,28.067,984.019,31.717H-2723Z"
        transform="translate(15614 974.745)"
        fill={ShapeMain}
      />
      <path
        id="Path_10427"
        data-name="Path 10427"
        d="M11385,15678.462l782.277,74.826-74.688,27.517,966.826,32.155-1020.582-21.64,64.861-27.518L11385,15707.394Z"
        transform="translate(1506 223)"
        fill={ShapeBorder}
      />
      <g
        id="Group_8734"
        data-name="Group 8734"
        transform="translate(12891.502 14957)"
      >
        <path
          id="Subtraction_124"
          data-name="Subtraction 124"
          d="M-12309.011-14549.605l-254.491-17.952v-20.562l254.491,38.513Z"
          transform="translate(12563 15508)"
          fill={ShapeBorder}
        />
      </g>
    </g>
  </svg>
);
export const BottomShadow = ({ ShapeMain }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1025.996"
    height="395.208"
    viewBox="0 0 1025.996 395.208"
    className="hero__bottom-shadow"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0.5"
        x2="0.648"
        y2="1.197"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" startOffset={ShapeMain} stopOpacity="0.2" />
        <stop offset="1" stopColor={ShapeMain} stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      id="Subtraction_121"
      data-name="Subtraction 121"
      d="M-11865.006-14337.794v0L-12891-14733l913.456,268.058-467.356-199.3,579.9,148.764v177.686Z"
      transform="translate(12891.002 14733.002)"
      fill="url(#linear-gradient)"
    />
  </svg>
);

Difficulty.propTypes = {
  DifficultyStyle: PropTypes.object.isRequired,
};

TopShape.propTypes = {
  ShapeMain: PropTypes.string.isRequired,
  ShapeBorder: PropTypes.string.isRequired,
};

BottomShape.propTypes = {
  ShapeMain: PropTypes.string.isRequired,
  ShapeBorder: PropTypes.string.isRequired,
};

BottomShadow.propTypes = {
  ShapeMain: PropTypes.string.isRequired,
};

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1688.093"
  height="159.12"
  viewBox="0 0 1688.093 159.12"
>
  <g
    id="Group_8735"
    data-name="Group 8735"
    transform="translate(-12891 -15876.88)"
  >
    <path
      id="Path_10437"
      data-name="Path 10437"
      d="M-2723,14926.653l786.312,74.817-82.239,28.067,984.019,31.717H-2723Z"
      transform="translate(15614 974.745)"
      fill="#db77e7"
    />
    <path
      id="Path_10427"
      data-name="Path 10427"
      d="M11385,15678.462l782.277,74.826-74.688,27.517,966.826,32.155-1020.582-21.64,64.861-27.518L11385,15707.394Z"
      transform="translate(1506 223)"
      fill="#feb4ff"
    />
    <g
      id="Group_8734"
      data-name="Group 8734"
      transform="translate(12891.502 14957)"
    >
      <path
        id="Subtraction_124"
        data-name="Subtraction 124"
        d="M-12309.011-14549.605l-254.491-17.952v-20.562l254.491,38.513Z"
        transform="translate(12563 15508)"
        fill="#feb4ff"
      />
    </g>
  </g>
</svg>;
