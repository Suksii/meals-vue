import { request } from "../api";

export default {
  async fetchCategories({ commit }) {
    try {
      const { data } = await request.get("/categories.php");
      commit("setCategories", data.categories);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchMealsByCategory({ commit }, category) {
    try {
      const { data } = await request.get(`/filter.php?c=${category}`);
      commit("setMealsByCategory", data.meals || []);
    } catch (err) {
      console.error(err);
    }
  },
};
