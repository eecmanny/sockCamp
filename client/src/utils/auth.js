import decode from 'jwt-decode';

class AuthService {
 loggedIn() {
        const token = this.getToken();
        // If there is a token and it's not expired, return `true`
        return token && !this.isTokenExpired(token) ? true : false;
      }

  // set token to localStorage and reload page to homepage
  login(token) {
    localStorage.setItem('id_token', token);
    window.location.assign('/');
  }
  // remove token from localStorage and reload page to homepage
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
  // retrieve token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }
  // decode token and return user object
  getProfile() {
    return jwt.decode(this.getToken());
  }
}

export default new AuthService();