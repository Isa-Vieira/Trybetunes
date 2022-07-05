import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { key, previewUrl, trackName } = this.props;
    return (
      <div key={ key }>
        <p>
          { trackName }
        </p>
        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track
            kind="captions"
          />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        {/*        <input
          text="Favorita"
          type="checkbox"
          dataTestId={ `checkbox-music-${trackId}` }
        />  */}
      </div>

    );
  }
}
MusicCard.propTypes = {
  key: PropTypes.string,
  previewUrl: PropTypes.string,
  trackName: PropTypes.string,
}.isRequired;
export default MusicCard;
