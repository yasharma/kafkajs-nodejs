export interface IUserToken {
  jti: string;
  sub: string;
  iss: string;
  iat: number;
  exp: number;
  scope: string;
  name: string;
  key: string;
  aud: string;
  role: string;
  status: string;
}

export interface IUserProfile {
  id: string;
  name: string;
}
