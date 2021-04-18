import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";


const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const [admin, setAdmin] = useState(null)
    const onSubmit = (data) => {
        const adminData = {
            email: data.email,

        };
        const url = 'https://automobile-servicing.herokuapp.com/addAdmin';

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(adminData),
        }).then((res) => console.log("server side response", res));
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
                                <label for="email">Email</label>
                                <input
                                    className="form-control"
                                    name="email" id="email"
                                    defaultValue="your Email"
                                    {...register("email", { required: true })}

                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-danger mt-4"

                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;
