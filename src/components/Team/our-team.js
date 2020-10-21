import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/team/team1.png";
import team2 from "../../assets/images/team/team2.jpg";
import team3 from "../../assets/images/team/team3.jpg";

class OurTeam extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "Ryan Meier",
        image: team1,
        post: "President / Founder",
        desc:
          "Ryan founded Fitguard out of his parents garage in the early 1990's. His leadership has built the company into a major player in the fitness equipment industry.",
        socials: [
        ],
      },
      {
        id: 2,
        name: "Kyle Hall",
        image: team2,
        post: "Service Director",
        desc:
          "Kyle I need a headshot for you.",
        socials: [
          // { class: "bg-googleplus", icon: "ti-google", link: "#" },
          // { class: "bg-facebook", icon: "ti-facebook", link: "#" },
          // { class: "bg-linkedin", icon: "ti-linkedin", link: "#" },
        ],
      },
      {
        id: 3,
        name: "David Downs",
        image: team3,
        post: "Installation Director",
        desc:
          "Director of installation goes here",
        socials: [
          // { class: "bg-twitter", icon: "ti-twitter-alt", link: "#" },
          // { class: "bg-dribbble", icon: "ti-dribbble", link: "#" },
          // { class: "bg-linkedin", icon: "ti-linkedin", link: "#" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-lightgray" id="team">
          <Container>
            <SectionTitle title1="Our" title2="Team" />

            <Row>
              <TeamBox members={this.state.members} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default OurTeam;
