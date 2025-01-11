import { request } from "../api";

export default {
  async fetchCategories({ commit }) {
    try {
      const response = await request.get("/categories.php");
      commit("setCategories", response.data.categories);
    } catch (err) {
      console.error(err);
    }
  },
};
