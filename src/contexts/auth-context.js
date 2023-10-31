import { createContext, useCallback, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { authApi } from "src/api/auth";
import { setAuthToken } from "src/api";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "src/firebase/firebase";

const STORAGE_KEY = "accessToken";

var ActionType;
(function (ActionType) {
  ActionType["INITIALIZE"] = "INITIALIZE";
  ActionType["SIGN_IN"] = "SIGN_IN";
  ActionType["SIGN_UP"] = "SIGN_UP";
  ActionType["SIGN_OUT"] = "SIGN_OUT";
})(ActionType || (ActionType = {}));

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  SIGN_IN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_UP: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_OUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
  ...initialState,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  verify: () => Promise.resolve(),
  forgot: () => Promise.resolve(),
  reset: () => Promise.resolve(),
  updateUser: () => Promise.resolve(),
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          return dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user: user?.email,
            },
          });
        } else {
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      });
    } catch (err) {
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [dispatch]);

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signIn = useCallback(
    async (values) => {
      try {
        const data = await authApi.signIn(values);
        if (!data.user) {
          return data;
        }
        const { accessToken, user } = data;

        localStorage.setItem(STORAGE_KEY, accessToken);
        setAuthToken(accessToken);
        dispatch({
          type: ActionType.SIGN_IN,
          payload: {
            user,
          },
        });
        return data;
      } catch (err) {
        return err;
      }
    },
    [dispatch]
  );

  const signUp = useCallback(async (request) => {
    try {
      const user = await authApi.signUp(request);

      return user;
    } catch (err) {
      return err;
    }
  }, []);

  const logOut = useCallback(async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);

      dispatch({ type: ActionType.SIGN_OUT });
    } catch (error) {
      dispatch({ type: ActionType.SIGN_OUT });
    }
  }, [dispatch]);

  const verify = useCallback(async (request) => {
    try {
      const data = await authApi.verify(request);

      return data;
    } catch (err) {
      return err;
    }
  }, []);

  const forgot = useCallback(async (request) => {
    try {
      const data = await authApi.forgot(request);
      return data;
    } catch (err) {
      return err;
    }
  }, []);

  const reset = useCallback(async (request) => {
    try {
      const data = await authApi.reset(request);

      return data;
    } catch (err) {
      return err;
    }
  }, []);

  const updateUser = useCallback(async (request) => {
    try {
      const data = await authApi.updateUser(request);

      return data;
    } catch (error) {
      return error;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        logOut,
        verify,
        forgot,
        reset,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
