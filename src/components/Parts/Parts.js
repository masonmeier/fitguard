import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Images
import dispenser from "../../assets/images/dispenser.png";
import parts from "../../assets/images/parts-image.png";
import FeatureBox from '../common/feature-box';

class Parts extends Component {
    render() {
        return (
            <React.Fragment>
    <section className={this.props.isBgWhite === true ? "section" : "section bg-lightgray"} id="parts">
        <Container>
            <Row>
                <Col sm="12">
                    <div className="title-box text-center">
                        <h2>Parts and Supplies</h2>
                    </div>
                </Col>
            </Row>
            

            <Row className="vertical-content features">
                <Col sm="5">
                    <FeatureBox
                        number="1"
                        title="Keep Your Facility Healthy"
                        desc1="One of the biggest factors in a facilities quality is its cleanliness."
                        desc2="Keep your equipment sanitary and your patrons healthy with our line facility cleaning products."
                        link="#"
                    />
                </Col>
                

                <Col sm={{size:6, offset : 1}}>
                    <img src={dispenser} className="img-fluid" alt="dispenser"/>
                </Col>
                
            </Row>
            

            <Row className="vertical-content features">
                <Col sm="4">
                    <img src={parts} className="img-fluid" alt="parts"/>
                </Col>
                <Col sm={{size:6, offset : 1}}>

                    <FeatureBox
                        number="2"
                        title="Soft Goods and Parts"
                        desc1="Order anything from mats ands dumbbells to get your gym running, to nuts and bolts to keep it running."
                        desc2="Fitguard maintains a unique and user friendly parts store so that you can spend less time searching and more time sweating."
                        link="#"
                    />

                </Col>
                

            </Row>
            

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Parts;