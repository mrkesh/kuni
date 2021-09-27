import { lowerCase } from "lodash";
import React from "react";
import { connect } from "react-redux";
import Country from "./model/country";
import List from "./component/list/list";
import { Input } from "./component/input/input";
import { filterCountry } from "./store/action/country-actions";

interface AppProps {
  countries: Country[];
  textFilter: string | null;
  filterCountry: (value: string | null) => void;
}

const App: React.FC<AppProps> = ({
  countries,
  textFilter,
  filterCountry,
}: AppProps) => {
  const data = textFilter
    ? countries.filter((country: Country) =>
        country.id.startsWith(lowerCase(textFilter))
      )
    : countries;

  return (
    <main>
      <Input onFilter={filterCountry} />
      <List data={data} />
    </main>
  );
};

const mapStateToProps = (state: {
  countries: Country[];
  filter: string | null;
}): { countries: Country[]; textFilter: string | null } => {
  return {
    countries: state.countries,
    textFilter: state.filter,
  };
};

const mapDispatchToProps = {
  filterCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
