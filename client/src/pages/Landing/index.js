import "./style.css";
import { useContext, useState } from "react";
import {AuthContext} from "../../context/Authcontext"
import {useHistory} from "react-router-dom"
export const Landing = () => {
    const [islogged,setislogged] = useContext(AuthContext)
  const [container, setContainer] = useState(false);
  const [loginSwitch, setloginSwitch] = useState(true);
  const [validateerror,setvalidateError] = useState("");
  const [ispresent,setispresent] = useState(false)
  const [isnotfound,setisnotfound] = useState(false)
  const history = useHistory()
 
  const Registerdet = {
      username:"",
      email:"",
      password:"",
      confirmpassword:""
  }
  const logindet = {
    email:"",
    password:""
  }
  const [Regdet,setRegdet] = useState(Registerdet);
  const [logdet,setLogdet] = useState(logindet)
  const HandleInputChange = (e) =>{
      const {name,value} = e.target
      setRegdet({
          ...Regdet,
          [name]:value
      })
  }
  const HandleInputLoginChange = (e) => {
    const {name,value} = e.target;
    setLogdet({
      ...logdet,
      [name]:value
    })
  }
  const HandleLoginSubmit = (e) => {
    e.preventDefault()
    fetch("/user/login",{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({user:logdet})
  }).then((res) => {return res.json()})
  .then((res) => {
    if(res.notfound === true){
        setisnotfound(true)
    }
    else{
      const user = {
        "status":true,
        "userid":res.user
    }
    
    if(user.status === true)
    {
        setislogged({...user})
        sessionStorage.setItem('status',"true")
        sessionStorage.setItem('sessionuser',user.userid)
    history.push("/home")
    }
    }
    
   
      })
  .catch(error => console.error(error))
  }
  const HandleOnSubmit = (e) => {
      e.preventDefault()
      fetch("/user/register",{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({user:Regdet})
    }).then((res) => {return res.json()})
    .then((res) => {
        // setvalidateError(res)
        if(res.ispresent === true){
            setispresent(true)
        }
        else if(res.isupdated){
           
            const user = {
                "status":true,
                "userid":res.isupdated._id
            }
            
            if(user.status === true)
            {
                setislogged({...user})
                sessionStorage.setItem('status',"true")
                sessionStorage.setItem('sessionuser',user.userid)
            history.push("/home")
            }
            
        }
        else if(res.iserror !== ""){
          setispresent(false)
          setvalidateError(res.iserror)
      }
     
        })
    .catch(error => console.error(error))
}
  return (
    <>
      <div className="landing-nav">
        <img src="/netfilms.png" alt=""></img>
        <div>
          <button
            className="lsign-btn"
            onClick={(e) => {
              e.preventDefault();
              setContainer(true);
            }}
          >
            SignIn
          </button>
        </div>
      </div>
      <div className="landing-main-wrapper">
      <div class="animated-scene">
    <div class="animated-scene__frame animated-scene__frame-1" style={{background:`url("./bg-poster.jpg")`}}></div>
    <div class="animated-scene__frame animated-scene__frame-2"style={{background:`url("./bg-poster.jpg")`}}></div>
    </div>
    <div className="bg--black--over">
            
          <div className="login-signup">
            {loginSwitch === true ? (
              <div className="lform">
                {isnotfound === true ?(<div style={{ "fontSize":"1rem","color":"crimson","textAlign":"center"}}>your email or password is invalid</div>):("")}
                <form>
                  <div className="switch">
                    <button
                      className={
                        loginSwitch === true ? "active sign-btn" : "sign-btn"
                      }
                    >
                      Login
                    </button>
                    <button
                      className="sign-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setloginSwitch(false);
                      }}
                    >
                      SignUp
                    </button>
                  </div>
                  <div className="inp-flex">
                    <label>Email</label>
                    <input type="email" name="email" onChange={HandleInputLoginChange}></input>
                  </div>
                  <div className="inp-flex">
                    <label>Password</label>
                    <input type="password" name="password" onChange={HandleInputLoginChange}></input>
                  </div>
                  <div>
                    <button className="lsign-btn--333" style={{ marginTop: "1rem" }} onClick={HandleLoginSubmit}>
                      LogIn
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="lform">
                  {ispresent === true ?(<div style={{ "fontSize":"1rem","color":"crimson","textAlign":"center"}}>This Email Already Exists</div>):("")}
                <form>
                  <div className="switch">
                    <button
                      className="sign-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setloginSwitch(true);
                      }}
                    >
                      Login
                    </button>
                    <button
                      className={
                        loginSwitch === false ? "active sign-btn" : "sign-btn"
                      }
                    >
                      SignUp
                    </button>
                  </div>
                  <div className="inp-flex">
                    <label>Username</label>
                    <input type="text" name="username" onChange={HandleInputChange}></input>
                    {validateerror === "" ?(""):(<div className="error">{validateerror.userError}</div>)}
                  </div>
                  <div className="inp-flex">
                    <label>Email</label>
                    <input type="email" name="email" onChange={HandleInputChange}></input>
                    {validateerror === "" ?(""):(<div className="error">{validateerror.emailError}</div>)}
                  </div>
                  <div className="inp-flex">
                    <label>Password</label>
                    <input type="password" name="password" onChange={HandleInputChange}></input>
                    {validateerror === "" ?(""):(<div className="error">{validateerror.passwordError}</div>)}
                  </div>
                  <div className="inp-flex">
                    <label>confirm-Password</label>
                    <input type="password" name="confirmpassword" onChange={HandleInputChange}></input>
                    {validateerror === "" ?(""):(<div className="error">{validateerror.matchingError}</div>)}
                  </div>

                  <div>
                    <button className="lsign-btn--333" style={{ marginTop: "1rem" }} onClick={HandleOnSubmit}>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
      
    </div>
        {/* <div className="netfilms-det">
          <h1>
            Welcome To <span style={{ color: "crimson" }}>NetFilms</span>
          </h1>
          <p>
            We NetFlims give you a{" "}
            <span style={{ color: "crimson" }}>unlimited access</span> to watch
            movies online with{" "}
            <span style={{ color: "crimson" }}> Free Subscriptions</span>. Watch
            Your Favorite Movies without any Interuption.
          </p>
          <button
            type="button"
            className="lsign-btn"
            onClick={(e) => {
              e.preventDefault();
              setContainer(true);
            }}
          >
            Getstarted
          </button>
        </div> */}
        
       
      </div>
    </>
  );
};
