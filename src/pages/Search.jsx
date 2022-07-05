import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      nameartistOrBand: '',
      saveButton: true,
      artistAlbum: [],
      saveButtonClaean: '',
      loading: false,
    };
  }

listAlbum = async () => {
  this.setState({
    loading: true,
  });
  const { nameartistOrBand } = this.state;
  const value = await searchAlbumsAPI(nameartistOrBand);
  console.log(value);
  this.setState({
    nameartistOrBand: '',
    artistAlbum: value,
    loading: false,
  });
}

habilitImput = (event) => {
  const { value } = event.target;
  const caracters2 = 2;
  if (value.length >= caracters2) {
    this.setState({
      saveButton: false,
      nameartistOrBand: value,
      saveButtonClaean: value,
    });
  } else {
    this.setState({
      saveButton: true,
      nameartistOrBand: value,
    });
  }
}

render() {
  const { saveButton, nameartistOrBand, artistAlbum,
    saveButtonClaean, loading } = this.state;
  return (
    <div
      data-testid="page-search"
    >
      <Header />
      { loading ? <Loading />
        : (
          <form>
            <label htmlFor="Pesquisar">

              <input
                onChange={ this.habilitImput }
                value={ nameartistOrBand }
                type="text"
                name="Pesquisar"
                data-testid="search-artist-input"
              />
            </label>
            <button
              data-testid="search-artist-button"
              type="button"
              onClick={ this.listAlbum }
              disabled={ saveButton }
            >
              Pesquisar

            </button>
            <p>
              { `Resultado de álbuns de: ${saveButtonClaean}` }
            </p>
          </form>)}
      { artistAlbum[0]
        ? (
          artistAlbum.map((music, index) => (
            <Link
              key={ index }
              to={ `/album/${music.collectionId}` }
              data-testid={ `link-to-album-${music.collectionId}` }
            >
              <div className="Cards">
                <p>
                  { music.artistName}
                </p>
                <p>
                  { music.collectionName}
                </p>
                <img
                  src={ music.artworkUrl100 }
                  alt={ music.artistName }
                />
              </div>
            </Link>
          ))
        )
        : <span>Nenhum álbum foi encontrado</span> }

    </div>
  );
}
}
export default Search;
