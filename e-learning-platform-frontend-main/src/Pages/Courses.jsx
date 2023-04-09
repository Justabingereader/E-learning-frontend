import React from 'react'
import { Container, Row, Card , Pagination} from 'react-bootstrap'
import NavBar from '../Components/NavBar';
import Sidebar from '../Components/Sidebar';
import courseImg from "../images/course-img-2.png";
import profile from "../images/profile.png";
import onlineIcon from "../images/online-icon.svg";
import "./Courses.css"
import Calendar from '../Components/Calendar';
import ScheduleSection from '../Components/ScheduleSection';
import CoursesTable from '../Components/CoursesTable';
import { Link } from 'react-router-dom';


export default function Courses() {
  return (
    <div className='d-flex'>
        <Sidebar />
            <Container className='w-100 px-0' fluid>
                <NavBar className="w-100"/>
                <Row className='w-100 my-4 container mx-0 d-flex justify-content-center '>
                    <div className="sec-1 col-lg-7 col-md-12 d-flex flex-column justify-content-start align-start">
                        <div className="sec-header d-flex align-items-center justify-content-between">
                            <h4 className='sec-title'>Enrolled Course</h4>
                        </div>
                        
                        <div className="overflow-auto cards-sec d-flex flex-wrap align-items-start w-100"  style={{height: "75vh"}} >
                            <Link exact to='/coursedetails'>
                                <Card className='me-2 my-2' style={{  borderWidth: "2px", width: "11rem"}}>
                                    <Card.Body className='text-start px-2 py-2'>
                                        <Card.Img src={courseImg} variant="top" />
                                        <div className="tags mt-2 mb-0 d-flex align-items-center justify-content-start">
                                            <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-people"></i>300 mates</p>
                                            <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#0043C8"}}><i class="bi bi-calendar-minus"></i>1 Task</p>
                                            <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-pentagon fw-semibold"></i>Online</p>
                                        </div>
                                        <Card.Text className='mb-1'>INSY 302</Card.Text>
                                        <Card.Title className='mb-1 fs-6 fw-semibold mb-0'>Artificial Intelligence</Card.Title>  
                                        <div className="lecturer d-flex align-items-center justify-content-start">
                                            <div className="profile me-1" style={{width: "20px"}}>
                                                <img src={profile} alt="lecturer" className='w-100'/>
                                            </div>
                                            <Card.Link className='text-decoration-none' style={{fontSize: "11px"}}>Ayodeji Bamidele</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                            
                            <Card className='me-2 my-2' style={{  borderWidth: "2px", width: "11rem"}}>
                                <Card.Body className='text-start px-2 py-2'>
                                    <Card.Img src={courseImg} variant="top" />
                                    <div className="tags mt-2 mb-0 d-flex align-items-center justify-content-start">
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-people"></i>300 mates</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#0043C8"}}><i class="bi bi-calendar-minus"></i>1 Task</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-pentagon fw-semibold"></i>Online</p>
                                    </div>
                                    <Card.Text className='mb-1'>INSY 302</Card.Text>
                                    <Card.Title className='mb-1 fs-6 fw-semibold mb-0'>Artificial Intelligence</Card.Title>  
                                    <div className="lecturer d-flex align-items-center justify-content-start">
                                        <div className="profile me-1" style={{width: "20px"}}>
                                            <img src={profile} alt="lecturer" className='w-100'/>
                                        </div>
                                        <Card.Link className='text-decoration-none' style={{fontSize: "11px"}}>Ayodeji Bamidele</Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{  borderWidth: "2px", width: "11rem"}}>
                                <Card.Body className='text-start px-2 py-2'>
                                    <Card.Img src={courseImg} variant="top" />
                                    <div className="tags mt-2 mb-0 d-flex align-items-center justify-content-start">
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-people"></i>300 mates</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#0043C8"}}><i class="bi bi-calendar-minus"></i>1 Task</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-pentagon fw-semibold"></i>Online</p>
                                    </div>
                                    <Card.Text className='mb-1'>INSY 302</Card.Text>
                                    <Card.Title className='mb-1 fs-6 fw-semibold mb-0'>Artificial Intelligence</Card.Title>  
                                    <div className="lecturer d-flex align-items-center justify-content-start">
                                        <div className="profile me-1" style={{width: "20px"}}>
                                            <img src={profile} alt="lecturer" className='w-100'/>
                                        </div>
                                        <Card.Link className='text-decoration-none' style={{fontSize: "11px"}}>Ayodeji Bamidele</Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{  borderWidth: "2px", width: "11rem"}}>
                                <Card.Body className='text-start px-2 py-2'>
                                    <Card.Img src={courseImg} variant="top" />
                                    <div className="tags mt-2 mb-0 d-flex align-items-center justify-content-start">
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-people"></i>300 mates</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#0043C8"}}><i class="bi bi-calendar-minus"></i>1 Task</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-pentagon fw-semibold"></i>Online</p>
                                    </div>
                                    <Card.Text className='mb-1'>INSY 302</Card.Text>
                                    <Card.Title className='mb-1 fs-6 fw-semibold mb-0'>Artificial Intelligence</Card.Title>  
                                    <div className="lecturer d-flex align-items-center justify-content-start">
                                        <div className="profile me-1" style={{width: "20px"}}>
                                            <img src={profile} alt="lecturer" className='w-100'/>
                                        </div>
                                        <Card.Link className='text-decoration-none' style={{fontSize: "11px"}}>Ayodeji Bamidele</Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{  borderWidth: "2px", width: "11rem"}}>
                                <Card.Body className='text-start px-2 py-2'>
                                    <Card.Img src={courseImg} variant="top" />
                                    <div className="tags mt-2 mb-0 d-flex align-items-center justify-content-start">
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-people"></i>300 mates</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#0043C8"}}><i class="bi bi-calendar-minus"></i>1 Task</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-pentagon fw-semibold"></i>Online</p>
                                    </div>
                                    <Card.Text className='mb-1'>INSY 302</Card.Text>
                                    <Card.Title className='mb-1 fs-6 fw-semibold mb-0'>Artificial Intelligence</Card.Title>  
                                    <div className="lecturer d-flex align-items-center justify-content-start">
                                        <div className="profile me-1" style={{width: "20px"}}>
                                            <img src={profile} alt="lecturer" className='w-100'/>
                                        </div>
                                        <Card.Link className='text-decoration-none' style={{fontSize: "11px"}}>Ayodeji Bamidele</Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{  borderWidth: "2px", width: "11rem"}}>
                                <Card.Body className='text-start px-2 py-2'>
                                    <Card.Img src={courseImg} variant="top" />
                                    <div className="tags mt-2 mb-0 d-flex align-items-center justify-content-start">
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-people"></i>300 mates</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#0043C8"}}><i class="bi bi-calendar-minus"></i>1 Task</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-pentagon fw-semibold"></i>Online</p>
                                    </div>
                                    <Card.Text className='mb-1'>INSY 302</Card.Text>
                                    <Card.Title className='mb-1 fs-6 fw-semibold mb-0'>Artificial Intelligence</Card.Title>  
                                    <div className="lecturer d-flex align-items-center justify-content-start">
                                        <div className="profile me-1" style={{width: "20px"}}>
                                            <img src={profile} alt="lecturer" className='w-100'/>
                                        </div>
                                        <Card.Link className='text-decoration-none' style={{fontSize: "11px"}}>Ayodeji Bamidele</Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{  borderWidth: "2px", width: "11rem"}}>
                                <Card.Body className='text-start px-2 py-2'>
                                    <Card.Img src={courseImg} variant="top" />
                                    <div className="tags mt-2 mb-0 d-flex align-items-center justify-content-start">
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-people"></i>300 mates</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#0043C8"}}><i class="bi bi-calendar-minus"></i>1 Task</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-pentagon fw-semibold"></i>Online</p>
                                    </div>
                                    <Card.Text className='mb-1'>INSY 302</Card.Text>
                                    <Card.Title className='mb-1 fs-6 fw-semibold mb-0'>Artificial Intelligence</Card.Title>  
                                    <div className="lecturer d-flex align-items-center justify-content-start">
                                        <div className="profile me-1" style={{width: "20px"}}>
                                            <img src={profile} alt="lecturer" className='w-100'/>
                                        </div>
                                        <Card.Link className='text-decoration-none' style={{fontSize: "11px"}}>Ayodeji Bamidele</Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{  borderWidth: "2px", width: "11rem"}}>
                                <Card.Body className='text-start px-2 py-2'>
                                    <Card.Img src={courseImg} variant="top" />
                                    <div className="tags mt-2 mb-0 d-flex align-items-center justify-content-start">
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-people"></i>300 mates</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#0043C8"}}><i class="bi bi-calendar-minus"></i>1 Task</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-pentagon fw-semibold"></i>Online</p>
                                    </div>
                                    <Card.Text className='mb-1'>INSY 302</Card.Text>
                                    <Card.Title className='mb-1 fs-6 fw-semibold mb-0'>Artificial Intelligence</Card.Title>  
                                    <div className="lecturer d-flex align-items-center justify-content-start">
                                        <div className="profile me-1" style={{width: "20px"}}>
                                            <img src={profile} alt="lecturer" className='w-100'/>
                                        </div>
                                        <Card.Link className='text-decoration-none' style={{fontSize: "11px"}}>Ayodeji Bamidele</Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{  borderWidth: "2px", width: "11rem"}}>
                                <Card.Body className='text-start px-2 py-2'>
                                    <Card.Img src={courseImg} variant="top" />
                                    <div className="tags mt-2 mb-0 d-flex align-items-center justify-content-start">
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-people"></i>300 mates</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#0043C8"}}><i class="bi bi-calendar-minus"></i>1 Task</p>
                                        <p className="me-2 px-1 py-1 mb-1" style={{fontSize: "8px", background: true ?"#E6EEFE": "#E9E9E9", borderRadius: "3px", color: "#4F4F4F"}}><i class="bi bi-pentagon fw-semibold"></i>Online</p>
                                    </div>
                                    <Card.Text className='mb-1'>INSY 302</Card.Text>
                                    <Card.Title className='mb-1 fs-6 fw-semibold mb-0'>Artificial Intelligence</Card.Title>  
                                    <div className="lecturer d-flex align-items-center justify-content-start">
                                        <div className="profile me-1" style={{width: "20px"}}>
                                            <img src={profile} alt="lecturer" className='w-100'/>
                                        </div>
                                        <Card.Link className='text-decoration-none' style={{fontSize: "11px"}}>Ayodeji Bamidele</Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <Pagination className='w-100 d-flex align-items-center justify-content-center mt-4'>
                            <Pagination.Prev className="page-arrow"/>
                            <Pagination.Item active className=' mx-2' >{1}</Pagination.Item>
                               <p className='mx-4 mt-3' style={{color:"#BCBCBC"}}>of</p>
                            <Pagination.Item className='mx-2'>{24}</Pagination.Item>
                            <Pagination.Next className="page-arrow" />
                        </Pagination>
                    </div>
                    <div className="vr px-0" ></div>
                    <div className="sec-2 col-lg-4 col-md-12 d-flex flex-column align-items-center justify-content-start">
                        <div className="sub-sec sub-sec-2 mb-4 w-100 d-flex flex-column justify-content-start">
                            <div className="sec-header d-flex align-items-center justify-content-between">
                                <h4 className='sec-title'>Upcoming Today</h4>
                            </div>
                            <div className="courses d-flex align-items-start justify-content-start">
                               <CoursesTable></CoursesTable>
                            </div>
                            
                        </div>
                        <div className="sub-sec sub-sec-1 mb-4 w-100 d-flex flex-column justify-content-start">
                            <div className="sec-header d-flex align-items-center justify-content-between">
                                <h4 className='sec-title'>Your Schedule</h4>
                            </div>
                            <ScheduleSection></ScheduleSection>
                        </div>
                        
                    </div>                
                </Row>
            </Container>
    </div>
  )
}
