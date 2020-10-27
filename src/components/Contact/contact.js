import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Animated } from "react-animated-css";
import emailjs from 'emailjs-com';

// import { init } from 'emailjs-com';
// init("user_bD0lzpC8UkzqWACfBTcLR");

class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      email: "",
      subject: "",
      comments: "",
      msgSendSuccess: false,
      templateID: 'template_69zxfmk',
      userID: 'user_bD0lzpC8UkzqWACfBTcLR',
      serviceID: "service_dbqj5sp",
    };
  }

  handleSubmit = () => {
    this.sendRequest(this.state.serviceID, this.state.templateID, {message: this.state.comments, from_name: this.state.firstname, reply_to: this.state.email}, this.state.userID);
    let emailPattern = new RegExp(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    if (
      this.state.firstname !== "" &&
      this.state.email !== "" &&
      emailPattern.test(this.state.email) &&
      this.state.subject !== "" &&
      this.state.comments !== ""
    ) {
      this.setState({ msgSendSuccess: true }, ()=> {
        console.log(this.state.msgSendSuccess, "msg test");
      } );
      this.myFormRef.reset();

      setTimeout(() => {
        this.setState({ firstname: "" });
        this.setState({ email: "" });
        this.setState({ subject: "" });
        this.setState({ comments: "" });
        this.setState({ msgSendSuccess: false });
      }, 5000);
    }
  };

  onInputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  sendRequest (serviceID, templateID, variables, userID) {
    console.log("variables", variables);

    emailjs.send(
      serviceID, templateID, variables, userID
    ).then(res => {
      console.log('Email successfully sent!')

    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }


  render() {
    return (
      <React.Fragment>
        <section className="section" id="contact">
          <Container>
            <Row>
              <Col sm="12">
                <div className="title-box text-center">
                  <h2>Have any questions?</h2>
                </div>
              </Col>
            </Row>

            <Row className="contact-footer">
              <Col sm="4">
                <div className="contact-footer-box text-center">
                  <i className="ti-mobile"></i>
                  <h5>(800)221-5813</h5>
                </div>
              </Col>

              <Col sm="4">
                <div className="contact-footer-box text-center">
                  <i className="ti-map-alt"></i>
                  <h5>West Sacramento, CA</h5>
                </div>
              </Col>

              <Col sm="4">
                <div className="contact-footer-box text-center">
                  <i className="ti-email"></i>
                  <h5>customerservice@fitguard.com</h5>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="12">
                <h4>Send us a message!</h4>
                <div id="message">
                  {this.state.msgSendSuccess ? (
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="zoomOutDown"
                      animationInDuration={1000}
                      animationOutDuration={1000}
                      isVisible={true}
                    >
                      <fieldset>
                        <div id="success_page">
                          <h3>Email Sent Successfully.</h3>
                          <p>
                            Thank you <strong>{this.state.firstname}</strong>,
                            your message has been submitted.
                          </p>
                        </div>
                      </fieldset>
                    </Animated>
                  ) : null}
                </div>
                <AvForm
                  name="cform"
                  id="cform"
                  className="contact-form margin-t-20"
                  ref={(el) => (this.myFormRef = el)}
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <Row>
                    <Col sm="4">
                      <AvField
                        name="firstname"
                        placeholder="Your name"
                        type="text"
                        errorMessage="Enter Your Name"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="name"
                        onChange={(e) => this.onInputChangeHandler(e)}
                      />
                    </Col>
                    <Col sm="4">
                      <AvField
                        name="email"
                        placeholder="Your email"
                        type="text"
                        errorMessage="Enter Your Email"
                        className="form-control"
                        validate={{
                          required: { value: true },
                          email: { value: true },
                        }}
                        id="email"
                        onChange={(e) => this.onInputChangeHandler(e)}
                      />
                    </Col>
                    <Col sm="4">
                      <AvField
                        name="subject"
                        placeholder="Subject"
                        type="text"
                        errorMessage="Enter Your Subject"
                        className="form-control"
                        validate={{ required: { value: true } }}
                        id="subject"
                        onChange={(e) => this.onInputChangeHandler(e)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <AvField
                        type="textarea"
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control"
                        placeholder="Your message"
                        errorMessage="Enter your message."
                        validate={{ required: { value: true } }}
                        onChange={(e) => this.onInputChangeHandler(e)}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm="12" className="text-right">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="submitBnt btn  btn-custom"
                        value="Send Message"
                      />
                    </Col>
                  </Row>

                  <div id="simple-msg"></div>
                </AvForm>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetInTouch;
