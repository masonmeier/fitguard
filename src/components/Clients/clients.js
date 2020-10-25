import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import Images
import img1 from "../../assets/images/clients/1.png";
import img2 from "../../assets/images/clients/2.png";
import img3 from "../../assets/images/clients/3.png";
import img4 from "../../assets/images/clients/4.png";
import img5 from "../../assets/images/clients/5.png";
import img6 from "../../assets/images/clients/6.png";
import img7 from "../../assets/images/clients/7.png";
import img8 from "../../assets/images/clients/8.png";
import img9 from "../../assets/images/clients/9.png";
import img10 from "../../assets/images/clients/10.png";
import img11 from "../../assets/images/clients/11.png";
import img12 from "../../assets/images/clients/12.png";
import img13 from "../../assets/images/clients/13.png";
import img14 from "../../assets/images/clients/14.png";
import testimony from "../../assets/images/testimony.png";

class Clients extends Component {
    state = {
        clients : [
            { id : 1, img : img6 },
            { id : 2, img : img10 },
            { id : 3, img : img14 },
            { id : 4, img : img4 },
            { id : 5, img : img5 },
            { id : 6, img : img8 },
            { id : 7, img : img7 },
            { id : 8, img : img1 },
            { id : 9, img : img9 },
            { id : 10, img : img2 },
            { id : 11, img : img11 },
            { id : 12, img : img12 },
            { id : 13, img : img13 },
            { id : 14, img : img3 }
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },            
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    };
    render() {
        return (
            <React.Fragment>
            <section className="section bg-testimonials">

                <Container>
                    <Row>
                        <Col sm={{size:10, offset :1 }} md={{size:8, offset : 2}}>

                            <div className="testimonial-box text-center">
                                <h1>Our Clients</h1>
                                <h4>"Fitguard has always been accommodating when scheduling our appointments. All of their service techs are prompt, efficient and have a good depth of knowledge on fitness equipment. We definitely do not hesitate in calling Fitguard with any of our equipment needs, whether big or small"</h4>
                                <img src={testimony} className="testi-user rounded-circle" alt="testimonials-user"/>
                                <p>-San Francisco Giants Training Team</p>
                                <p>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                </p>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                        <OwlCarousel
                                        className="owl-theme client-images text-center"
                                        id="clients-slider"
                                        items={6}
                                        loop={true}
                                        margin={10}
                                        nav={false}
                                        dots={true}
                                        responsive = {this.state.responsive}
                                    >
                                        {
                                            this.state.clients.map((client, key) =>
                                                <div className="item" key={key} style={{width : 185}}>
                                                    <div className="">
                                                        <img src={client.img} alt="logo-img"/>
                                                    </div>
                                                </div>
                                            )
                                        }
                                </OwlCarousel> 
                        </Col>
                    </Row>

                    </Container>

                </section>
            </React.Fragment>
        );
    }
}

export default Clients;