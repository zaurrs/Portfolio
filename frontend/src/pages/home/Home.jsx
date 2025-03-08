import React, { useEffect, useState } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addPortfolio,
  deletePortfolio,
  getPortfolio,
  updatePortfolio,
} from "../../redux/features/Portfolio";
import { useFormik } from "formik";
const Home = () => {
  const dispatch = useDispatch();
  const { portfolio } = useSelector((state) => state.portfolio);
  useEffect(() => {
    dispatch(getPortfolio());
  }, [dispatch]);
  console.log(portfolio);

  const [editItem, seteditItem] = useState(null);

  const { values, handleChange, handleSubmit, resetForm, setValues } =
    useFormik({
      initialValues: {
        section: "",
        text: "",
      },
      onSubmit: (values) => {
        if (editItem) {
          dispatch(updatePortfolio({ id: editItem._id, item: values }));
          seteditItem(null)
        } else {
          dispatch(addPortfolio(values));
        }
        resetForm();
      },
    });

  return (
    <div>
      {portfolio && portfolio.length > 0 ? (
        portfolio.map((item) => (
          <div key={item?._id}>
            <h1>{item?.section}</h1>
            <p>{item?.text}</p>
            <button
              onClick={() => {
                dispatch(deletePortfolio(item._id));
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                seteditItem(item)
                setValues({section: item.section, text: item.text})
              }}
            >
              edit
            </button>
          </div>
        ))
      ) : (
        <p>Loading ...</p>
      )}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="section"
          id="section"
          onChange={handleChange}
          value={values.section}
        />

        <input
          type="text"
          name="text"
          id="text"
          onChange={handleChange}
          value={values.text}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default Home;
