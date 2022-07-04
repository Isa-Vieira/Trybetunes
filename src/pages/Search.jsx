import React from 'react';
import Header from './Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      saveButton: true,
    };
  }

habilitImput = (event) => {
  const { value } = event.target;
  const caracters2 = 2;
  if (value.length >= caracters2) {
    this.setState({
      saveButton: false,
    });
  } else {
    this.setState({
      saveButton: true,
    });
  }
}

render() {
  const { saveButton } = this.state;
  return (
    <div data-testid="page-search">
      <Header />
      <form>
        <label htmlFor="Pesquisar">
          <input
            onChange={ this.habilitImput }
            type="text"
            name="Pesquisar"
            data-testid="search-artist-input"
          />
        </label>
        <button
          data-testid="search-artist-button"
          type="button"
          onClick={ this.clickButton }
          disabled={ saveButton }
        >
          Pesquisar

        </button>
      </form>
    </div>
  );
}
}
export default Search;
