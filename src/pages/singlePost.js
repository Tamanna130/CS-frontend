import React, { useEffect, useState } from "react";
import ProfileImageDemo from "../templates/Base/images/ques3.png";
function SinglePost(props) {
  const [localDateTime, setlocalDateTime] = useState(props.post.date);
  console.log(localDateTime);
  useEffect(() => {
    const utcTimestamp = localDateTime;
    const utcDate = new Date(utcTimestamp);

    // Convert UTC to Bangladesh local time with timeZone option
    const localDate = utcDate.toLocaleString(undefined, {
      timeZone: "Asia/Dhaka",
    });

    setlocalDateTime(localDate);
  }, [localDateTime]);

  return (
    <div
      className="post-container"
      id="ques"
      style={{
        marginBottom: "20px",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        border: "2px solid #6F7173",
        borderRadius: "10px",
      }}
    >
      <div className="media my-3">
        <img
          style={{
            borderRadius: "50%",
            height: "54px",
            width: "54px",
            padding: "5px",
          }}
          src={ProfileImageDemo}
          alt="Profile"
        />

        <div className="media-body">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5
              className="mt-0"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <a
                className="text-dark"
                href="#postlink"
                style={{
                  color: "#343a40",
                  textDecoration: "none",
                }}
              >
                {props.post.title}
              </a>
            </h5>
            <div
              className="font-weight-bold my-0"
              style={{
                color: "#6c757d",
              }}
            >
              {" "}
              Asked by:{" "}
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "green"
                }}
              >
                {props.post.author}
              </div>{" "}
              at{" "}
              <div
                style={{
                  fontWeight: "normal",
                  color: "red",
                  display: "inline-block",
                  marginLeft: "5px",
                  fontSize: "14px",
                  fontStyle: "italic",
                }}
              >
              {localDateTime}</div>
            </div>
          </div>
          <p>{props.post.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
