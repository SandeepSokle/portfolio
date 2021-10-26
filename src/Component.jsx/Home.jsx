import { About } from "../ComponentHelper/HomeHelper/About"
import { Contact } from "../ComponentHelper/HomeHelper/ContactUs"
import { Header } from "../ComponentHelper/HomeHelper/Header"
import { Portfolio } from "../ComponentHelper/HomeHelper/Portfolio"
import { Resume } from "../ComponentHelper/HomeHelper/Resume"
import { Skill } from "../ComponentHelper/HomeHelper/Skill"

export const Home = ()=>{
    return <div className="homeContainer">
        <Header/>
        <About/>
        <Skill/>
        <Resume/>
        <Portfolio/>
        <Contact/>
    </div>
}