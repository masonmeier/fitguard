import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
    state = {
        services1 : [
           { title : "Tracked Service History", icon : "ti-receipt", desc : "We maintain and update a thorough database of reports on both repairs and machine wear everywhere we go." },
           { title : "Keep Your Equipment Fit", icon : "ti-support", desc : "All machinery wears down over time, keep yours running and extend it's lifetime up to 3x the industry average." },
           { title : "Timely Service", icon : "ti-alarm-clock", desc : "Diagnostic calls as soon as the next day." },
        ],   
        services2 : [
            { title : "Protect from Costly Replacements", icon : "ti-wallet", desc : "Often, a $10,000 replacement is caused by the failure of a $100 part." },
            { title : "Scalable Service Plans", icon : "ti-bar-chart-alt", desc : "Save by bundling multiple service locations under one account." },
            { title : "Friendly Support", icon : "ti-headphone-alt", desc : "Our staff is available business days from 8AM to 4:30PM. Receive service from the same local and friendly technician each visit." },
         ],
    };
    render() {
        return (
            <React.Fragment>
    <section className={this.props.isBgWhite === true ? "section" : "section bg-lightgray"} id="services">
        <Container>
            <SectionTitle title1="Our" title2="Services" />

            <Row>
                <ServiceBox services={this.state.services1} />                
            </Row>      

            <Row>
                <ServiceBox services={this.state.services2} />                
            </Row>

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Services;