import * as types from "./types";

// Get posts

export const getContactsStart = () => ({ type: types.GETCONTACTSSTART });
export const getContactsSucsess = (data: []) => ({
  type: types.GETCONTACTSSUCSESS,
  payload: data,
});
export const getContactsError = () => ({ type: types.GETCONTACTSERROR });

//Post posts

export const postContactsStart = () => ({ type: types.POSTCONTACTSSTART });
export const postContactsSucsess = (data: {}) => ({
  type: types.POSTCONTACTSSUCSESS,
  payload: data,
});
export const postContactsError = () => ({ type: types.POSTCONTACTSERROR });

// delete posts
export const deleteContactsStart = () => ({ type: types.DELETECONTACTSSTART });
export const deleteContactsSucsess = (data: string | number) => ({
  type: types.DELETECONTACTSSUCSESS,
  payload: data,
});
export const deleteContactsError = () => ({ type: types.DELETECONTACTSERROR });
