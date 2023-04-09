import React from 'react';
import NavBar from '../Components/NavBar';
import Sidebar from '../Components/Sidebar';
import {Container, Card, Row,Button } from 'react-bootstrap/';
import hero from "../images/dashboard-hero.png";
import "./Dashboard.css"
import graphLine from "../images/graph-line-1.svg" 
import chart from "../images/round-chart.svg" ;
import barChart from "../images/bar-chart.svg" ;
import courseImg1 from "../images/course-img-1.png";
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';
import meritBadges from "../images/meritbadges.png"




function Dashboard(props) {

    const descText = "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet conse ctetur. Lorem ipsum dolor sit amet consectetur."
    return (
        <div className='d-flex'>
            <Sidebar />
            <Container className='w-100 px-0' fluid>
                <NavBar className="w-100"/>
                <div className="hero" style={{background: "red"}}>
                    <img src={hero} className="img-fluid w-100" alt="..." />
                </div>
                <Row className='w-100 my-4 container mx-0 d-flex justify-content-center'>
                    <div className="sec-1 col-lg-7 col-md-12 d-flex flex-column justify-content-start align-start">
                        <div className="sec-header d-flex align-items-center justify-content-between">
                            <h4 className='sec-title'>Progress Overview</h4>
                            <a href="#" className='text-decoration-none sec-link'>View all Analytics</a>
                        </div>
                        
                        <div className="cards-sec d-flex flex-wrap align-items-start w-100">
                            <Card className='me-2 my-2' style={{ width: '14rem', borderWidth: "2px"}}>
                                <Card.Body className='text-start pb-0'>
                                    <Card.Title className='fs-6 fw-normal mb-0'>Leaderboard points</Card.Title>
                                    <Card.Text className='bolder-text fw-bolder mb-0'>7,893</Card.Text>
                                    <Card.Text className='mb-0'>You're <Card.Link className='text-decoration-none'>#24 </Card.Link>on the board.</Card.Text>
                                    <Card.Img src={graphLine} />

                                    
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{ width: '18rem', borderWidth: "2px"}}>
                                <Card.Body className='text-start d-flex justify-content-between'>
                                    <div className="card-sec-1 me-2 ">
                                        <Card.Title className='fs-6 fw-normal mb-0'>Learning time</Card.Title>
                                        <Card.Text className='bolder-text fw-bolder mb-0'>40 hrs</Card.Text>
                                        <Card.Text style={{fontSize: "8px"}} className='mb-0'>Keeping track of your learning time helps you grow</Card.Text>
                                    </div>
                                    <div className="card-image">
                                        <img src={chart} alt="chart" />
                                    </div>                                   

                                    
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{ width: '14rem', borderWidth: "2px"}}>
                                <Card.Body className='text-start pb-0'>

                                    <Card.Title className='fs-6 fw-normal mb-2'>Class attendance</Card.Title>
                                    <Card.Text className='fw-bolder mb-0' style={{fontSize: "17px"}}>🤨 Hmm...not looking good</Card.Text>
                                    <Card.Img src={barChart} />

                                    
                                </Card.Body>
                            </Card>
                            <Card className='me-2 my-2' style={{ width: '18rem', borderWidth: "2px"}}>
                                <Card.Body className='text-start pb-0 d-flex'>
                                    <div className='w-100'>
                                        <Card.Title className='fs-6 fw-normal mb-0'>Merit badges</Card.Title>
                                        <Card.Text className='bolder-text fw-bolder mb-0 d-flex align-items-center'>77<span style={{fontSize: "8px", fontWeight: "normal"}}><span className='bg-primary px-1' style={{borderRadius: "8px", color: "#FFF"}}>+2</span> in the last week</span></Card.Text>
                                        <Card.Text className='mb-0'>You're <Card.Link className='text-decoration-none'>#24 </Card.Link>on the board.</Card.Text>
                                    </div>
                                    <div className="w-100">
                                        <Card.Img src={meritBadges} />
                                    </div>
                                    
                                    

                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="vr px-0" ></div>
                    <div className="sec-2 col-lg-4 col-md-12 d-flex flex-column align-items-center justify-content-start">
                        <div className="sub-sec sub-sec-1 mb-4 w-100 d-flex flex-column justify-content-start">
                            <div className="sec-header  d-flex align-items-start justify-content-between">
                                <h4 className='sec-title'>Your Courses</h4>
                                <a href="#" className='text-decoration-none sec-link'>View all</a>
                            </div>
                            <ListGroup variant="flush" className="courses-div overflow-auto w-100" style={{maxHeight: "400px"}}>
                                <ListGroup.Item className="course py-2 w-100 d-flex align-items-center justify-content-between" >
                                    <div className="course-image me-2">
                                        <img src={courseImg1} alt="course 1" />                                            
                                    </div>
                                    <div className="course-info d-flex flex-column align-items-start justify-content-center me-2">
                                        <p className='mb-1 text-start' style={{fontSize: "12px"}}>INSY 303 <span className='isTask' style={{fontSize: "10px", color: "#24242466"}}>• No Task</span></p>
                                        <p className='mb-0 text-start' style={{fontSize: "14px"}}>Artificial Intelligence</p>
                                    </div>
                                    <div className="course-progress " style={{width: "30%"}}>
                                        <ProgressBar striped variant="primary" now={50} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="course py-2 w-100 d-flex align-items-center justify-content-between" >
                                    <div className="course-image me-2">
                                        <img src={courseImg1} alt="course 1" />                                            
                                    </div>
                                    <div className="course-info d-flex flex-column align-items-start justify-content-center me-2">
                                        <p className='mb-1 text-start' style={{fontSize: "12px"}}>INSY 303 <span className='isTask' style={{fontSize: "10px", color: "#24242466"}}>• No Task</span></p>
                                        <p className='mb-0 text-start' style={{fontSize: "14px"}}>Artificial Intelligence</p>
                                    </div>
                                    <div className="course-progress " style={{width: "30%"}}>
                                        <ProgressBar striped variant="primary" now={50} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="course py-2 w-100 d-flex align-items-center justify-content-between" >
                                    <div className="course-image me-2">
                                        <img src={courseImg1} alt="course 1" />                                            
                                    </div>
                                    <div className="course-info d-flex flex-column align-items-start justify-content-center me-2">
                                        <p className='mb-1 text-start' style={{fontSize: "12px"}}>INSY 303 <span className='isTask' style={{fontSize: "10px", color: "#24242466"}}>• No Task</span></p>
                                        <p className='mb-0 text-start' style={{fontSize: "14px"}}>Artificial Intelligence</p>
                                    </div>
                                    <div className="course-progress " style={{width: "30%"}}>
                                        <ProgressBar striped variant="primary" now={50} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="course py-2 w-100 d-flex align-items-center justify-content-between" >
                                    <div className="course-image me-2">
                                        <img src={courseImg1} alt="course 1" />                                            
                                    </div>
                                    <div className="course-info d-flex flex-column align-items-start justify-content-center me-2">
                                        <p className='mb-1 text-start' style={{fontSize: "12px"}}>INSY 303 <span className='isTask' style={{fontSize: "10px", color: "#24242466"}}>• No Task</span></p>
                                        <p className='mb-0 text-start' style={{fontSize: "14px"}}>Artificial Intelligence</p>
                                    </div>
                                    <div className="course-progress " style={{width: "30%"}}>
                                        <ProgressBar striped variant="primary" now={50} />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className="sub-sec sub-sec-2 mb-4 w-100 d-flex flex-column justify-content-start">
                        <div className="sec-header mb-3 d-flex align-items-center justify-content-between">
                                <h4 className='sec-title'>Upcoming Tasks</h4>
                                <a href="#" className='text-decoration-none sec-link'>View all</a>
                            </div>
                            <div className="tasks-list">
                                <div className="px-2 py-3 mb-3 task d-flex align-items-center justify-content-center w-100 flex-column" style={{background: "#E6EEFE", textAlign: "left"}}>
                                    <div className="task-info d-flex justify-content-between w-100">
                                        <p className="course-name mb-0" style={{fontSize: "9px"}}>INSY 302 • Artificial Intelligence</p>
                                        <p className="due mb-0" style={{fontSize: "9px", color:"#E23232"}}>Due on Mon 30 Dec, 2023</p>
                                    </div>  
                                    <div className="task-title w-100 mb-0">
                                        <p className='mb-0' style={{color: "#0043C8", fontSize: "14px"}}>Assignment 6</p>    
                                    </div>  
                                    <div className="task-desc w-100 mb-0">
                                        <p className="desc mb-0" style={{fontSize: "12px"}}>{descText.length > 45 ? descText.slice(0, 46) + "..." : descText }</p>    
                                    </div>  
                                    <div className="task-extra w-100 mb-0 d-flex align-items-center justify-content-between mt-2">
                                        <div className="task-extra-sec-1">
                                            <i class="bi bi-link-45deg" ></i><a href="#" className='link-dark me-2' style={{fontSize: "10px"}}>2 Attachments</a>
                                            <i class="bi bi-award"></i><a href="#" className='link-dark' style={{fontSize: "10px"}}>1 badge on submission</a>
                                        </div>
                                        <Button variant="primary" size="sm" style={{fontSize:"12px"}}>
                                            Submit now
                                        </Button>{' '}
                                    </div>  
                                </div>
                                <div className="px-2 py-3 mb-3 task d-flex align-items-center justify-content-center w-100 flex-column" style={{background: "#E6EEFE", textAlign: "left"}}>
                                    <div className="task-info d-flex justify-content-between w-100">
                                        <p className="course-name mb-0" style={{fontSize: "9px"}}>INSY 302 • Artificial Intelligence</p>
                                        <p className="due mb-0" style={{fontSize: "9px", color:"#E23232"}}>Due on Mon 30 Dec, 2023</p>
                                    </div>  
                                    <div className="task-title w-100 mb-0">
                                        <p className='mb-0' style={{color: "#0043C8", fontSize: "14px"}}>Assignment 6</p>    
                                    </div>  
                                    <div className="task-desc w-100 mb-0">
                                        <p className="desc mb-0" style={{fontSize: "12px"}}>{descText.length > 45 ? descText.slice(0, 46) + "..." : descText }</p>    
                                    </div>  
                                    <div className="task-extra w-100 mb-0"></div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            

            
            
        </div>
    );
}

export default Dashboard;