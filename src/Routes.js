import Login from "./components/LoginForm"
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
      component: NotFound,
   },
]

export default Routes
