import React from 'react';
import '../Courses/Courses.css';
import { Card } from 'react-bootstrap';
import merit from './merit.jpeg';
import neet from './need-based.webp';
import athletic from './athletic.jpeg';
import department from './department.jpeg';
import diversity from './diversity.png';
import community from './community.jpg';
import transfer from './transfer.jpeg';
import alumni from './alumni.jpeg';

const courses = [
  {
      id: 1,
      img: [merit],
      title: 'Merit-Based Scholarships',
  },
  {
      id: 2,
      img: [neet],
      title: 'Need-Based Scholarships',
  },
  {
      id: 3,
      img: [athletic],
      title: 'Athletic Scholarships',
  },
  {
      id: 4,
      img: [department],
      title: 'Departmental Scholarships',
  },
  {
      id: 5,
      img: [diversity],
      title: 'Diversity Scholarships',
  },
  {
      id: 6,
      img: [community],
      title: 'Community Service Scholarships',
  },
  {
      id: 7,
      img: [transfer],
      title: 'Transfer Student Scholarships',
  },
  {
      id: 8,
      img: [alumni],
      title: 'Alumni Scholarships',
  },
];

function Scholarship() {
  return (
    <div className='courses-page'>
        <header className='height-25'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Scholarship</h1>
                <p className='text-center w-75 mb-5'>The Scholarship page offers detailed information on financial aid opportunities, including merit-based and need-based scholarships. It provides eligibility criteria, application deadlines, and tips for applying. Students can explore both college-specific and external scholarships, with guidance available from our financial aid office to support their applications.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-white'>{course.title}</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Scholarship;