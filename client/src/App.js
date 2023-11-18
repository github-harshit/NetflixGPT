
 import store from "./redux/store.js";
 import { Provider } from "react-redux";
import Body from "./components/Body.jsx"
import { RouterProvider } from "react-router-dom";
import {router} from "./components/Body.jsx"
function App() {
  return (
    <>
     <Provider store={store}>
    

         <Body/>
      
      
    
     </Provider>
   
    </>
  );
}

export default App;
