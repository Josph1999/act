import axios from "../index";

class CommentsApi {
  async create(request) {
    try {
      const { data } = await axios.post("/comments", request);

      return data;
    } catch (err) {
      return err;
    }
  }
}

export const commentsApi = new CommentsApi();
