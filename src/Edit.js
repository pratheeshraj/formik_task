import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
const Edit = () => {
  const { id } = useParams();
  const [datas, setdatas] = useState(null);
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      country: "",
      state: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.Name) {
        error.Name = "please enter your Name";
      }
      if (
        values.Name &&
        (values.Name.length <= 3 || values.Name.length >= 15)
      ) {
        error.Name = "please enter you name between 4 to 15";
      }
      if (!values.email) {
        error.email = "please enter your Email";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "please enter valid your Email";
      }
      if (!values.country) {
        error.country = "please enter your country";
      }
      if (!values.state) {
        error.state = "please enter your state";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const data = await axios.put(
          `https://634d8895f5d2cc648ea89ba8.mockapi.io/student/${datas}`,
          values
        );
        console.log(data.data);
        formik.resetForm();
        alert("edit is success");
      } catch (error) {
        alert("something error");
      }
    },
  });

  useEffect(() => {
    try {
      const studentdata = async () => {
        const user = await axios.get(
          `https://634d8895f5d2cc648ea89ba8.mockapi.io/student/${id}`
        );
        setdatas(id);
        formik.setValues(user.data);
        console.log(user.data);
      };
      studentdata();
    } catch (error) {}
  }, []);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        width: "600px",
        height: "600px",
        background: "wheat",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="row" style={{ flexFlow: "column", display: "flex" }}>
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              flexFlow: "column",
            }}
          >
            <div style={{ fontSize: "20px", marginTop: "20px" }}>Name:</div>
            <input
              type="text"
              style={{ borderRadius: "10px", margin: "20px", width: "360px" }}
              name="Name"
              value={formik.values.Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${formik.errors.Name ? "input" : ""}${
                formik.touched.Name && !formik.errors.Name ? "input1" : ""
              }`}
            />
            {formik.errors.Name ? (
              <div style={{ color: "red" }}>{formik.errors.Name}</div>
            ) : null}
          </div>

          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              flexFlow: "column",
            }}
          >
            <div style={{ fontSize: "20px", marginTop: "20px" }}>Email:</div>
            <input
              type="text"
              style={{ borderRadius: "10px", margin: "20px", width: "360px" }}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${formik.errors.email ? "input" : ""}${
                formik.touched.email && !formik.errors.email ? "input1" : ""
              }`}
            />
            {formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="row" style={{ flexFlow: "column", display: "flex" }}>
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              flexFlow: "column",
            }}
          >
            <div style={{ fontSize: "20px", marginTop: "20px" }}>Country:</div>
            <select
              type="text"
              style={{ borderRadius: "10px", margin: "20px", width: "360px" }}
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
            >
              <option>--select your country--</option>
              <option>india</option>
              <option>united state</option>
              <option>china</option>
            </select>
            {formik.errors.country ? (
              <div style={{ color: "red" }}>{formik.errors.country}</div>
            ) : null}
          </div>
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              flexFlow: "column",
            }}
          >
            <div style={{ fontSize: "20px", marginTop: "20px" }}>State:</div>
            <select
              type="text"
              style={{ borderRadius: "10px", margin: "20px", width: "360px" }}
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
            >
              <option>--select your country--</option>
              <option>tamil nadu</option>
              <option>kerala</option>
              <option>karnataka</option>
            </select>
            {formik.errors.state ? (
              <div style={{ color: "red" }}>{formik.errors.state}</div>
            ) : null}
          </div>
        </div>
        <div className="col-lg-6">
          <button type="submit" className="btn btn-primary">
            update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
