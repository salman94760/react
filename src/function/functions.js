export const insertUser = (dispatch, userData) => {
  dispatch({
    type: "USER_INSERT",
    payload: { ...userData, id: Date.now() },
  });
};

export const updateUser = (dispatch, userId, updatedData) => {
  dispatch({
    type: "USER_UPDATE",
    payload: { id: userId, updatedData },
  });
};

export const deleteUser = (dispatch, userId) => {
  dispatch({
    type: "USER_DELETE",
    payload: userId,
  });
};
