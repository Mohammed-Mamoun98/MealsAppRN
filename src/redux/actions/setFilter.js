export const setFilterString = "SET_FILTER";

export const setFilter = filterSettings => {
  console.log("Filter changed");

  return {
    type: setFilterString,
    filters: filterSettings
  };
};
