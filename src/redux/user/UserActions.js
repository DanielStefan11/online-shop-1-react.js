import {
   START_LOADING,
   UPDATE_USER_DATA,
   UPDATE_USER_ERROR,
} from "../reduxConstants";
import {
   signInWithGoogle,
   signInWithFacebook,
   signOut,
} from "../../apis/firebase/firebase";

function startLoading() {
   return {
      type: START_LOADING,
   };
}
function updateUserData(payload) {
   return {
      type: UPDATE_USER_DATA,
      payload,
   };
}
function updateUserError(payload) {
   return {
      type: UPDATE_USER_ERROR,
      payload,
   };
}

export function loginUser() {
   return dispatch => {
      dispatch(startLoading());

      signInWithGoogle()
         .then(userData => {
            dispatch(updateUserData(userData.user));
            console.log("Logged with Google");
         })
         .catch(error => {
            dispatch(updateUserError(error));
            console.log("Failed to login with Google");
         });
   };
}

export function loginWithFacebook() {
   return dispatch => {
      dispatch(startLoading());

      signInWithFacebook()
         .then(userData => {
            dispatch(updateUserData(userData.user));
            console.log("Logged with Facebook");
         })
         .catch(error => {
            dispatch(updateUserError(error));
            console.log("Failed to login with Facebook");
         });
   };
}

export function logoutUser() {
   return dispatch => {
      dispatch(startLoading());

      signOut()
         .then(() => {
            dispatch(updateUserData(null));
         })
         .catch(error => {
            dispatch(updateUserError(error));
         });
   };
}
