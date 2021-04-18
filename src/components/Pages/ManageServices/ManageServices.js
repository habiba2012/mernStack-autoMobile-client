import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const ManageService = () => {
    const [manageBooking, setManageBooking] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch("https://automobile-servicing.herokuapp.com/booking")
            .then((res) => res.json())
            .then((data) => setManageBooking(data));
    }, []);

    const deleteService = (id) => {
        // console.log(event.target.parentNode)
        fetch(`https://automobile-servicing.herokuapp.com/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                /*  if (result) {
                           event.target.parentNode.style.display = 'none';
                       } */
                console.log("deleted successfully");
            });
    };
    return (
        <div>
            <Sidebar />
            <section
                className="container align-items-center pt-5 col-md-6"
                style={{ marginLeft: "300px" }}
            >
                <div className="row">
                    <div className="col-sm-9">
                        <h4 className="mb-5">Manage Product</h4>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Service </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manageBooking.map((book) => (
                                    <tr key={book._id}>
                                        <td>{book.name}</td>
                                        <td>{book.service}</td>
                                        <td>
                                            <FontAwesomeIcon
                                                icon={faPencilAlt}
                                                style={{ color: "green" }}
                                            />
                                            <span
                                                style={{
                                                    borderLeft: "1px solid gray",
                                                    height: "15px",
                                                    padding: "5px",
                                                }}
                                            ></span>

                                            <FontAwesomeIcon
                                                icon={faTrashAlt}
                                                onClick={() => deleteService(book._id)}
                                                style={{ color: "red", cursor: "pointer" }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageService;
