const initialState = {
  username: '',
  session_key: ''
}

function authReducer(state = initialState, action) {
  console.log(action)
  if (action.type == 'LOGIN') {
    return {
      username: action.payload.username,
      session_key: action.payload.session_key
    };
  } else if (action.type == 'LOGOUT') {
    return {
      username: '',
      session_key: ''
    }
  }
  return state;
}

export default authReducer;
