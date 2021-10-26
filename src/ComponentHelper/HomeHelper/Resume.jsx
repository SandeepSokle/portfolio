import { ResumeAbout } from "../ResumeHelper/ResumeAbout"
import { ResumeEducation } from "../ResumeHelper/ResumeEducation"
import { ResumeExperience } from "../ResumeHelper/ResumeExperience"
import { ResumeProjects } from "../ResumeHelper/ResumeProjects"

export const Resume = ()=>{
    return <div className="resumeContainer">
        <ResumeAbout/>
        <ResumeEducation/>
        <ResumeExperience/>
        <ResumeProjects/>
    </div>
}