import { getCookie } from 'cookies-next';

export default function checkIfUserLoggedIn() {
  const authToken = getCookie('token');

  
}