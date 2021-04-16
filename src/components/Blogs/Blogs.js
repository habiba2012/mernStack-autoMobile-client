import React from 'react';
import Jhony from '../../assets/images/mechanicImg3.jpg';
import blogImg from '../../assets/images/blogImg1.jpg';
import './Blogs.css'
import BlogPost from '../BlogPost/BlogPost';


const blogData = [
    {
        title: "20th Car looking Smarter",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Jhony Rick',
        authorImg: Jhony,
        blogImg: blogImg,
        date: '23 May 2020'
    },
    {
        title: "Repaired Unlocking Mystery",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Sam Harry',
        authorImg: Jhony,
        blogImg: blogImg,
        date: '25 June 2020'
    },
    {
        title: "Protecting Your Auto repair",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Jhon Anderson',
        authorImg: Jhony,
        blogImg: blogImg,
        date: '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blogPost={blog} key={blog.title}></BlogPost>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Blogs;