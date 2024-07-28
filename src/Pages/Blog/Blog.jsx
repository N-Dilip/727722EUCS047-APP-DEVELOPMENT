import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../Utils/Images/blog1-img.jpg';
import Blog2Img from '../../Utils/Images/blog2-img.jpg';
import Blog3Img from '../../Utils/Images/blog3-img.jpg';
import Blog4Img from '../../Utils/Images/blog4-img.jpg';
import Blog5Img from '../../Utils/Images/blog5-img.jpg';
import Blog6Img from '../../Utils/Images/blog6-img.jpg';
import Blog7Img from '../../Utils/Images/blog7-img.jpg';
import Blog8Img from '../../Utils/Images/blog8-img.jpg';
import Blog9Img from '../../Utils/Images/blog9-img.jpg';

const blogs = [
  {
      id: 1,
      img: [Blog1Img],
      title: 'Academic Insights',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
      id: 2,
      img: [Blog2Img],
      title: 'Student Life',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
      id: 3,
      img: [Blog3Img],
      title: 'Events and Announcements',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
      id: 4,
      img: [Blog4Img],
      title: ' Alumni Success',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
      id: 5,
      img: [Blog5Img],
      title: ' Research and Innovation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
      id: 6,
      img: [Blog6Img],
      title: 'Spotlight on Faculty',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
      id: 7,
      img: [Blog7Img],
      title: ' Opportunities and Experiences',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
      id: 8,
      img: [Blog8Img],
      title: 'Clubs, Societies, and Activities',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
      id: 9,
      img: [Blog9Img],
      title: ' Navigating Your First Semester',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>Our university blogs are your go-to 
                    source for insights, updates, and stories about life at our institution. 
                    Here, you’ll find a wealth of information covering a range of topics from 
                    academic achievements and research breakthroughs to student life and campus 
                    events.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;