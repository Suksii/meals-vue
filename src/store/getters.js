export default {
  allCategories(state) {
    return state.categories;
  },
  allMealsByCategory(state) {
    return state.mealsByCategory;
  },
  allMealsByName(state) {
    return state.mealsByName;
  },
  mealById(state) {
    return state.mealById;
  },
  randomMeal(state) {
    return state.randomMeal;
  },
  allMealsByFirstLetter(state) {
    return state.mealsByFirstLetter;
  },
};
