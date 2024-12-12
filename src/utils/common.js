import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

const updateDimensions = ({ window }) => {
  deviceWidth = window.width;
  deviceHeight = window.height;
};

// Add event listener for screen orientation changes
Dimensions.addEventListener("change", updateDimensions);

export const hp = (percentage) => (percentage * deviceHeight) / 100;
export const wp = (percentage) => (percentage * deviceWidth) / 100;
