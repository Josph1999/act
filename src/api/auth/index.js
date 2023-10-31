import { app } from "src/firebase/firebase";
import axios, { setAuthToken } from "../index";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

class AuthApi {
  async signIn(request) {
    try {
      const auth = getAuth(app);
      const user = await signInWithEmailAndPassword(auth, request.email, request.password);

      return user;
    } catch (err) {
      return err;
    }
  }

  async verify(request) {
    try {
      const { data } = await axios.patch("/users/verify", request);

      return data;
    } catch (err) {
      return err;
    }
  }

  async forgot(request) {
    try {
      const { data } = await axios.post("/users/request-reset-password", request);
      return data;
    } catch (error) {
      return error;
    }
  }

  async reset(request) {
    try {
      const { data } = await axios.patch("/users/reset", request);

      return data;
    } catch (error) {
      return error;
    }
  }

  async signUp(request) {
    try {
      const { data } = await axios.post("/users", request);

      return data;
    } catch (error) {
      return error;
    }
  }

  async updateUser(request) {
    try {
      const { data } = await axios.patch("/users", request);

      return data;
    } catch (error) {
      return error;
    }
  }

  async sendVerification(request) {
    try {
      const { data } = await axios.post("/users/send-verification", request);

      return data;
    } catch (error) {
      return error;
    }
  }

  async me() {
    try {
      const auth = getAuth(app);
      const user = auth?.currentUser;

      return {
        user: user?.email,
      };
    } catch (err) {
      console.error("[Auth Api]: ", err);
    }
  }

  async deposit(request) {
    try {
      const { data } = await axios.patch("/users/deposit", request);

      return data;
    } catch (err) {
      console.error("[Auth Api]: ", err);
    }
  }

  async upload(request) {
    try {
      const { data } = await axios.post("/users/upload", request);

      return data;
    } catch (err) {
      console.error("[Auth Api]: ", err);
    }
  }

  async getUserProfile(id) {
    try {
      const { data } = await axios.get(`/users/profile/${id}`);

      return data;
    } catch (err) {
      console.error("[Auth Api]: ", err);
    }
  }

  async rateUser(request) {
    try {
      const { data } = await axios.post(`/ratings`, request);

      return data;
    } catch (err) {
      console.error("[Auth Api]: ", err);
    }
  }

  async getUsers(page, rowsPerPage) {
    try {
      const { data } = await axios.get(
        `/users?page=${page || 1}&rowsPerPage=${rowsPerPage}&direction=asc&sortBy=created_at`
      );

      return data;
    } catch (err) {
      return err;
    }
  }
}

export const authApi = new AuthApi();
