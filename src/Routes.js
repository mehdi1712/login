import Login from "./components/LoginForm"
import VerifyUsername from "./components/VerifyUsername"
import Forget from "./components/Forget"
import Profile from "./components/Profile"
import ConfirmCode from "./components/ConfirmCode"
import Register from "./components/Register"
import ForgetVerify from "./components/ForgetVerify"
import NotFound from "./pages/NotFound"

const Routes = [
   {
      exact: true,
      path: "/",
      component: Profile,
   },
   {
      path: "/login",
      component: Login,
   },
   {
      path: "/verify",
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
      path: "/forget-verify",
      component: ForgetVerify,
   },

   {
      component: NotFound,
   },
]

export default Routes
