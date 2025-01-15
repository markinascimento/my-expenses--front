// -> Routing lib
import { Route, Routes } from 'react-router-dom';

// -> Pages
import { SignIn } from '@/view/SignIn';
import { AuthGuard } from './AuthGuard';

export function Router() {
  return (
    <Routes>
      <Route element={<AuthGuard isPrivate />}>
        <Route path='/' element={<h1> home </h1>} />
      </Route>

      <Route element={<AuthGuard isPrivate={false} />}>
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}
