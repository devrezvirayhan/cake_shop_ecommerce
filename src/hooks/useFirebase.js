import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/Firebase.init";





initializeFirebase()


const useFirebase = () => {


  const auth = getAuth();

  const [user, setUser] = useState({});

  const signUsingGoogle = ()=>{
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth, googleprovider)
    .then(result =>{
      setUser(result.user);
    })


  }



  // const registerUser = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password)

  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });

  // }

  // SIGN IN WITH EMAIL AND PASSWORD 

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }




  useEffect(() => {
    const unsibscrobe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        setUser(user)
      } else {
        setUser({})
      }
    });
    return () => unsibscrobe;
  }, [])

  const logout = () => {
    signOut(auth)
    .then(()=> { });
  }
  return {
    user,
    logout,
    loginUser,
    signUsingGoogle,

  }
}

export default useFirebase;
