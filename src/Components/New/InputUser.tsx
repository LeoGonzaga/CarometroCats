import React, { useState, useMemo } from "react";
import "./style.css";
import camera from "./camera.svg";
import { useHistory } from "react-router-dom";
import BackButton from "../ActionButton/BackButton";

export default function InputUser() {
  let history = useHistory();
  let [thumbnail, setThumbnail] = useState<any>(null);
  let [student, setStudent] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Let's stop this event.

    const data = new FormData();

    data.append("thumbnail", thumbnail);
    data.append("student", student);
    history.push("/");
  };

  const preview = useMemo(() => {
    let element = null;
    for (const key in thumbnail) {
      if (thumbnail.hasOwnProperty(key)) {
        element = thumbnail[key];
        console.log(element);
      }
    }
    return element ? URL.createObjectURL(element) : null;
  }, [thumbnail]);

  return (
    <>
      <BackButton />
      <form onSubmit={e => handleSubmit(e)} className="App-header">
        <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
          <input type="file" onChange={e => setThumbnail(e.target.files)} />
          {thumbnail ? null : <img src={camera} />}
        </label>

        <div className="column">
          <input
            id="company"
            placeholder="Nome do aluno"
            value={student}
            onChange={e => {
              console.log(e.target.value);

              setStudent(e.target.value);
            }}
          />

          <button className="btn">CADASTRAR</button>
        </div>
      </form>
    </>
  );
}
