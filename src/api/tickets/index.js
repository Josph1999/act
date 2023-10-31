import axios from "../index";

class TicketsApi {
  async buyTickets(request) {
    try {
      const { data } = await axios.post("/tickets", request);

      return data;
    } catch (err) {
      return err;
    }
  }

  async getTicketsByRaffle(id, status) {
    try {
      const { data } = await axios.get(`/tickets/by-raffle/${id}?status=${status}`);

      return data;
    } catch (err) {
      return err;
    }
  }

  async userTickets(page, rowsPerPage, sortBy, searchText, direction, status) {
    try {
      const { data } = await axios.get(
        `/tickets?page=${page}&rowsPerPage=${rowsPerPage}&sortBy=${sortBy}&direction=${direction}&searchText=${
          searchText ? searchText : ""
        }&status=${status}`
      );

      return data;
    } catch (err) {
      return err;
    }
  }
}

export const ticketsApi = new TicketsApi();
