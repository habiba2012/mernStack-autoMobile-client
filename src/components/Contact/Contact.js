import React from 'react';
// import './Contact.css';
const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <h2 className="text-center">Contact Form</h2>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 pb-5">
                        <form action="mail.php" method="post">
                            <div className="card shadow rounded-0" style={{ backgroundColor: "#2f3967" }}>
                                <div className="card-header p-0 " >
                                    <div className=" text-white text-center py-2">
                                        <h3><i className="fa fa-envelope"></i> Contact us</h3>
                                        <p className="m-0">We will gladly help you</p>
                                    </div>
                                </div>
                                <div className="card-body p-3">

                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                            </div>
                                            <input type="text" className="form-control" name="number" placeholder="Your name" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                            </div>
                                            <input type="email" className="form-control" name="email" placeholder="example@gmail.com" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                            </div>
                                            <textarea className="form-control" placeholder="Messages" required></textarea>
                                        </div>
                                    </div>

                                    <div className="text-center ">
                                        <input type="submit" value="Submit" className="btn btn-default btn-block rounded-0 py-2 text-white" style={{ backgroundColor: "#2f3967" }} />
                                    </div>
                                </div>

                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
