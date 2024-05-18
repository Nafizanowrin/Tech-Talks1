import { Navbar } from "../components/Navbar";
import News from "../components/News";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { SiKakaotalk } from "react-icons/si";
import "../components/home.css";

export const Home = () => {
    return (
    <>
    <div className="homecontainer">
    <h1> Welcome to Tech - <SiKakaotalk className='icon' /></h1> 
       <Search />
       <Pagination />
       <News />
    </div>
       
    </>
    );
};