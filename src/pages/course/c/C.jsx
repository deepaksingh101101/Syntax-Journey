import React, { useRef, useState } from "react";
import AreaTop from "../../../components/areaTop/AreaTop";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Strip from "../../../components/strip/Strip";
import './C.css';
import { formats, modules } from "../../../helper/quillHelper";
import QuillEditor from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function C() {

    const [hinglihValue, setHinglihValue] = useState("Ankit");
    const hinglihRef = useRef(); 
    const [englishValue, setEnglishValue] = useState("Ankit2");
    const englishRef = useRef(); 

  return (
    <>
    <div className="position-sticky  top-0" style={{zIndex:"999999"}}>
    <Navbar />
    <Strip />
    </div>
      
      <div className="layout">
        <Sidebar />
        <div className="mainContent" style={{background:"#212529",minHeight:"200vh"}} >
          <h1 className="text-center text-white fw-semibold py-2" >C Programming Tutorial</h1>

      <div className="col-md-12 px-2   ">

      <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item switchTabs" role="presentation">
    <button className="nav-link active fw-bold" style={{color:"white"}} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">English</button>
  </li>
  <li className="nav-item switchTabs" role="presentation">
    <button style={{color:"white"}}  className="nav-link fw-bold" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Hinglish</button>
  </li>

</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

  <QuillEditor
      ref={englishRef}
      theme="snow"
      value={englishValue}
      className="text-white"
    //   formats={formats}
    //   modules={modules}
    modules={{
        toolbar: false, // Hide the toolbar
      }}
      readOnly
    //   onChange={setEditFaqDescription}
    />

  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <QuillEditor
      ref={hinglihRef}
      theme="snow"
      value={hinglihValue}
      className="text-white"
    //   formats={formats}
    //   modules={modules}
    modules={{
        toolbar: false, // Hide the toolbar
      }}
      readOnly
    //   onChange={setEditFaqDescription}
    />
    
  </div>
</div>




   
     <div style={{border:"1px solid #0B8AB6"}} className="col-md-12  text-white  ">
        
        </div>
      </div>


      <div  className="col-md-12 px-3 mt-3 text-white  ">
        <h3>Example</h3>

        <div className="" style={{background:"black"}}>
     
        <pre style={{ padding: '16px', backgroundColor: 'black', borderRadius: '5px',marginBottom:"10px" }}>
        <code style={{fontSize:"16px"}} >
          {`#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}`}
        </code>
      </pre>
   
        </div>
        <button className="btn runBtn" >Run This Code </button>
</div>

        </div>
      </div>
    </>
  );
}
