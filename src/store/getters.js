export default {
  allCategories(state) {
    return state.categories;
  },
  allMealsByCategory(state) {
    return state.mealsByCategory;
  },
  mealById(state) {
    return state.mealById;
  },
  allMealsByFirstLetter(state) {
    return state.mealsByFirstLetter;
  },
};
