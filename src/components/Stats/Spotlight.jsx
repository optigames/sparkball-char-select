import ModalVideo from "react-modal-video";
import PropTypes from "prop-types";

export default function Spotlight({
  isOpen,
  setOpen,
  setSelectedCategory,
  youtubeId,
}) {
  const handleClosePopup = () => {
    setOpen(false);
    setSelectedCategory("ABILITIES");
  };

  return (
    <ModalVideo
      channel="youtube"
      youtube={{ mute: 1, autoplay: 1 }}
      isOpen={isOpen}
      videoId={youtubeId}
      onClose={handleClosePopup}
      ratio="16:9"
    />
  );
}

Spotlight.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  youtubeId: PropTypes.string.isRequired,
};
