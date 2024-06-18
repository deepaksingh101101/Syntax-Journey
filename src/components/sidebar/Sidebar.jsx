import { useContext, useEffect, useRef} from "react";
import mytrLogo from "../../assets/journey.png"
// import LogoBlue from "../../assets/images/logo_blue.svg";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import {SidebarContext} from '../../components/context/SidebarContext'
import AreaTop from "../areaTop/AreaTop";
// import ThemeContext from '../../components/context/ThemeContext'
const Sidebar = () => {

//   const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  
  let authUserData= JSON.parse(localStorage.getItem('user'))?.user?.isSuperAdmin

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.clear();
    navigate('/')

  }

        //   {/* <span className="sidebar-brand-text">tabernam.</span> */}

  return (
    <>

   
    <nav
    style={{zIndex:"",color:"white"}}
      className={` sidebar mt-5 py-5 px-0 ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div style={{zIndex:99999}} className="sidebar-top mb-0 mt-3">
        <div className=" ms-3 mt-2 sidebar-brand d-flex justify-content-between">
         <h5 className="fw-semibold" >C Tutorial</h5>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div  style={{zIndex:99999}} className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list p-0">
            <li className="menu-item" >
              <NavLink to="/consentList" className="menu-link text-decoration-none">
                <span className="menu-link-icon">
                <i className="fa-solid fa-file-waveform"></i>
                </span>
                <span className="menu-link-text">C Introduction</span>
              </NavLink>
            </li>
           {/* {authUserData && <li className="menu-item" >
              <NavLink to="/templateList" className="menu-link text-decoration-none">
                <span className="menu-link-icon">
                <i className="fa-solid fa-newspaper"></i>
                </span>
                <span className="menu-link-text">View Template</span>
              </NavLink>
            </li>} */}
          
          </ul>
        </div>

        
      </div>
    </nav>
    </>
  );
};

export default Sidebar;
