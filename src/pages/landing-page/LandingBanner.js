import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="is-next" onClick={onClick}><i className="ti-arrow-circle-right"></i></div>
    );
  }
  
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="is-prev" onClick={onClick}><i className="ti-arrow-circle-left"></i></div>
    );
  }

const title1 = <h1>Industry <span className="font-2">Leading</span> Service</h1>;
const title2 = <h1>Expert and <span className="font-2">Organized</span> Installation</h1>;

class LandingBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides : [
                { title : title1, desc : "Fitguard has been a leading innovator in fitness equipment service programs and repair methods since 1994. Our preventative maintenance program has generated over 1 million service calls and saved thousands of companies throughout California from costly repairs.", link : "#" },
                { title : title2, desc : "Our manufacturing and vendor partners have trusted us to install hundreds of millions of dollars worth of their equipment in every environment imaginable. You can too!", link : "#" },
            ]
        }
    }
    
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed : 3500,
            autoplay : true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        return (
            <React.Fragment>
                <section className="home bg-home home-slider" id="home">

                    <div className="bg-overlay"></div>

                    <Container fluid>
                        <div id="home-slider" className="flexslider">
                            <ul className="slides">
                            <Slider {...settings}>
                                {
                                    this.state.slides.map((slide, key) =>
                                        <li key={key}>
                                            <Container>
                                                <Row>
                                                    <Col md={{size:8, offset:2}} className="text-center">
                                                        <div className="home-wrapper text-center">
                                                            <div className="">
                                                                {slide.title}
                                                                <h4>{slide.desc}</h4>
                                                                <Link to={slide.link} className="btn btn-custom">Learn more</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </li>
                                    )
                                }
                                </Slider>
                            </ul>
                            
                            
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default LandingBanner;