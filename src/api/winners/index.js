import axios from "../index";

class WinnersApi {
  async getWinners(page, rowsPerPage) {
    try {
      const { data } = await axios.get(
        `/winners?page=${page ? page : 1}&rowsPerPage=${
          rowsPerPage ? rowsPerPage : 20
        }&sortBy=created_at&direction=desc`
      );

      return data;
    } catch (err) {
      return err;
    }
  }
}

export const winnersApi = new WinnersApi();
