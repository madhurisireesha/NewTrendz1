import { Component } from "react";
import './index.css'
class Login extends Component{
    state={
        username:'',
        password:'',
        isEmpty:false,
        errMsg:''
    }
    onChangeUserName=(event)=>{
       
        this.setState({
            username:event.target.value
        })
    }
    onChangePassword=(event)=>{
       
        this.setState({
            password:event.target.value,
           
        })
    }
    loginFail=(errMsg)=>{
        this.setState({
            isEmpty:true,
            errMsg:errMsg
        })
    }
    submitForm=async(event)=>{

        event.preventDefault()
        console.log("form submitted")
        const{username,password}=this.state
        const userDetails={username,password}
        const url='https://apis.ccbp.in/login'
        const options={
            method:'POST',
            body:JSON.stringify(userDetails)
        }
        const response=await fetch(url,options)
        const data=await response.json()
        if(response.ok===true){
            this.onSubmitSuccess()
        }
        else{
           this.loginFail(data.error_msg)
        }
       }
    onSubmitSuccess=()=>{
        const{history}=this.props
        history.push('/')
    }
    render(){
        const{username,password,isEmpty,errMsg}=this.state
        return(
            <>
            <div className="log">
                <div className="l1">
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" className="loginimg" alt="loginimg"/>
                </div>
                <div className="l2">
                    <form onSubmit={this.submitForm} className="form1">
                        <div>
                        <label className="input-label" htmlFor="username">USERNAME</label><br/>
                        <input type="text" id="username" value={username} onChange={this.onChangeUserName}/>
                        </div>
                        <div>
                        <label className="input-label" htmlFor="password">PASSWORD</label><br/>
                        <input type="text" id="password" value={password} onChange={this.onChangePassword}/><br/>
                        {isEmpty&&<p className="err" style={{color:"Red"}}>{errMsg}</p>} 
                        <button type="submit" className="loginbut">Login</button>
                        </div>
                      
                    </form>
                     
                    <div>
                   
                        </div>
                </div>
                
            </div>
        </>
        )
    }
}
export default Login