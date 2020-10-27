import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse
} from "reactstrap";

//Import Sticky Header
import StickyHeader from 'react-sticky-header';
import '../../../node_modules/react-sticky-header/styles.css';

//Import Images
import logo from "../../assets/images/logo.png";

class ContactNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpenMenu :false
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    return (
      <React.Fragment>
        <StickyHeader

          header = {
            <Navbar expand="lg" fixed="top" className="navbar-custom sticky">
              <Container>
                <NavbarBrand className="logo text-uppercase" href="/">
                  <img src={logo} alt="logo" height="40" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} ><i className="ti-menu"></i></NavbarToggler>
                <Collapse id="data-scroll" isOpen={this.state.isOpenMenu} navbar>
                    <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                      {this.props.navItems.map((item, key) => (
                        <NavItem key={key}>
                          <NavLink href="/" className={item.navheading === "Home" ? "active" : "" } > {item.navheading}</NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                </Collapse>
              </Container>
            </Navbar>
          }
          stickyOffset = {-100}
        >
        </StickyHeader>
      </React.Fragment>
    );
  }
}

export default ContactNav;