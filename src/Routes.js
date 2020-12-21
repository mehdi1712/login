import Login from "./components/LoginForm"
import VerifyUsername from "./components/VerifyUsername"
import Forget from "./components/Forget"
import Profile from "./components/Profile"
import ConfirmCode from "./components/ConfirmCode"
import Register from "./components/Register"
import NotFound from "./pages/NotFound"

const Routes = [
   {
      exact: true,
      path: "/",
      component: Login,
   },
   {
      path: "/login",
      component: Login,
   },
   {
      path: "/auth",
      component: VerifyUsername,
   },
   {
      path: "/forget",
      component: Forget,
   },
   {
      path: "/profile",
      component: Profile,
   },
   {
      path: "/register",
      component: Register,
   },
   {
      path: "/confirm-code",
      component: ConfirmCode,
   },

   {
      component: NotFound,
   },
]

export default Routes
