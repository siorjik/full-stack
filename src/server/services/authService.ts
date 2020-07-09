import jwt from 'jsonwebtoken';

class AuthService {
  private jwtParam: string = 'authToken';

  constructor(private login?: string, private password?: string) {}

  public setAuthToken = (login: string | undefined = this.login, password: string | undefined = this.password): string =>
    jwt.sign({ login, password }, this.jwtParam);

  public parseAuthToken = (headers: { authorization: string }): any => {
    const token = headers.authorization;

    return token ? jwt.verify(token, this.jwtParam) : null;
  }
}

export default AuthService;
