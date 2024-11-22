import "./Navbar.css";
import { MdOutlineSegment } from "react-icons/md";import { CiSearch } from "react-icons/ci";
import profile from "../../assets/1.jpg";
import logo from "../../assets/1656504144youtube-logo-png-white.png";
import { RiVideoUploadLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
      <MdOutlineSegment onClick={() => setSidebar(prev=>prev===false?true:false)} className="icon menu"/>
       <Link to='/'><img src={logo} alt="logo" className="logo"/></Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search"/>
          <CiSearch className="icon"/>
        </div>
      </div>
      <div className="nav-right flex-div">
        <RiVideoUploadLine  className="icon"/>
        <IoMdNotificationsOutline className="icon"/>
        <img src={profile} alt="profile" className="user-icon"/>
      </div>
    </nav>
  );
};

export default Navbar;
