import "./styles.css";
import { InputNumber } from "antd";
import { useState } from "react";

export default function App() {
  const [questions, setQuestions] = useState("");
  const [mark, setMark] = useState("");
  const [neg, setNeg] = useState("");
  const [wrong, setWrong] = useState("");

  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult("");
    if (!questions || !mark || !neg || !wrong || questions < wrong) {
      setError("Please enter all values correctly");
      return;
    }

    const maxMarks = questions * mark;
    const removal = wrong * mark + wrong * mark * neg;

    console.log(removal);
    const result = maxMarks - removal;

    const answer = (
      <h3>
        You attempted a total questions of marks {maxMarks}
        <br /> There was {wrong} questions wrong that's why your final marks
        comes out to be {result}{" "}
      </h3>
    );

    setResult(answer);
  };

  const onQuestionChange = (value) => {
    setQuestions(value);
  };

  const onMarkChange = (value) => {
    setMark(value);
  };

  const onNegChange = (value) => {
    setNeg(value);
  };

  const onWrongChange = (value) => {
    setWrong(value);
  };

  const refresh = () => {
    setQuestions("");
    setMark("");
    setNeg("");
    setResult("");
    setWrong("");
    setError("");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: "auto",
      padding: "15px",
      gap: "10px",
      border: "1px solid #d4d9c3"
    },
    heading: {
      display: "grid",
      placeItems: "center"
    },
    inputContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      width: "100%"
    },
    label: {
      fontSize: "16px"
    },
    input: {
      width: "80%"
    },
    btn: {
      border: "1px solid",
      fontSize: "1rem",
      padding: "0.5em",
      borderRadius: "0.5em",
      background: "#45689e",
      color: "#fcefff",
      cursor: "pointer"
    },
    btnContainer: {
      display: "flex",
      gap: "10px"
    },
    result: {
      padding: "1em",
      background: "green",
      color: "white",
      borderRadius: "0.5em"
    },
    error: {
      padding: "0.5em",
      background: "red",
      color: "white",
      borderRadius: "0.5em",
      fontWeight: "bold"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}> Negative Marking Calculator </h1>

      <div style={styles.inputContainer}>
        <label style={styles.label}> Total number of questions Attempted</label>
        <InputNumber
          value={questions}
          min={1}
          style={styles.input}
          onChange={onQuestionChange}
        />
      </div>

      <div style={styles.inputContainer}>
        <label style={styles.label}> Mark for each question </label>
        <InputNumber
          value={mark}
          min={1}
          style={styles.input}
          onChange={onMarkChange}
        />
      </div>

      <div style={styles.inputContainer}>
        <label style={styles.label}> Negative Marking (0.33 or 0.25) </label>
        <InputNumber
          value={neg}
          min={0}
          max={1}
          style={styles.input}
          onChange={onNegChange}
        />
      </div>

      <div style={styles.inputContainer}>
        <label style={styles.label}> Total number of wrong questions </label>
        <InputNumber
          value={wrong}
          min={1}
          style={styles.input}
          onChange={onWrongChange}
        />
      </div>

      <div style={styles.btnContainer}>
        <button style={styles.btn} onClick={calculate}>
          Calculate
        </button>

        <button style={styles.btn} onClick={refresh}>
          Refresh
        </button>
      </div>

      {result && <div style={styles.result}>Result: {result}</div>}

      {error && <div style={styles.error}>{error}</div>}
    </div>
  );
}
