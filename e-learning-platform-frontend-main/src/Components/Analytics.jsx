import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import searchIcon from "../images/search.svg";
import img1 from "../images/a-pic-1.png";
import img2 from "../images/a-pic-2.png";
import img3 from "../images/a-pic-3.png";
import img4 from "../images/a-pic-4.png";
import img5 from "../images/a-pic-5.png";
import img6 from "../images/a-pic-6.png";
import img7 from "../images/a-pic-7.png";
import img8 from "../images/a-pic-8.png";
import img9 from "../images/a-pic-9.png";
import img10 from "../images/a-pic-10.png";
import img11 from "../images/a-pic-11.png";


const SearchBarStyle = {
    background: "white",
    outline: "none",
    border: "1px solid #242424",
    borderRadius: "10px",
    // width: "55%"
}

function Analytics(props) {
    return (
        <div className='d-flex'>
            <Sidebar />
            <Container className='w-100 px-0' fluid>
                <NavBar className="w-100"/>
                <div className='px-3 py-4 d-flex align-items-start justify-content-center'>
                    <div className='col-lg-4'>
                        <img src={img1} alt="analytics" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={img2} alt="analytics" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={img3} alt="analytics" />
                    </div>
                </div>
                <div className='px-3 py-4 d-flex align-items-start justify-content-center'>
                    <div className='col-lg-4'>
                        <img src={img4} alt="analytics" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={img5} alt="analytics" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={img6} alt="analytics" />
                    </div>
                </div>
                <div className="mid-sec d-flex align-items-center justify-content-start flex-column">
                    <div className="title">
                        <h3 className='text-center'>Course Analysis</h3>
                        <p className='text-center'>Discover your own progress on each course youre taking.</p>
                    </div>
                    <div className="search" style={{width: "55%"}}>
                    <Form className="d-flex" style={SearchBarStyle}>
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        style={{border: "0"}}
                        />
                        <Button variant="">
                            <img src={searchIcon} alt="search"/>
                        </Button>
                    </Form>
                    </div>
                    <div className="more-info d-flex flex-column align-items-center justify-content-center px-4 py-3 my-4" style={{background: '#D2E1FF'}}>
                        <div className="title">
                            <h3 className='text-center text-primary' style={{fontSize: "22px"}}>Artificial Intelligence</h3>
                        </div>
                        <div className="class-info  d-flex align-items-center">
                            <div className="learners mx-3">
                                <p className='mb-1' style={{fontSize: "18px", color: "#1A1A1ACC"}}>Course code</p>
                                <p className='fw-semibold' style={{fontSize: "20px"}}>INSY 305</p>
                            </div>
                            <div className="vr" style={{alignSelf: "center", minHeight: "70px"}}></div>
                            <div className="group mx-3">
                                <p className='mb-1' style={{fontSize: "18px", color: "#1A1A1ACC"}}>Lecturer name</p>
                                <p className='fw-semibold' style={{fontSize: "20px"}}>Dr Adekunle Mike</p>
                            </div>
                            <div className="vr" style={{alignSelf: "center", minHeight: "70px"}}></div>
                            <div className="board mx-3">
                                <p className='mb-1' style={{fontSize: "18px", color: "#1A1A1ACC"}}>Class Number</p>
                                <p className='fw-semibold' style={{fontSize: "20px"}}>#30</p>
                            </div>
                            <div className="vr" style={{alignSelf: "center", minHeight: "70px"}}></div>
                            <div className="board mx-3">
                                <p className='mb-1' style={{fontSize: "18px", color: "#1A1A1ACC"}}>Small group no</p>
                                <p className='fw-semibold' style={{fontSize: "20px"}}>Group 5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-3 py-4 d-flex align-items-start justify-content-center'>
                    <div className='me-1'>
                        <img src={img7} alt="analytics" />
                    </div>
                    <div className='me-1'>
                        <img src={img8} alt="analytics" />
                    </div>
                    <div className='me-1'>
                        <img src={img9} alt="analytics" />
                    </div>
                </div>
                <div className='px-3 py-4 d-flex align-items-start justify-content-center'>
                    <div className='me-1'>
                        <img src={img10} alt="analytics" />
                    </div>
                    <div className='me-1'>
                        <img src={img11} alt="analytics  " />
                    </div>
                </div>
            </Container>
            
        </div>
    );
}

export default Analytics;