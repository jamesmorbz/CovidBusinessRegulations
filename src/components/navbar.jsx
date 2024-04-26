import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom"

const officeLocations = [
  { key: "London", text: "London", value: "LDN", flag: "gb" },
  { key: "Birmingham", text: "Birmingham", value: "BRM", flag: "gb" },
  { key: "Madrid", text: "Madrid", value: "MDR", flag: "es" },
  { key: "Bangalore", text: "Bangalore", value: "BGL", flag: "in" }
];

const value = "LDN"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Covid Business Regulations
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Government Regulations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Remote Working</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pandemic Guideline</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Compliance Training</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Community Forum</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Important Dates</a>
          </li>
        </ul>
      </div>
      <div>

      </div>
      <Dropdown
        placeholder='Select Country'
        selection={true}
        fluid={true}
        search={true}
        options={officeLocations}>
        <Dropdown.Menu>
          {officeLocations.map(country => {
            return (
              <Dropdown.Item
                key={country.key}
                value={country.value}
                active={(value === country.value)}
                flag={country.flag}
                onClick={console.log}
              />)
          })}
        </Dropdown.Menu>
      </Dropdown>
    </nav>


  );
};

export default Navbar;