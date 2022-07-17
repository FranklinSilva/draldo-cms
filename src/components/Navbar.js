import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import texture from "../../static/img/texture.png";
import styled from '@emotion/styled';
import Theme from '../../config/theme';

const Hamburguer = styled.div`
  background: ${Theme.colors.primary.base};
  padding: 20px;
  border-bottom-left-radius: 10px;
  right: 0;
  position: fixed;
  display: ${props => props.navBarActive? "inherit":"none"};
  cursor: pointer;
  color: ${Theme.colors.white.base};
`;

const NavWrapper = styled.div`
  position: absolute;
  z-index: 5;
`;

const Nav = styled.nav`
  height: 100vh;
    background-image: linear-gradient(119deg, ${Theme.colors.primary.base} 0%, ${Theme.colors.primary.light} 100%);
  width: 100vw;
  display: ${props => props.navBarActive? "inherit":"none"};
  position: ${props => props.navBarActive? "fixed":"inherit"};

  &:before {
    content: '';
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${texture});
    z-index: -1;
  }
`;

const NavItem = styled(Link)`
  display: block;
  color: ${Theme.colors.white.light};
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;

  &:hover {
    color: ${Theme.colors.white.grey};
  }
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  z-index: 2;
`;

const OneLine = styled.div`
  height: 3px;
  border-radius:1.5px;
  width: 20px;
  margin-bottom: 3px;
  background-color: ${Theme.colors.white.light};
`;

const OneLinePositiveRotate = styled(OneLine)`
  transform-origin: 20% 50%;
  transform: rotate(45deg)
`;

const OneLineNegativeRotate = styled(OneLine)`
  transform-origin: 34% 100%;
  transform: rotate(-45deg)
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActive: false,
    };
  }

  toggleHamburger() {
    console.log("clicando");
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({
            navBarActive: true,
            })
          : this.setState({
            navBarActive: false,
            });
      }
    );
  }

  render(){
    return(
    <NavWrapper>
      <Nav navBarActive={this.state.navBarActive}>
        <Hamburguer
          navBarActive={this.state.navBarActive}
          data-target="navMenu"
          role="menuitem"
          tabIndex={0}
          onKeyPress={() => this.toggleHamburger()}
          onClick={() => this.toggleHamburger()}
        >
          <OneLinePositiveRotate/>
          <OneLineNegativeRotate/>
        </Hamburguer> 
        <NavItems 
          data-target="navMenu"
          role="menuitem"
          tabIndex={0}>
          <NavItem to="/" onClick={() => this.toggleHamburger()}>
            Página Inicial
          </NavItem>
          <NavItem to="/schedule" onClick={() => this.toggleHamburger()}>
            Agende uma Consulta
          </NavItem>
          {/*<NavItem to="/products" onClick={() => this.toggleHamburger()}>
            Produtos
    </NavItem>*/}
          <NavItem to="/blog" onClick={() => this.toggleHamburger()}>
            Blog
          </NavItem>
          <NavItem to="/#footer" onClick={() => this.toggleHamburger()}>
            Contato
          </NavItem>
          {/*<NavItem to="/contact/examples" onClick={() => this.toggleHamburger()}>
            Form Examples
  </NavItem>*/}
        </NavItems>
      </Nav>
      <Hamburguer
        navBarActive={!this.state.navBarActive}
        onKeyPress={() => this.toggleHamburger()}
        onClick={() => this.toggleHamburger()}
      >
        <OneLine />
        <OneLine />
        <OneLine />
      </Hamburguer> 
    </NavWrapper>)
  }

  /*render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/"  title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>

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
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link  to="/about">
                About
              </Link>
              <Link  to="/products">
                Products
              </Link>
              <Link  to="/blog">
                Blog
              </Link>
              <Link  to="/contact">
                Contact
              </Link>
              <Link  to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }*/
};

export default Navbar;
