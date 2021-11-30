import axios from "axios";
import { orders } from "../urls/index";


export const postOrder = async (params: { line_food_ids: number; }) => {
  try {
    const res = await axios
      .post(orders, {
        line_food_ids: params.line_food_ids,
      });
    return res.data;
  } catch (e) {
    return console.error(e);
  }
};
