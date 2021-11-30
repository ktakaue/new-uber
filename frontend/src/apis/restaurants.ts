import axios from "axios";
import { restaurantsIndex } from "../urls/index";
// import { ErrorResponse } from "./interfaces-api"

export const fetchRestaurants = async () => {
  try {
    const res = await axios
      .get(restaurantsIndex);
    return res.data;
  } catch (e) {
    return console.error(e);
  }
};
