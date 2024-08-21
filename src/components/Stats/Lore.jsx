import PropTypes from "prop-types";

export default function Lore({ character }) {
  return (
    <>
      <div className="stats__abilities-name">{character.loretitle}</div>
      <div
        className="stats__abilities-desc"
        dangerouslySetInnerHTML={{ __html: character.lore }}
      />
    </>
  );
}

Lore.propTypes = {
  character: PropTypes.shape({
    loretitle: PropTypes.string.isRequired,
    lore: PropTypes.string.isRequired,
  }).isRequired,
};
