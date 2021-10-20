import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const useAuth = () => {
    //function call Authcontext
    return useContext(AuthContext);
}

export default useAuth;