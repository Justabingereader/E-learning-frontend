import React from 'react'
import { Button } from 'react-bootstrap'

export default function Classwork() {
  return (
    <div>
        <div className="header-btn d-flex justify-content-end mb-4">
            <Button className='py-3 px-2' style={{background: "#0043C8"}}>
                <i class="bi bi-file-bar-graph-fill"></i>
                View your Progress
            </Button>
        </div>
        <div className="classwork-container overflow-auto" style={{height: "40vh"}}>
            <div className="classwork px-4 py-3 mb-3 task d-flex align-items-center justify-content-center w-100 flex-column" style={{background: "#E6EEFE", textAlign: "left"}}>
                <div className="task-info d-flex justify-content-between w-100">
                    <p className="course-name mb-0" style={{fontSize: "9px"}}>INSY 302 • Artificial Intelligence</p>
                    <p className="due mb-0" style={{fontSize: "9px", color:"#E23232"}}>Due on Mon 30 Dec, 2023</p>
                </div>  
                <div className="task-title w-100 mb-0">
                    <p className='mb-0' style={{color: "#0043C8", fontSize: "14px"}}>Assignment 6</p>    
                </div>  
                <div className="task-desc w-100 mb-0">
                    <p className="desc mb-0" style={{fontSize: "12px"}}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet conse ctetur. Lorem ipsum dolor sit amet consectetur.</p>    
                </div>  
                <div className="task-extra w-100 mb-0 d-flex align-items-center justify-content-between mt-2">
                    <div className="task-extra-sec-1">
                        <i class="bi bi-link-45deg" ></i><a href="#" className='link-dark me-2' style={{fontSize: "10px"}}>2 Attachments</a>
                        <i class="bi bi-award"></i><a href="#" className='link-dark' style={{fontSize: "10px"}}>1 badge on submission</a>
                    </div>
                </div>  
            </div>
            <div className="classwork px-4 py-3 mb-3 task d-flex align-items-center justify-content-center w-100 flex-column" style={{background: "#E6EEFE", textAlign: "left"}}>
                <div className="task-info d-flex justify-content-between w-100">
                    <p className="course-name mb-0" style={{fontSize: "9px"}}>INSY 302 • Artificial Intelligence</p>
                    <p className="due mb-0" style={{fontSize: "9px", color:"#E23232"}}>Due on Mon 30 Dec, 2023</p>
                </div>  
                <div className="task-title w-100 mb-0">
                    <p className='mb-0' style={{color: "#0043C8", fontSize: "14px"}}>Assignment 6</p>    
                </div>  
                <div className="task-desc w-100 mb-0">
                    <p className="desc mb-0" style={{fontSize: "12px"}}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet conse ctetur. Lorem ipsum dolor sit amet consectetur.</p>    
                </div>  
                <div className="task-extra w-100 mb-0 d-flex align-items-center justify-content-between mt-2">
                    <div className="task-extra-sec-1">
                    </div>
                </div>  
            </div>
            <div className="classwork px-4 py-3 mb-3 task d-flex align-items-center justify-content-center w-100 flex-column" style={{background: "#E6EEFE", textAlign: "left"}}>
                <div className="task-info d-flex justify-content-between w-100">
                    <p className="course-name mb-0" style={{fontSize: "9px"}}>INSY 302 • Artificial Intelligence</p>
                    <p className="due mb-0" style={{fontSize: "9px", color:"#E23232"}}>Due on Mon 30 Dec, 2023</p>
                </div>  
                <div className="task-title w-100 mb-0">
                    <p className='mb-0' style={{color: "#0043C8", fontSize: "14px"}}>Assignment 6</p>    
                </div>  
                <div className="task-desc w-100 mb-0">
                    <p className="desc mb-0" style={{fontSize: "12px"}}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet conse ctetur. Lorem ipsum dolor sit amet consectetur.</p>    
                </div>  
                <div className="task-extra w-100 mb-0 d-flex align-items-center justify-content-between mt-2">
                    <div className="task-extra-sec-1">
                        
                        <i class="bi bi-play-circle" ></i><a href="#" className='link-dark me-2' style={{fontSize: "10px"}}>2 Videos</a>
                    </div>
                </div>  
            </div>
            <div className="classwork px-4 py-3 mb-3 task d-flex align-items-center justify-content-center w-100 flex-column" style={{background: "#E6EEFE", textAlign: "left"}}>
                <div className="task-info d-flex justify-content-between w-100">
                    <p className="course-name mb-0" style={{fontSize: "9px"}}>INSY 302 • Artificial Intelligence</p>
                    <p className="due mb-0" style={{fontSize: "9px", color:"#E23232"}}>Due on Mon 30 Dec, 2023</p>
                </div>  
                <div className="task-title w-100 mb-0">
                    <p className='mb-0' style={{color: "#0043C8", fontSize: "14px"}}>Assignment 6</p>    
                </div>  
                <div className="task-desc w-100 mb-0">
                    <p className="desc mb-0" style={{fontSize: "12px"}}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet conse ctetur. Lorem ipsum dolor sit amet consectetur.</p>    
                </div>  
                <div className="task-extra w-100 mb-0 d-flex align-items-center justify-content-between mt-2">
                    <div className="task-extra-sec-1">
                        <i class="bi bi-award"></i><a href="#" className='link-dark me-2' style={{fontSize: "10px"}}>1 badge on submission</a>
                        <i class="bi bi-play-circle" ></i><a href="#" className='link-dark me-2' style={{fontSize: "10px"}}>2 Videos</a>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}
