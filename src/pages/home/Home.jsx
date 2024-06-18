import Navbar from "../../components/navbar/Navbar";
import './Home.css'
import hero3 from '../../assets/hero3.jpg'
import Card from "../../components/card/Card";
import Testing from "../../components/testing/Testing";
import Testinomial from "../../components/testinomail/Testinomial";
import Footer from "../../components/footer/Footer";
import Stats from "../../components/stats/Stats";
import Strip from "../../components/strip/Strip";






export default function Home() {
  return (
    <>
    {/* Navbar */}
    <Navbar/>


<Strip/>

{/* Hero Section */}
<div className="hero w-100 position-relative" style={{minHeight:"86vh",background:"#0D1721"}} >
<img src={hero3} style={{height:"80vh",zIndex:"50"}}  className="heroImage w-100 " alt="Hero"/>
<div className="d-flex  justify-content-center  w-100">
  <div className="d-flex  flex-column position-absolute w-100" style={{top:"20%"}}>
<h1 className="display-2 fw-semibold text-center mainColor"  ><span style={{color:"white"}} >Syntax</span> Journey</h1>
<p className="text-center text-white fw-semibold"><span className="mainColor" > Master the Syntax,</span> Master the Code</p>



{/* Search Bar */}
<div  className="d-flex mt-4 justify-content-center position-relative">
<form style={{width:"30vw"}} className="d-flex  p-1 search_form justify-content-between borderRadius align-items-center" role="search">
        <input className="form-control border-0 me-2  shadow-none" type="search" placeholder="Search Topics" aria-label="Search"/>
        <i role='button' className="fa-brands fa-searchengin iconSize me-2"></i>
      </form>

      <div  className="d-flex flex-wrap justify-content-center w-100 my-5 position-absolute  " style={{top:"500%", background:"#110F16"}}>
<Card/>
{/* podcast */}

<div className="d-flex flex-column position-relative">
  <div style={{minWidth:"20vh"}} className="">

  </div>
<Testing/>

<Testinomial/>
<Stats/>
<Footer/>
</div>
</div>

</div>


  </div>
</div>
</div>







    </>
  )
}
