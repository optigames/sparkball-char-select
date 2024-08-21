import PropTypes from "prop-types";

export default function Tips({ character }) {
  return (
    <>
      <div
        className="stats__abilities-desc"
        dangerouslySetInnerHTML={{ __html: character.tips }}
      />
    </>
  );
}

Tips.propTypes = {
  character: PropTypes.shape({
    tips: PropTypes.string.isRequired,
  }).isRequired,
};
