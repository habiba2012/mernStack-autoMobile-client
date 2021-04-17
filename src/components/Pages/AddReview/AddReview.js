import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";


const AddReview = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
        const reviewData = {
            name: data.name,
            imageURL: imageURL,
            quote: data.quote,
            from: data.from
        };
        const url = 'http://localhost:5500/addReview';

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewData),
        }).then((res) => console.log("server side response", res));
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "2fa2571db7fbc42e905cfb97efc72ebc");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="row">
            <div className="col-md-5">
                <Sidebar />
            </div>
            <h4 className="title"></h4>
            <div className="col-md-7 mt-5 pt-5 ml-0">

                <div className="form-row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div className="col">
                                <label for="inputName4"> Name</label>
                                <input
                                    className="form-control"
                                    name="name" id="name"
                                    defaultValue="Your Name"
                                    {...register("name", { required: true })}

                                />
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label for="inputName4">Place</label>
                                <input
                                    className="form-control"
                                    name="from" id="from"
                                    defaultValue="Place"
                                    {...register("from", { required: true })}

                                />
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label for="inputPrice4">Review</label>
                                <input
                                    className="form-control"
                                    name="quote" id="quote"
                                    defaultValue="Review our service"
                                    {...register("quote", { required: true })}

                                />
                            </div>
                            <div className="col">
                                <i
                                    className="fas fa-cloud-upload-alt"
                                    style={{ color: "red", marginTop: "10px" }}
                                ></i>
                                <label for="inputImage4">Upload Image</label>
                                <input
                                    name="exampleRequired"
                                    type="file"
                                    onChange={handleImageUpload}
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Save"
                            className="btn btn-danger mt-4"

                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
