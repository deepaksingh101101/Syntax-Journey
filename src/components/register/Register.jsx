
import '../login/Login.css'


import login from '../../assets/save.png'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
   <>
   <Navbar/>
    <div className="content" >
    <div  className="container  ">
      <div className="row mt-3">
        <div className="col-md-6">
          <img style={{height:"78vh"}} src={login} alt="Image" className="img-fluid "/>
        </div>
        <div className="col-md-6 contents">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="mb-4">
              <h3>Register</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            </div>
            <form action="#" method="post">
              <div className="form-group first">
                <label htmlFor="username">Email</label>
                <input type="text" className="form-control" id="username"/>

              </div>
              <div className="form-group first mt-2">
                <label htmlFor="username">Phone Number</label>
                <input type="text" className="form-control" id="username"/>

              </div>
              <div className="form-group last mb-4 mt-2">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password"/>
                
              </div>
              
              {/* <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" style={{background:"#0B8AB6"}} checked="checked"/>
                  <div style={{background:"#0B8AB6"}} className="control__indicator"></div>
                </label>
                <span className="ml-auto"><a href="#" className="forgot-pass ms-2 fw-semibold" style={{color:"#0B8AB6"}}>Forgot Password</a></span> 
              </div> */}

              <input type="submit" value="Sign Up" style={{background:"#0B8AB6",color:"white"}} className="btn btn-block  w-100 "/>

<div className="d-flex justify-content-between">

              {/* <span className="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span> */}
              <span className="d-block text-left my-4 text-muted">&mdash; or <Link to='/login' className='fw-semibold' style={{textDecoration:"none", color:"#0B8AB6"}}>Login Here &mdash;</Link></span>
</div>
              
              <div className="social-login d-flex justify-content-center  align-items-center">
                <a href="#" className=" mx-3 facebook d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-square-facebook" style={{fontSize:"20px"}}></i> 
                </a>
                <a href="#" className="mx-3 twitter d-flex justify-content-center align-items-center">
                  {/* <span className="icon-twitter mr-3"></span>  */}
                  <i class="fa-brands fa-square-twitter" style={{fontSize:"20px"}}></i>
                </a>
                <a href="#" className="mx-3 google d-flex justify-content-center align-items-center">
                <i class="fa-brands fa-google" style={{fontSize:"20px"}}></i>                </a>
              </div>
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
   </>

  )
}
