import React, { Component } from 'react';
import './styles/Header.css';

export default class Header extends Component {

  render () {

    return (
      <header className="main-header">
        <h2>{this.props.pageTitle}</h2>
      </header>
    );
  }

}
