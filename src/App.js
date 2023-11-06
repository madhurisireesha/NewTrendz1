import { BrowserRouter,Switch,Route } from "react-router-dom";
import Header from './components/Header/index.js'
import Home from './components/Home/index.js'
import Login from './components/Login/index.js'
import Notfound from './components/Notfound/index.js'
import './App.css'
const App=()=>{
    return(
        <div className="entirecontainer">
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Login' component={Login}/>
                <Route component={Notfound}/>
            </Switch>
        </BrowserRouter>
        </div>
    )
}
export default App