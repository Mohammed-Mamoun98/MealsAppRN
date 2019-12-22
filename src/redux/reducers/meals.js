import Meals from "../../../data/Meals";
import { addFav, addFavString } from "../actions/addFav";
import { setFilterString, setFilter } from "../actions/setFilter";
const filteredMeals = Meals.filter(meal => meal.id === "m1");

const initState = {
  meals: Meals,
  filteredMeals: Meals,
  favouriteMeals: []
};

const isExisted = (Meal, state) => {
  return state.favouriteMeals.findIndex(meal => meal.id === Meal) >= 0;
};

export const MealsRed = (state = initState, action) => {
  switch (action.type) {
    case addFavString:
      const pressedMeal = Meals.find(meal => meal.id === action.mealId);
      const existIndex = state.favouriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      const update = [...state.favouriteMeals];
      if (existIndex >= 0) {
        console.log("is Existed" + existIndex);
        update.splice(existIndex, 1);

        return {
          ...state,
          favouriteMeals: update
        };
      } else {
        console.log("not exist");
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.concat(pressedMeal)
        };
      }

    case setFilterString:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        //test the value in filter is false && meal is already not glutenfree
        //
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }

        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }

        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
      });
      debugger;

      return {
        ...state,
        filteredMeals: updatedFilteredMeals
      };

    default:
      return state;
  }
  return state;
};
