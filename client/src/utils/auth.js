import decode from 'jwt-decode';

// class AuthService {
  
//   // set token to localStorage and reload page to homepage
//   // remove token from localStorage and reload page to homepage
  //   // retrieve token from localStorage
  //   getToken() {
    //     return localStorage.getItem('id_token');
    //   }
    //   // decode token and return user object
    //   getProfile() {
      //     return jwt.decode(this.getToken());
      //   }
      // }

       const login = (token) => {
          localStorage.setItem('id_token', token);
          window.location.assign('/home');
        }

       const logout = () => {
          localStorage.removeItem('id_token');
          window.location.assign('/');
        }

      const loggedIn = () => {
  const token = localStorage.getItem('id_token');
  if (token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return false;
    } else return true;
  } else return false;
} 



export default {loggedIn, login, logout};