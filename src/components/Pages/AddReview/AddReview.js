import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";


const AddReview = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
        const serviceData = {
            name: data.name,
            imageURL: imageURL,
            description: data.description,
        };
        const url = `https://localhost:5500/addReview`;

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceData),
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
        <div style={{ marginTop: "200px", marginLeft: "300px" }}>
            <Sidebar />
            <div className="form-row" style={{ padding: "5px", margin: "5px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="col">
                            <label for="inputName4">Service Name</label>
                            <input
                                className="form-control"
                                name="name"
                                defaultValue="Add new service"
                                ref={register}
                            />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="col">
                            <label for="inputPrice4">Description</label>
                            <input
                                className="form-control"
                                name="detail"
                                defaultValue="service detail"
                                ref={register}
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
                        className="btn btn-primary mt-4"
                        style={{ backGroundColor: "salmon" }}
                    />
                </form>
            </div>
        </div>
    );
};

export default AddReview;
