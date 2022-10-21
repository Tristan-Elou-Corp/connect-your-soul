import React from "react";

function TextBox(props: any) {
    return (
      <div className="square__block">
        <div className="square__block__content">
          { props.img !== "none" &&
            <img src={props.img} alt="img" />
          }
          <h3 className="square__block__content__text">
            <span className="square__block__content__text__title">
              {props.title}
            </span>
          </h3>
          <p className="square__block__content__paragraph">
            <span className="square__block__content__paragraph__text">
              {props.text}
            </span>
          </p>
        </div>
      </div>
    )
}

export default TextBox;