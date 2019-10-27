
export function login(username, session_key) {
  return {
    type: 'LOGIN',
    payload: {
      username: username,
      session_key: session_key
    }
  }
}

export function logout() {
  return {
    type: 'LOGOUT',
    payload: {}
  }
}
