import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../Title";
import Subheading from "../Subheading";
import Text from "../Text";
import Facebook from "../Facebook";
import Map from "./Map";
import Partners from "../Partners";

const AboutStyle = styled.div`
  img {
    width: 100%;
  }
`;

class About extends Component {
  state = {
    partners: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchPartners();
    this.fetchPage("about");
  }

  fetchPage = async slug => {
    const res = await fetch(
      `http://${process.env.HOST}/wp-json/wp/v2/pages?slug=${slug}]`
    );
    const page = await res.json();
    this.setState({
      page: page[0]
    });
  };

  fetchPartners = async () => {
    const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/partner`);
    const partners = await res.json();
    this.setState({
      partners: partners
    });
  };
  render() {
    return (
      <AboutStyle>
        <div>
          <img src='./static/About.jpg' />
        </div>
        <Title text='Whats is SGN?' />
        <Subheading text='A better future' />
        <Text
          text='Support Group Network (SGN), is a non-profit organization 
      initiated by refugees and collaborates with local societies to improve integration of asylum seekers, refugees and immigrants,
      for whom SGN provides psychosocial support through creating need - based activities and projects aiming to enhance their future in Europe or home countries
      if they go back.
      '
        />
        <Facebook />
        <Title text='Our partners' />
        <Partners partners={this.state.partners} /> <Title text='Locations' />
        <Map />
      </AboutStyle>
    );
  }
}

About.propTypes = {};

export default About;
