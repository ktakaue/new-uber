import axios from "axios";
import { orders } from "../urls/index";
import { ErrorResponse } from "./interfaces-api"

export const postOrder = (params: { line_food_ids: number; }) => {
  return axios
    .post(orders, {
      line_food_ids: params.line_food_ids,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e: ErrorResponse) => console.error(e));
};
