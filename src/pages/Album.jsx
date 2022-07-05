import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

// criar com constructor
class Album extends React.Component {
      state = {
        musicas: [],
        nameArtist: '',
        albumArtist: '',
      }

      componentDidMount() {
        this.musics();
      }

    musics = async () => {
      const { match: { params: { id } } } = this.props;
      const musicApi = await getMusics(id);
      const [index, ...musicas] = musicApi;
      this.setState({ musicas,
        nameArtist: index.artistName,
        albumArtist: index.collectionName });
    }

    render() {
      const { nameArtist, albumArtist, musicas } = this.state;
      return (
        <div data-testid="page-album">
          <Header />
          <p data-testid="artist-name">{nameArtist}</p>
          <p data-testid="album-name">{albumArtist}</p>
          <div>
            {musicas.map((elem) => (
              <MusicCard
                key={ elem.trackId }
                trackName={ elem.trackName }
                src={ elem.previewUrl }
              />
            ))}
          </div>
        </div>
      );
    }
}
Album.propTypes = {
  match: PropTypes.string,
}.isRequired;
export default Album;
