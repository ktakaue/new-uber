import axios from "axios";
import { lineFoods, lineFoodsReplace } from "../urls/index";
import {ErrorResponse } from "./interfaces-api"

export const postLineFoods = (params: { foodId: number; count: number; }) => {
  return axios
    .post(lineFoods, {
      food_id: params.foodId,
      count: params.count,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e: ErrorResponse) => {
      throw e;
    });
};

export const replaceLineFoods = (params: { foodId: number; count: number; }) => {
  return axios
    .put(lineFoodsReplace, {
      food_id: params.foodId,
      count: params.count,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e: ErrorResponse) => {
      throw e;
    });
};

export const fetchLineFoods = () => {
  return axios
    .get(lineFoods)
    .then((res) => {
      return res.data;
    })
    .catch((e: ErrorResponse) => {
      throw e;
    });
};
