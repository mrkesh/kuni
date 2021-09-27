import { deburr, lowerCase } from "lodash";
import React from "react";
import Country from "../../model/country";
import { Link } from "react-router-dom";
import "./list.css";

interface ListProps {
  data: Country[];
}

const List: React.FC<ListProps> = ({ data }: ListProps) => {
  return (
    <div id="list-container">
      {data.map((country, index) => {
        return (
          <div key={index} className="list-item">
            <Link to={`/${lowerCase(deburr(country.name))}`}>
              <img src={country.flag} />
            </Link>
            <p>{country.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
