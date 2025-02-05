import { request } from "../api";

export default {
  async fetchCategories({ commit }) {
    commit("setLoading", true);
    try {
      const { data } = await request.get("/categories.php");
      commit("setCategories", data.categories);
    } catch (err) {
      console.error(err);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchMealsByCategory({ commit }, category) {
    commit("setLoading", true);
    try {
      const { data } = await request.get(`/filter.php?c=${category}`);
      commit("setMealsByCategory", data.meals || []);
    } catch (err) {
      console.error(err);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchMealsByName({ commit }, name) {
    commit("setLoading", true);
    try {
      const { data } = await request.get(`/search.php?s=${name}`);
      commit("setMealsByName", data.meals || []);
    } catch (err) {
      console.error(err);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchMealById({ commit }, id) {
    commit("setLoading", true);
    try {
      const { data } = await request.get(`/lookup.php?i=${id}`);
      commit("setMealById", data.meals || []);
    } catch (err) {
      console.error(err);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchRandomMeal({ commit }) {
    commit("setLoading", true);
    try {
      const { data } = await request.get("/random.php");
      commit("setRandomMeal", data.meals || []);
    } catch (err) {
      console.error(err);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchMealsByFirstLetter({ commit }, letter) {
    commit("setLoading", true);
    try {
      const { data } = await request.get(`/search.php?f=${letter}`);
      commit("setMealsByFirstLetter", data.meals || []);
    } catch (err) {
      console.error(err);
    } finally {
      commit("setLoading", false);
    }
  },
};
