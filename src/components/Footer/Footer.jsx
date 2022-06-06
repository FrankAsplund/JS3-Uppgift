import React, { Component } from "react";
import { MenuItems } from "./FooterItems";
import "./Footer.css";

class Footer extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <footer className="FooterItems">
        <h1 className="navbar-logo">
          Skapat med React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.path}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    );
  }
}

export default Footer;
