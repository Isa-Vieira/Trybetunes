import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.userName();
  }

  userName = () => {
    this.setState({ loading: true });
    getUser()
      .then((response) => { this.setState({ name: response.name, loading: false }); });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : (
          <p data-testid="header-user-name">
            { name }
          </p>
        )}
      </header>
    );
  }
}
export default Header;
