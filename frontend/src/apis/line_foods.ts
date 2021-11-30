import axios from "axios";
import { lineFoods, lineFoodsReplace } from "../urls/index";


export const postLineFoods = async (params: { foodId: number; count: number; }) => {
  try {
    const res = await axios
      .post(lineFoods, {
        food_id: params.foodId,
        count: params.count,
      });
    return res.data;
  } catch (e: any) {
    throw e;
  }
};

export const replaceLineFoods = async (params: { foodId: number; count: number; }) => {
  try {
    const res = await axios
      .put(lineFoodsReplace, {
        food_id: params.foodId,
        count: params.count,
      });
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const fetchLineFoods = async () => {
  try {
    const res = await axios
      .get(lineFoods);
    return res.data;
  } catch (e: any) {
    throw e;
  }
};
