import jwt from 'jsonwebtoken';

class AuthService {
  private jwtParam: string = 'authToken';

  constructor(private login?: string, private password?: string) {}

  public setAuthToken = (login: string | undefined = this.login, password: string | undefined = this.password) =>
    jwt.sign({ login, password }, this.jwtParam);

  public getAuthToken = (token: string) => jwt.verify(token, this.jwtParam);

  public checkAuthToken = (headers: { authorization?: string }) => {
    if (headers.authorization) return true;

    return false;
  };
}

export default AuthService;
