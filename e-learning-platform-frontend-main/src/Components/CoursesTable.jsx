import React from 'react'
import { Table, ProgressBar } from 'react-bootstrap';
import profileImg from "../images/profile-2.png";


export default function CoursesTable() {
  return (
    <Table borderless>
        <thead>
        <tr>
            <th>Lecturer</th>
            <th>Course</th>
            <th>Progress</th>
        </tr>
        </thead>
        <tbody className='' style={{maxHeight: "20vh"}}>
            <tr>
                <td className='text-start d-flex pe-0 justify-content-start '>
                    <div className='profile me-1' style={{width: "20px"}}>
                        <img src={profileImg} alt="lecturer" className='w-100'/>
                    </div>
                    Dr Adekunle Mide
                </td>
                <td className='text-start pe-0'>Human-centric Development</td>
                <td className='pe-0'>
                    <div className="course-progress ">
                        <ProgressBar striped variant="primary" now={50} />
                    </div>
                </td>
            </tr>
            <tr>
                <td className='text-start d-flex pe-0 justify-content-start '>
                    <div className='profile me-1' style={{width: "20px"}}>
                        <img src={profileImg} alt="lecturer" className='w-100'/>
                    </div>
                    Dr Adekunle Mide
                </td>
                <td className='text-start pe-0'>Human-centric Development</td>
                <td className='pe-0'>
                    <div className="course-progress ">
                        <ProgressBar striped variant="primary" now={50} />
                    </div>
                </td>
            </tr>
            <tr>
                <td className='text-start d-flex pe-0 justify-content-start '>
                    <div className='profile me-1' style={{width: "20px"}}>
                        <img src={profileImg} alt="lecturer" className='w-100'/>
                    </div>
                    Dr Adekunle Mide
                </td>
                <td className='text-start pe-0'>Human-centric Development</td>
                <td className='pe-0'>
                    <div className="course-progress ">
                        <ProgressBar striped variant="primary" now={50} />
                    </div>
                </td>
            </tr>
            <tr>
                <td className='text-start d-flex pe-0 justify-content-start '>
                    <div className='profile me-1' style={{width: "20px"}}>
                        <img src={profileImg} alt="lecturer" className='w-100'/>
                    </div>
                    Dr Adekunle Mide
                </td>
                <td className='text-start pe-0'>Human-centric Development</td>
                <td className='pe-0'>
                    <div className="course-progress ">
                        <ProgressBar striped variant="primary" now={50} />
                    </div>
                </td>
            </tr>
           
            
        
        </tbody>
    </Table>
  )
}
