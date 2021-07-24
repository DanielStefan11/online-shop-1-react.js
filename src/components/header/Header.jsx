import React from "react";
// React Router
import { Link, NavLink, withRouter } from "react-router-dom";
// Images & icons
import Logo from "../../assets/images/logo-2.png";
// CSS
import "./Header.css";
// Redux
import { connect } from "react-redux";
import { logoutUser } from "../../redux/user/UserActions";
import { openMenu } from "../../redux/mobileMenu/MobileMenuActions";
import {
  openMenuDropdown,
  closeMenuDropdown,
} from "../../redux/menuDropdown/MenuDropdownActions";
// React Icons
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";
// components
import MobileMenu from "./MobileMenu";
import Overlay from "./Overlay";
// products data
import products from "../../utils/products.json";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const categories = Object.keys(products);
    this.setState({ categories });
  }

  render() {
    const laptops = "laptops",
      smartphones = "smartphones",
      pcs = "PCs",
      accesories = "accesories",
      smarttvs = "smarttvs",
      cameras = "cameras";

    return (
      <header className="border-bottom">
        <div className="menu-container container-fluid h-100 container-min-max-width d-flex justify-content-between align-items-center">
          <Link to="/" className="my-3">
            <img src={Logo} alt="Sirluggia Shop" className="logo" />
          </Link>

          <div>
            <div className="links-container d-flex justify-content-end">
              <NavLink
                exact
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#6A8ED9",
                }}
                className="h5 mr-3"
              >
                Home
              </NavLink>

              <div
                className="h5 mr-3 dropdown-btn"
                onMouseEnter={() => this.props.openMenuDropdown()}
              >
                Products
                <ArrowDown />
              </div>

              {this.props.isMenuDropdownOpen && (
                <div
                  className="dropdown-wrapper"
                  onMouseLeave={() => this.props.closeMenuDropdown()}
                >
                  {this.state.categories.map((categoryItem, index) => (
                    <div
                      className="link-item"
                      key={index}
                      onClick={() => {
                        this.props.history.push(`/category/${categoryItem}`);
                        this.props.closeMenuDropdown();
                      }}
                    >
                      {(() => {
                        if (categoryItem === laptops) return "Laptops";
                        if (categoryItem === smartphones) return "Smartphones";
                        if (categoryItem === pcs) return "PCs";
                        if (categoryItem === accesories) return "Accessories";
                        if (categoryItem === smarttvs) return "Smart TVs";
                        if (categoryItem === cameras) return "Photo/Video";
                      })()}
                    </div>
                  ))}
                </div>
              )}

              <NavLink
                to="/about"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#6A8ED9",
                }}
                className="h5 mr-3"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#6A8ED9",
                }}
                className="h5 mr-3"
              >
                Contact
              </NavLink>

              {this.props.user ? (
                <p className="logout h5" onClick={() => this.props.signOut()}>
                  Delogare
                </p>
              ) : (
                <Link to="/login" className="h5 mb-0">
                  Login
                </Link>
              )}
            </div>
          </div>

          <div className="d-flex">
            <div className="d-flex align-items-center">
              <Link to="/cart" className="d-flex">
                <FaShoppingCart className="ml-2 added-products-icons" />
                <p className="ml-1 mb-0">
                  <strong>{this.props.numberOfProducts}</strong>
                </p>
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <Link to="/favorite" className="d-flex">
                <AiFillHeart className="ml-2 added-products-icons" />
                <p className="ml-1 mb-0">
                  <strong>{this.props.numberOfFavoriteProducts}</strong>
                </p>
              </Link>
            </div>
          </div>

          <button className="menu-icon" onClick={() => this.props.openMenu()}>
            <MenuIcon />
          </button>

          <Overlay />
          <MobileMenu categories={this.state.categories} />
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.cart.products.length,
    user: state.user.data,
    numberOfFavoriteProducts: state.favorites.products.length,
    isMenuOpen: state.mobileMenu.isOpen,
    isMenuDropdownOpen: state.menuDropdown.isDropdownOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(logoutUser()),
    openMenu: () => dispatch(openMenu()),
    openMenuDropdown: () => dispatch(openMenuDropdown()),
    closeMenuDropdown: () => dispatch(closeMenuDropdown()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
