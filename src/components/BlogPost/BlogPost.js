import React from 'react';

const BlogPost = ({ blogPost }) => {
    const { title, description, author, authorImg, blogImg, date } = blogPost;
    return (
        <div className="card shadow-sm">
            <div className="card-header align-items-center">
                <div className="" style={{}}>
                    <img className="img-fluid card-img-top" src={blogImg} alt="" width="200px" />

                    <div className="d-flex mt-3 p-2">
                        <img className="mx-3 rounded-circle" src={authorImg} alt="" width="60" />

                        <h6 className="text-primary">{author},</h6>
                        <p className="m-0 ml-2">{date}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="blog-title">{title}</h5>
                    <p className="card-text text-secondary mt-4">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;