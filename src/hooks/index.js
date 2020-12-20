import { useMutation } from "react-query"
import * as api from "../api"

const useCheckUsername = () => {
   return useMutation(api.checkUsername)
}
export { useCheckUsername }
