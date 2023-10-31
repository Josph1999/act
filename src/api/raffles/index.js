import axios from "../index";

class RafflesApi {
  async create(request) {
    try {
      const { data } = await axios.post("/raffles", request);

      return data;
    } catch (err) {
      return err;
    }
  }

  async getUserRaffles(page, rowsPerPage, sortBy, searchText, direction, status) {
    try {
      const { data } = await axios.get(
        `/raffles/my-raffles?page=${page}&rowsPerPage=${rowsPerPage}&sortBy=${sortBy}&direction=${direction}&searchText=${
          searchText ? searchText : ""
        }&status=${status}`
      );

      return data;
    } catch (err) {
      return err;
    }
  }

  async getRaffleById(id, user) {
    try {
      const { data } = await axios.get(`/raffles/${id}${user ? "?user=" + user : ""}`);

      return data;
    } catch (err) {
      return err;
    }
  }

  async getRaffles(category, page, searchText) {
    try {
      const { data } = await axios.get(
        `/raffles/category/${category}?page=${
          page || 1
        }&rowsPerPage=20&direction=desc&sortBy=created_at&status=ongoing&searchText=${
          searchText ? searchText : ""
        }`
      );

      return data;
    } catch (err) {
      return err;
    }
  }

  async getHotRaffles() {
    try {
      const { data } = await axios.get(
        `/raffles/hot-raffles?page=1&rowsPerPage=20&direction=asc&sortBy=created_at`
      );

      return data;
    } catch (err) {
      return err;
    }
  }
}

export const rafflesApi = new RafflesApi();
