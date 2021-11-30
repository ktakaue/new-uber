// --- ここから追加 ---
import axios from "axios";
import { foodsIndex } from "../urls/index";
import {restaurantId,ErrorResponse } from "./interfaces-api"


export const fetchFoods = (restaurantId: restaurantId) => {
  return axios
    .get(foodsIndex(restaurantId))
    .then((res) => {
      return res.data;
    })
    .catch((e: ErrorResponse) => {console.error(e)});
};
// --- ここまで追加 ---
//
