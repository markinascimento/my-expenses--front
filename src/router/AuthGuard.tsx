// -> Routing lib
import { Navigate, Outlet } from "react-router-dom";

// -> Custom hooks
import { useAuth } from "@/app/hooks/useAuth";

export function AuthGuard({ isPrivate }: { isPrivate: boolean }) {
  const { signedIn } = useAuth();

  if(!signedIn && isPrivate) {
    return <Navigate to="/sign-in" replace />
  }

  if(signedIn && !isPrivate) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
