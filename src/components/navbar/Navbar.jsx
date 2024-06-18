import './Navbar.css'
import logo from '../../assets/journey.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg   bg-dark">
  <div className="container-fluid">
    <img style={{height:"50px",width:"90px"}}  className="navbar-brand" src={logo} alt='Syntax Journey'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
      <div className="d-flex">
      <form style={{maxHeight:"36px"}}  className="d-flex mt-2 search_form justify-content-between align-items-center" role="search">
        <input className="form-control border-0 me-2  shadow-none" type="search" placeholder="Search" aria-label="Search"/>
        <i role='button' className="fa-brands fa-searchengin iconSize me-2"></i>
      </form>
      <Link to='/login' style={{textDecoration:"none"}} className="cta ms-3">
  <span style={{color:"white"}} className='ms-1' >Login Here</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</Link>
      </div>
     
    </div>
  </div>
</nav>
  )
}
