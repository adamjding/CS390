import React from "react";
import Tile from "./tile.js";

const Row = props => {
  const { row, placeToken } = props;
  let rowTiles = null;
  /*
    Part 2:    
    Map values in props.row to their individual Tile components.
    Make sure to pass placeToken function so that the child component can call the function
  */
  console.log(props);
  let myRow = props.row;
  return <tr>{rowTiles}</tr>;
};
export default Row;
