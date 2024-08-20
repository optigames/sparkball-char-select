import PropTypes from "prop-types";

Difficulty.propTypes = {
  style: PropTypes.string.isRequired,
};

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
export const Difficulty = ({ style }) => (
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
        style={style}
      />
    </g>
  </svg>
);
