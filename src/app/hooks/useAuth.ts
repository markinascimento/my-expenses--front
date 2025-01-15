// -> ReactJS
import { useContext } from "react";

// -> Context
import { AuthContext, type IAuthContext } from "../contexts/AuthContext";

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}