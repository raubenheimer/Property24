
export default function receiveUser(user) {
  return {
    type: 'RECEIVE_USER',
     payload: user
  }
}