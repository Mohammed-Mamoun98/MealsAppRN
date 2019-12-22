import Meals from "../../../data/Meals";

export const addFavString = "ADDFAV";

export const addFav = ({ id } = {}) => {
  console.log("Action like is released!");
  return {
    type: addFavString,
    mealId: id
  };
};
