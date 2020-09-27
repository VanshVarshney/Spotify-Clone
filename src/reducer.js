export const initialState = {
  user: null,
  // token:
  //   "BQDll0jbpnuetZXJ4L5edCnVlYh1QM_XNU-oeElfxstc4dpQ9vHAF321ZHWBdq7UeaFFXsDX4BVhCgTOr-C7Vyp0ZT1VhtfiJP7cT-2sCrNKmYSDQrCIi7b6nJhCVbiUAzC6HlTAnCWFpb1rVuNFj_K7w1n7rCadkyNHg1NxIHJbLyPbXhiN",
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action._token,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
