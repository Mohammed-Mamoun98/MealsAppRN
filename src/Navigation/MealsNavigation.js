import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerNavigator
} from "react-navigation";

import React from "react";
import CategoryScreen from "../screens/Categories";
import CategoryMeal from "../screens/CategoriesMeals";
import MealDetails from "../screens/MealDetails";
import Fav from "../screens/FavouriteScreen";
import Filter from "../screens/FilterScreen";
import Icon from "@expo/vector-icons/MaterialIcons";
import FilterScreen from "../screens/Filters";

const defaulNavSettings = {
  defaultNavigationOptions: {
    headerStyle: {},
    headerTintColor: "purple",
    headerTitleStyle: {
      textAlign: "center",
      flexGrow: 1,
      alignSelf: "center"
    },
    headerStyle: {}
  }
};

const Meal = createStackNavigator(
  {
    Categories: {
      screen: CategoryScreen
    },
    Meal: CategoryMeal,
    MealDetails: MealDetails
  },
  defaulNavSettings
);

const Filters = createStackNavigator(
  {
    Categories: {
      screen: FilterScreen
    }
  },
  defaulNavSettings
);

const FavoriteTab = createStackNavigator(
  { screen1: { screen: Fav }, screen2: MealDetails },
  defaulNavSettings
);

const TabNavigator = createBottomTabNavigator(
  {
    Meals: Meal,
    Favourites: {
      screen: FavoriteTab,
      navigationOptions: {
        tabBarLabel: "Profile Page",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="star" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      tabStyle: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
      },
      showIcon: true
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: Meal,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Icon name="home" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Favorites: {
      screen: FavoriteTab,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: tabInfo => {
          return <Icon name="star" size={25} color={tabInfo.tintColor} />;
        }
      }
    }
  },
  {
    tabBarOptions: {}
  }
);

const Drawer = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meal!"
      }
    },
    Filter: Filters
  },
  {
    contentOptions: {
      activeTintColor: "black"
    }
  }
);

export default createAppContainer(Drawer);
