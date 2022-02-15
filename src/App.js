import './App.css';
import {BrowserRouter ,Router, Route,} from "react-router-dom";
import Recipelist from "./Recipelist"
import Form from "./components/Form"
import Login from "./components/Login"
 
function App() {
  return (
    <div>
      <BrowserRouter>
    <Router>
       <Route path="/" component={Form} />
        <Route path= "/Login" component={Login} />
     </Router>
     </BrowserRouter>
      <h1>Recipe app</h1>
      <Recipelist/>
      </div>
     
  );
}
 
export default App;
