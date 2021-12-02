import { REQUEST_STATE } from "../constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  foodsList: [],
};


// interface Fetch {
//   type: any;
//   FETCHING: any,
//   FETCH_SUCCESS: any,
// }
export const foodsActionTyps = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const foodsReducer = (state: any, action: { type: any; payload: { foods: any; }; }) => {
  switch (action.type) {
    case foodsActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case foodsActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        foodsList: action.payload.foods,
      };
    default:
      throw new Error();
  }
};
