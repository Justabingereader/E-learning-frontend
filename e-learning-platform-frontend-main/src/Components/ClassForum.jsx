import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import profileImg from "../images/profile-3.png";
import "./ClassForum.css"

export default function ClassForum() {
  return (
    <div>
        <Navbar bg="light" expand="lg" className='so'>
            <Container fluid className='soooo' style={{justifyContent: "center"}}>
                <div className="profile">
                    <img src={profileImg} alt="" />
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='no-grow'>
                <Nav
                    className="me-2 my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                
                </Nav>
                <Form className="d-flex" style={{width: "70%"}}>
                    <Form.Control
                    type="text"
                    placeholder="What would you like to ask the class?"
                    className="me-2"
                    style={{width: "100%", height: "50px"}}
                    aria-label="Search"
                    />
                    <Button variant="primary" style={{width: "200px"}}>Ask a question</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="Questions overflow-auto" style={{height: "40vh"}}>
            <div className="question my-4 pe-3">

                <div className="question-head d-flex align-items-end justify-content-between">
                    <div className="profile-info d-flex align-items-center">
                        <div className="profile-pic mx-3">
                            <img src={profileImg} alt="profile" />
                        </div>
                        <div className="profile-info d-flex flex-column align-items-center ">
                            <p className="name fs-5 fw-semibold text-start text-primary w-100 mb-0">Dr Adekunle Mike</p>
                            <p className="position text-start w-100 mb-0">Lecturer</p>
                        </div>
                    </div>
                    <div className="timeling">
                        <p className='mb-0' style={{opacity: "0.5"}}>Posted Just Now</p>
                    </div>
                </div>
                <div className="text px-4 py-4">
                    <div className="text-title">
                        <p className='fw-semibold' style={{fontSize: "18px"}}>Why do people like Flaming hot cheetos?</p>
                    </div>
                    <div className="text-content">
                        <p className={{fontSize: "15px"}}>
                            I’ll be awarding merit badges to REASONABLE 
                            answers and rebuttals to this question ONLY. 
                            so start interacting. This applies to everyone 
                            in Computer Science A and Computer Science B 
                            respectively. Please note that the badges you 
                            obtain in this class generally affect your groups 
                            performance at the end of the semester. Dont play 
                            with it.
                            Kindly Check the course content page to find out 
                            what we shall be doing this coming week
                        </p>
                    </div>
                    <hr />
                    <div className="question-footer d-flex align-items-center justify-content-between">
                        <div className="info d-flex">
                            <p className="answers text-success mb-0 me-3 "><i class="bi bi-chat-left-text"></i>   Answers(100)</p>
                            <p className='merit text-primary mb-0 me-3'><i class="bi bi-award"></i>Merit Badge attached</p>
                        </div>
                        <Button>Answer</Button>
                    </div>
                </div>
                
            </div>
            <div className="question my-4 pe-3">

                <div className="question-head d-flex align-items-end justify-content-between">
                    <div className="profile-info d-flex align-items-center">
                        <div className="profile-pic mx-3">
                            <img src={profileImg} alt="profile" />
                        </div>
                        <div className="profile-info d-flex flex-column align-items-center ">
                            <p className="name fs-5 fw-semibold text-start text-primary w-100 mb-0">Dr Adekunle Mike</p>
                            <p className="position text-start w-100 mb-0">Lecturer</p>
                        </div>
                    </div>
                    <div className="timeling">
                        <p className='mb-0' style={{opacity: "0.5"}}>Posted Just Now</p>
                    </div>
                </div>
                <div className="text px-4 py-4">
                    <div className="text-title">
                        <p className='fw-semibold' style={{fontSize: "18px"}}>Why do people like Flaming hot cheetos?</p>
                    </div>
                    <div className="text-content">
                        <p className={{fontSize: "15px"}}>
                            I’ll be awarding merit badges to REASONABLE 
                            answers and rebuttals to this question ONLY. 
                            so start interacting. This applies to everyone 
                            in Computer Science A and Computer Science B 
                            respectively. Please note that the badges you 
                            obtain in this class generally affect your groups 
                            performance at the end of the semester. Dont play 
                            with it.
                            Kindly Check the course content page to find out 
                            what we shall be doing this coming week
                        </p>
                    </div>
                    <hr />
                    <div className="question-footer d-flex align-items-center justify-content-between">
                        <div className="info d-flex">
                            <p className="answers text-success mb-0 me-3 "><i class="bi bi-chat-left-text"></i>   Answers(100)</p>
                            <p className='merit text-primary mb-0 me-3'><i class="bi bi-award"></i>Merit Badge attached</p>
                        </div>
                        <Button>Answer</Button>
                    </div>
                </div>
                
            </div>
            <div className="question my-4 pe-3">

                <div className="question-head d-flex align-items-end justify-content-between">
                    <div className="profile-info d-flex align-items-center">
                        <div className="profile-pic mx-3">
                            <img src={profileImg} alt="profile" />
                        </div>
                        <div className="profile-info d-flex flex-column align-items-center ">
                            <p className="name fs-5 fw-semibold text-start text-primary w-100 mb-0">Dr Adekunle Mike</p>
                            <p className="position text-start w-100 mb-0">Lecturer</p>
                        </div>
                    </div>
                    <div className="timeling">
                        <p className='mb-0' style={{opacity: "0.5"}}>Posted Just Now</p>
                    </div>
                </div>
                <div className="text px-4 py-4">
                    <div className="text-title">
                        <p className='fw-semibold' style={{fontSize: "18px"}}>Why do people like Flaming hot cheetos?</p>
                    </div>
                    <div className="text-content">
                        <p className={{fontSize: "15px"}}>
                            I’ll be awarding merit badges to REASONABLE 
                            answers and rebuttals to this question ONLY. 
                            so start interacting. This applies to everyone 
                            in Computer Science A and Computer Science B 
                            respectively. Please note that the badges you 
                            obtain in this class generally affect your groups 
                            performance at the end of the semester. Dont play 
                            with it.
                            Kindly Check the course content page to find out 
                            what we shall be doing this coming week
                        </p>
                    </div>
                    <hr />
                    <div className="question-footer d-flex align-items-center justify-content-between">
                        <div className="info d-flex">
                            <p className="answers text-success mb-0 me-3 "><i class="bi bi-chat-left-text"></i>   Answers(100)</p>
                            <p className='merit text-primary mb-0 me-3'><i class="bi bi-award"></i>Merit Badge attached</p>
                        </div>
                        <Button>Answer</Button>
                    </div>
                </div>
                
            </div>
            <div className="question my-4 pe-3">

                <div className="question-head d-flex align-items-end justify-content-between">
                    <div className="profile-info d-flex align-items-center">
                        <div className="profile-pic mx-3">
                            <img src={profileImg} alt="profile" />
                        </div>
                        <div className="profile-info d-flex flex-column align-items-center ">
                            <p className="name fs-5 fw-semibold text-start text-primary w-100 mb-0">Dr Adekunle Mike</p>
                            <p className="position text-start w-100 mb-0">Lecturer</p>
                        </div>
                    </div>
                    <div className="timeling">
                        <p className='mb-0' style={{opacity: "0.5"}}>Posted Just Now</p>
                    </div>
                </div>
                <div className="text px-4 py-4">
                    <div className="text-title">
                        <p className='fw-semibold' style={{fontSize: "18px"}}>Why do people like Flaming hot cheetos?</p>
                    </div>
                    <div className="text-content">
                        <p className={{fontSize: "15px"}}>
                            I’ll be awarding merit badges to REASONABLE 
                            answers and rebuttals to this question ONLY. 
                            so start interacting. This applies to everyone 
                            in Computer Science A and Computer Science B 
                            respectively. Please note that the badges you 
                            obtain in this class generally affect your groups 
                            performance at the end of the semester. Dont play 
                            with it.
                            Kindly Check the course content page to find out 
                            what we shall be doing this coming week
                        </p>
                    </div>
                    <hr />
                    <div className="question-footer d-flex align-items-center justify-content-between">
                        <div className="info d-flex">
                            <p className="answers text-success mb-0 me-3 "><i class="bi bi-chat-left-text"></i>   Answers(100)</p>
                            <p className='merit text-primary mb-0 me-3'><i class="bi bi-award"></i>Merit Badge attached</p>
                        </div>
                        <Button>Answer</Button>
                    </div>
                </div>
                
            </div>
            
            
        </div>
    </div>
  )
}
