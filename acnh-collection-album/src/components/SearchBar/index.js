import React, { useState, useCallback } from "react";
import gql from "graphql-tag";
import _ from "lodash";
import { useQuery } from "@apollo/react-hooks";

const query = gql`
  query($searchByName: String!) {
    housewares(searchByName: $searchByName) {
      name
    }
  }
`;

const THROTTLE_TIME = 500;
const MIN_QUERY_LENGTH = 3;

export const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("acoustic");
  const { data, loading } = useQuery(query, {
    skip: searchQuery.length < MIN_QUERY_LENGTH,
    variables: { searchByName: searchQuery },
  });

  const handleChange = useCallback(
    _.throttle((searchQuery) => {
      setSearchQuery(searchQuery);
    }, THROTTLE_TIME),
    [setSearchQuery]
  );

  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        placeholder={props.placeholder}
      >
        {props.textValue}
      </input>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
