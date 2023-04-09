import React from 'react'

export default function CourseOverview() {
  return (
    <div className="container course-details d-flex flex-column align-items-start justify-content-start">
        <p className="title fw-semibold" style={{fontSize: "22px"}}>Course Details</p>
        <p className="text-break">
        Lorem ipsum dolor sit amet consectetur. 
        Viverra sed nec sit nibh tellus. Lacus 
        tellus nisl nunc vestibulum velit tristique 
        elit. Nulla in eget diam id pharetra. At 
        elementum sociis purus vitae sit dolor pharetra 
        pharetra. A vestibulum nullam volutpat viverra 
        augue id. Velit morbi tortor porta ac duis. Id 
        donec enim tincidunt dictum nisi parturient 
        tincidunt malesuada arcu. Sagittis nulla penatibus 
        turpis vel sit vitae augue dictum sollicitudin. 
        Rhoncus cursus consequat habitasse volutpat vitae 
        tellus feugiat nibh. Nibh nisi arcu nisl ac faucibus. 
        </p>
        <div className="extra-details">
            <p className="title fw-semibold" style={{fontSize: "22px"}}>Class Details</p>
            <div className="class-period d-flex align-items-center">
                <div className="hours d-flex align-items-center me-4">
                    <span className="icon px-2 py-1 me-2" style={{border: "1px solid #242424", borderRadius: "100px"}}>
                        <i class="bi bi-clock" style={{fontSize: "24px", color: "#242424"}}></i>
                    </span>
                    <p className='mb-0'>4 hours per week</p>
                </div>
                <div className="venue d-flex align-items-center me-4">
                    <span className="icon px-2 py-1 me-2" style={{border: "1px solid #242424", borderRadius: "100px"}}>
                        <i class="bi bi-clock" style={{fontSize: "24px", color: "#242424"}}></i>
                    </span>
                    <p className='mb-0'>Zoom-Online</p>
                </div>
                <div className="occurence d-flex align-items-center me-4">
                    <span className="icon px-2 py-1 me-2" style={{border: "1px solid #242424", borderRadius: "100px"}}>
                        <i class="bi bi-clock" style={{fontSize: "24px", color: "#242424"}}></i>
                    </span>
                    <p className='mb-0 lh-1'>Mondays - 8:00am - 10am <br /> Fridays - 10am - 12pm</p>
                </div>
            </div>
        </div>
    </div>
  )
}
