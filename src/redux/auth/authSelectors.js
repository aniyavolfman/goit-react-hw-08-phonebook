export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectToken = state => state.auth.token;
export const selectFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
export const selectError = state => state.auth.error;