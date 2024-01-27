import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhMoM0dkz4Zr55S0448Q4L-tO53Q25K68",
  authDomain: "myidol-b0c72.firebaseapp.com",
  projectId: "myidol-b0c72",
  storageBucket: "myidol-b0c72.appspot.com",
  messagingSenderId: "431519660059",
  appId: "1:431519660059:web:d7ff758adc9c2822bea0be",
  measurementId: "G-YLNWZR47Y1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// React에서 정상적으로 동작하는 지 확인하기 위해서 임시로 export 시켜줍니다. app이 정상적으로 출력되는 것을 확인하고 나면, 지워줍니다.
