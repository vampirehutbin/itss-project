/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import * as ROUTES from "../../../constant/routes";
import { BackBtn } from "../../../components/backBtn";

export const Grammar = ({ doneLesson, dataLesson }) => {
  return (
    <>
      <div className="header">
        <BackBtn style={{ marginTop: "50px" }} dest={ROUTES.COURSE}>
          {" "}
          Back to course{" "}
        </BackBtn>
      </div>
      <div className="content container-fluid text-center">
        <h3 className="inline-block mb-3">{dataLesson?.title}</h3>
        <div className="grammar-box">
          <label className="grammar__title">Cách dùng:</label>
          <p className="grammar__content grammar__structure">{dataLesson?.structure}</p>
          <label className="grammar__title">Ý nghĩa:</label>
          <p className="grammar__content">{dataLesson?.mean}</p>
          <label className="grammar__title">Giải thích:</label>
          <p className="grammar__content">{dataLesson?.detail}</p>
          <label className="grammar__title">Ví dụ:</label>
          <p className="grammar__content">{dataLesson?.example}</p>
        </div>
      </div>
      <div className="done-bar fixed-bottom d-flex justify-content-center">
        <button
          onClick={doneLesson}
          className="btn btn-success my-3 px-5 rounded-pill"
        >
          Hoàn Thành
        </button>
      </div>
    </>
  );
};
