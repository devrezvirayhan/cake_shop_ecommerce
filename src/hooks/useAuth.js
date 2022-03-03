
import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;





// import { useContext } from "react";


// const useAuth = () => {

//     const useAuth = ()=>{
//         const auth = useContext(AuthContext);
//         return auth;
//     }

// }

// export default useAuth;
