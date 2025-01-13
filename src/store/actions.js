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
  async fetchMealById({ commit }, id) {
    try {
      const { data } = await request.get(`/lookup.php?i=${id}`);
      commit("setMealById", data.meals || []);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchMealsByFirstLetter({ commit }, letter) {
    try {
      const { data } = await request.get(`/search.php?f=${letter}`);
      commit("setMealsByFirstLetter", data.meals || []);
    } catch (err) {
      console.error(err);
    }
  },
};
