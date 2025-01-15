// -> Base API
import { api } from "./httpClient";

interface ISignInResponse {
  accessToken: string;
  user: {
    avatar: string;
    fullName: string;
    username: string;
  }
}

export class AuthServices{
  static async signIn(username: string, password: string) {
    const { data } = await api.post<ISignInResponse>('/account/sign-in', {
      username,
      password
    });

    return data;
  }
}