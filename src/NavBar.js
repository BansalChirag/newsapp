import React, { useContext} from "react";
import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { DataContext } from "./context/context";



const NavBar = () => {
  const {mode,setMode} = useContext(DataContext)
  const handleMode = ()=>{
    if(mode==="dark"){
      document.body.style.backgroundColor="white";
      setMode('light') 
    }else{
      setMode('dark')
      document.body.style.backgroundColor="#000";
    }
    
  }
  const myStyles = {
    color:mode==='dark'?"#fff":"#000"
  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Monkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" >All</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/business" style={myStyles}>Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment" style={myStyles}>Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health" style={myStyles}>Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science" style={myStyles}>Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports" style={myStyles}>Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology" style={myStyles}>Technology</Link></li>
                {
                  mode==='dark'?
                  <li className="nav-item">
                  <Link onClick={handleMode}>
                    <LightModeIcon style={{cursor:"pointer",color: mode==="light"?"#000":"#fff"}} />
                  </Link>
                  </li> :
                  <li className="nav-item">
                  <Link onClick={handleMode}>
                    <DarkModeOutlinedIcon style={{cursor:"pointer"}}/>
                  </Link> 
                  </li>
                }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
