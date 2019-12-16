import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';
// In header dorim sa afisam numarul de produse din cart. Asadar, trebuie sa ne conectam
// la store-ul global pentru a-l extrage
import { connect } from 'react-redux';

const Header = (props) => {
    const {user, signOut, handleSignOut} = props;

    function handleHeaderSignOut() {
        const signOutResponse = signOut();
        signOutResponse.then(() => {
            handleSignOut();
        });
    }

    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    { user && user.uid
                        ? <p>Salut, {user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { user && user.uid
                            ? <p className="logout h5" onClick={() => handleHeaderSignOut()}>Delogare</p>
                            : <Link to="/login" className="text-dark h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            {/* Adaugam link catre pagina cart-ului */}
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2"/>
                                <p className="ml-1 mb-0 text-dark">{ props.numberOfProducts }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.products.length
    }
}

export default connect(mapStateToProps, null)(Header);