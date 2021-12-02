// --- ここから追加 ---
import axios from "axios";
import { foodsIndex } from "../urls/index";
import {restaurantId, ErrorResponse } from "./interfaces-api"


export const fetchFoods = async (restaurantId: restaurantId) => {
  try {
    const res = await axios
      .get(foodsIndex(restaurantId));
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
// --- ここまで追加 ---
//
