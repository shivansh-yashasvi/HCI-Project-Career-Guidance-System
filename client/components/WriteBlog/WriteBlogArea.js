import React, { useState } from "react";

import styles from "./WriteBlogArea.module.css";
import { Button, Form, InputGroup } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { blogActions } from "../../redux/features/blogSlice";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";
import axios from "axios";
import dynamic from "next/dynamic";

const AudioAnalyser = dynamic(import("react-audio-analyser"), { ssr: false });

const WriteBlogArea = () => {
  const [value, setValue] = React.useState("");
  const [recordState, setRecordState] = useState("");
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");

  const { user } = useAuth();

  const router = useRouter();

  const [blogTitle, setBlogTitle] = React.useState("");

  const dispatch = useDispatch();
  const date = new Date();

  const handleAddPost = () => {
    const blogData = {
      img: "https://i.ibb.co/Ns6YBH2/blog-big-5.jpg",
      title: blogTitle,
      content: result,
      _id: Date.now().toLocaleString(),
      blog_author: user?.dispalyName,
      date: date.toDateString(),
    };

    dispatch(blogActions.createCustomBlog(blogData));

    router.push("/blog");
  };
  const audioProps = {
    audioType: "audio/wav",
    // audioOptions: {sampleRate: 30000}, // 设置输出音频采样率
    status,
    audioSrc: recordState,
    timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
    startCallback: (e) => {
      console.log("succ start", e);
    },
    pauseCallback: (e) => {
      console.log("succ pause", e);
    },
    stopCallback: (e) => {
      setRecordState(window.URL.createObjectURL(e));
      console.log("succ stop", e);

      const formData = new FormData();
      formData.append("audio", e, "recording.wav");
      axios
        .post("http://localhost:8000/transcribe", formData)
        .then((res) => {
          console.log(res.data.transcription);
          setResult(res.data?.transcription);
        })
        .catch((err) => console.log(err));
    },
    onRecordCallback: (e) => {
      console.log("recording", e);
      console.log(window.URL.createObjectURL(e));
    },
    errorCallback: (err) => {
      console.log("error", err);
    },
  };

  return (
    <div
      className={`${styles.container} d-flex align-items-center w-100 justify-content-center p-3`}
    >
      <div className="d-flex align-items-center flex-column">
        <Form.Control
          onChange={(e) => setBlogTitle(e.target.value)}
          placeholder="Blog Title"
          className=""
          type="text"
        />

        <div className="m-2 d-flex gap-2">
          <div style={{ display: "none" }} className="display-none">
            <AudioAnalyser {...audioProps}> </AudioAnalyser>
          </div>

          <Button onClick={() => setStatus("recording")}>
            {status === "recording" ? status : "Start Recording"}
          </Button>
          {status === "recording" && (
            <Button onClick={() => setStatus("inactive")}>
              Stop Recording
            </Button>
          )}
        </div>

        <Form.Control
          placeholder="Write your blog here...."
          className="w-100 d-block mt-4"
          cols={150}
          as="textarea"
          rows={10}
          onChange={(e) => setResult(e.target.value)}
          value={result.length ? result : value}
        />

        <Button onClick={handleAddPost} className="mt-2 d-block w-100">
          Post
        </Button>
      </div>
    </div>
  );
};

export default WriteBlogArea;
