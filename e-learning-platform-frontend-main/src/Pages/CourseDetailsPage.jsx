import React from 'react';
import {Navbar, Container} from 'react-bootstrap/';
import Sidebar from '../Components/Sidebar';
import NavBar from '../Components/NavBar';
import courseImg from "../images/course-img-3.png"
import lecturer from "../images/profile-2.png"
import CourseDetailTab from '../Components/CourseDetailTab';


export default function CourseDetailsPage() {
  return (
    <div className='d-flex'>
        <Sidebar />
            <Container className='w-100 px-0' fluid>
                <NavBar className="w-100"/>
                <Container>
                    <Navbar>
                        <Container>
                            <Navbar.Brand href="#home"><a href="#" className='text-decoration-none'>‹ Back</a></Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                            <i class="bi bi-camera-video-fill me-2" style={{color: "blue"}}></i><a href="#login" style={{color: "blue"}}>   Class Starts in 30 mins - Join Now</a>
                            </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className="header-section d-flex justify-content-between">
                        <div className="course-info d-flex align-items-center">
                            <div className="image me-3">
                                <img src={courseImg} alt="" />
                            </div>
                            <div className="content">
                                <p className="course-code text-start mb-2" style={{fontSize: "20px"}}>INSY 302</p>
                                <p className="course-name text-start mb-2"  style={{fontSize: "29px"}}>Artificial Intelligence</p>
                                <div className="lecturer-profile d-flex align-items-center justify-content-start">
                                    
                                    <div className="lec-img me-2">
                                        <img src={lecturer} alt="lecturer" />
                                    </div>
                                    <p className='text-start mb-0' style={{fontSize: "18px", color: "blue"}}>Dr Adekunle Mike</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="class-info  d-flex align-items-center">
                            <div className="learners mx-3">
                                <p className='mb-1' style={{fontSize: "18px"}}>Number of Learners</p>
                                <p className='fw-semibold' style={{fontSize: "24px"}}>300</p>
                            </div>
                            <div className="vr" style={{alignSelf: "center", minHeight: "70px"}}></div>
                            <div className="group mx-3">
                                <p className='mb-1' style={{fontSize: "18px"}}>Small Groups</p>
                                <p className='fw-semibold' style={{fontSize: "24px"}}>15</p>
                            </div>
                            <div className="vr" style={{alignSelf: "center", minHeight: "70px"}}></div>
                            <div className="board mx-3">
                                <p className='mb-1' style={{fontSize: "18px"}}>Class Leaderboard</p>
                                <p className='fw-semibold' style={{fontSize: "24px"}}>#30 <a href="#" style={{fontSize: "16px"}}>View board</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="course-tabs mt-4 d-flex justify-content-center flex-column" style={{width: "80%", margin: "0 auto"}}>
                        <CourseDetailTab />
                    </div>
                </Container>
            </Container>
        
    </div>
    
  )
}
