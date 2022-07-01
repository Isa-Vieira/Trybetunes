import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      saveButton: true,
      name: '',
      usuariocriado: false,
    };
  }

    handleInput = (event) => {
      const { value } = event.target;
      const caracters = 3;
      if (value.length >= caracters) {
        this.setState({
          saveButton: false,
          name: value,
        });
      } else {
        this.setState({
          saveButton: true });
      }
    }

    clickButton = (event) => {
      event.preventDefault();
      const { name } = this.state;
      this.setState({ loading: true });
      createUser({ name })
        .then(() => {
          this.setState({ usuariocriado: true });
        });
    }

    render() {
      const { saveButton, loading, usuariocriado } = this.state;
      if (usuariocriado) {
        return <Redirect to="/search" />;
      }
      return (
        <div data-testid="page-login">
          { loading ? <Loading /> : (
            <form>
              <label htmlFor="login-name-input">
                <input
                  onChange={ this.handleInput }
                  type="text"
                  name="name"
                  data-testid="login-name-input"
                  placeholder="userName"
                />

              </label>
              <button
                type="button"
                data-testid="login-submit-button"
                onClick={ this.clickButton }
                disabled={ saveButton }
              >
                Entrar

              </button>
            </form>
          )}
        </div>
      );
    }
}
export default Login;
