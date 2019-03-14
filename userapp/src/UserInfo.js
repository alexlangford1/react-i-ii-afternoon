import React, { Component } from "react";
import data from "./data.js";

class UserInfo extends Component {
  constructor() {
    super();

    this.state = {
      user: data,
    };
  }

  render() {
    let name = data[this.props.info].name.first;
    let last = data[this.props.info].name.last;
    let city = data[this.props.info].city;
    let country = data[this.props.info].country;
    let title = data[this.props.info].title;
    let emp = data[this.props.info].employer;
    let fav = data[this.props.info].favoriteMovies;
    return (
      <div>
        <h3 className="num">{this.props.info + 1}/25</h3>
        <h2 style={{ borderBottom: "2px solid lightblue" }}>
          {name} {last}
        </h2>
        <h5>
          From: {city}, {country}
        </h5>
        <h5>Job Title: {title}</h5>
        <h5>Employer: {emp}</h5>

        <h5>
          Favorite Movies:
          <h5>1.{fav[0]}</h5>
          <h5>2.{fav[1]}</h5>
          <h5>3.{fav[2]}</h5>
        </h5>
      </div>
    );
  }
}

export default UserInfo;
