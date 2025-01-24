export default {
  setCategories(state, categories) {
    state.categories = categories;
  },
  setMealsByCategory(state, mealsByCategory) {
    state.mealsByCategory = mealsByCategory;
  },
  setMealsByName(state, mealsByName) {
    state.mealsByName = mealsByName;
  },
  setMealById(state, mealById) {
    state.mealById = mealById;
  },
  setMealsByFirstLetter(state, mealsByFirstLetter) {
    state.mealsByFirstLetter = mealsByFirstLetter;
  },
  setRandomMeal(state, randomMeal) {
    state.randomMeal = randomMeal;
  },
};
