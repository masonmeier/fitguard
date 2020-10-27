import React, { Component, Suspense } from 'react';
const NavbarPage = React.lazy(() => import('../../components/Navbar/Navbar_Page'));
const Section = React.lazy(() => import('./LandingBanner'));
const Parts = React.lazy(() => import('../../components/Parts/Parts'));
const Services = React.lazy(() => import('../../components/Services/services'));
const Clients = React.lazy(() => import('../../components/Clients/clients'));
const Cta = React.lazy(() => import('../../components/Cta/Cta'));
const Contact = React.lazy(() => import('../../components/Contact/contact'));
const Footer = React.lazy(() => import('../../components/Footer/footer'));
// const OurTeam = React.lazy(() => import('../../components/Team/our-team'));

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home", to : "" },
                { id: 2 , idnm : "services", navheading: "Services", to : "" },
                { id: 3 , idnm : "parts", navheading: "Parts", to : "" },
                { id: 5 , idnm : "contact", navheading: "Contact", to : "" },
            ],
            pos : document.documentElement.scrollTop,
            imglight : true,
            navClass : ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup=document.documentElement.scrollTop;
        if(scrollup > this.state.pos)
        {
            this.setState({navClass : "darkheader", imglight : false});
        }
        else
        {
            this.setState({navClass : "", imglight : true});
        }
    };

    Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">Loading...</div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <Suspense fallback = {this.Loader()} >

                    {/* Importing Navbar */}
                    <NavbarPage navItems={this.state.navItems} navclassName={this.state.navClass}/>

                    {/* Importing section */}
                    <Section/>

                    {/* Importing services */}
                    <Services isBgWhite={true}/>

                    {/* Importing features */}
                    <Parts isBgWhite={false}/>

                    {/* Importing clients */}
                    <Clients/>

                    {/* Importing counter */}
                    <Cta/>

                    {/* Importing contact */}
                    <Contact/>

                    {/* Importing footer */}
                    <Footer/>
                </Suspense>

            </React.Fragment>
        );
    }
}

export default LandingPage;