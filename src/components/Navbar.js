import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/fenixlogo2.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWallet} from "@fortawesome/free-solid-svg-icons";
import Chains from "components/Chains";


const Navbar = class extends React.Component {
  get displayName () { return 'Component'; }
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      },
    );
  }

  render() {
    return (


      <nav
        className="navbar is-transparent is-desktop"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container level">
          <div className="column ">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Saturnian" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="column centerthisshit">
            <div className="navbar-start navbarlinks has-text-centered centeredtext">
              <Link className="navbar-item" to="/wallet">
                Wallet
              </Link>
              <Link className="navbar-item" to="/dex">
                Dex
              </Link>
              <Link className="navbar-item" to="/balances">
                Balances
              </Link>
              <Link className="navbar-item" to="/erc20transfers">
                Transfers
              </Link>
            </div>
            </div>
            <div className="column">
            <div className="navbar-end has-text-centered">
              <Chains />

              <Link className="navbar-item">
                <span className="icon">
                  <FontAwesomeIcon icon={faWallet} className="socialiconfooter is-size-1-widescreen has-text-warning"/>
                </span>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
