import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './Home';
import Auth from './Auth';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childToRender = this.props.loggedIn ? <Home /> : <Auth />;

    return (
      <div>App
        <Navbar />
          <Auth />
        <Footer />
      </div>
		);
	}
}

function mapStateToProps(state) {
  const loggedIn = state.userLogin.loggedIn;
  return {
    loggedIn,
  };
}

App = connect(mapStateToProps)(App);

export default App;