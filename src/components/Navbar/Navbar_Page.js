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

import ScrollspyNav from "./scrollSpy";

//Import Images
import logo from "../../assets/images/logo.png";

class NavbarPage extends Component {
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
            //Store Navigationbar Id into TargetID variable(Used for Scrollspy)
            let targetId = this.props.navItems.map((item) => {
                return(
                    item.idnm
                )
            });
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
                                    <ScrollspyNav
                                        scrollTargetIds={targetId}
                                        scrollDuration="300"
                                        headerBackground="true"
                                        activeNavClass="active"
                                        className="navbar-collapse"
                                    >
                                        <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                                            {this.props.navItems.map((item, key) => (
                                                <NavItem key={key}>
                                                    <NavLink href={item.to + "#" + item.idnm} className={item.navheading === "Home" ? "active" : "" } > {item.navheading}</NavLink>
                                                </NavItem>
                                            ))}
                                        </Nav>
                                    </ScrollspyNav>

                                      <div id="install-link-nav" className="navbar-collapse">
                                        <ul className="ml-auto navbar-center navbar-nav" id="install-link">
                                          <NavItem>
                                            <NavLink href="/install">Request Install</NavLink>
                                          </NavItem>
                                          <NavItem>
                                            <NavLink href="/service">Request Service</NavLink>
                                          </NavItem>
                                        </ul>
                                      </div>

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

export default NavbarPage;