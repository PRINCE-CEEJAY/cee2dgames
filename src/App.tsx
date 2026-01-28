import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";

export default function App(){
  return(
    <div className="flex flex-col justify-center items-cente min-h-screen">  
 
      <Landing />
      <Login/>
      <Register/>
    </div>
  )
}