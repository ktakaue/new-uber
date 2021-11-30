import axios from "axios";
import { restaurantsIndex } from "../urls/index";
import { ErrorResponse } from "./interfaces-api"

export const fetchRestaurants = () => {
  return axios
    .get(restaurantsIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e: ErrorResponse) => console.error(e));
};
