import Header from "../Header.jsx";
import RadioInput from "./RadioInput.jsx";
import Input from "./Input.jsx";
import questions from "../../util/questions.js";
import {
  isValidAge,
  isValidNumOfPeople,
  invalidCombination,
} from "../../util/validation.js";

import { useInput } from "../../hooks/useInput.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FormPage() {
  const navigate = useNavigate();
  const [combErr, setCombErr] = useState(false);
  const {
    value: ageValue,
    handleInputChange: handleAgeChange,
    handleInputBlur: handleAgeBlur,
    hasError: ageHasError,
    resetInput: resetAge,
  } = useInput("", isValidAge);
  const {
    value: numValue,
    handleInputChange: handleNumChange,
    handleInputBlur: handleNumBlur,
    hasError: numHasError,
    resetInput: resetNum,
  } = useInput("", isValidNumOfPeople);

  function handleSubmit(event) {
    event.preventDefault();
    //Перевірка на помилкові значення
    setCombErr(false);
    if (ageHasError) return;
    if (numHasError) return;
    if (invalidCombination(ageValue, numValue)) {
      setCombErr(true);
      return;
    }
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    //Перевірка на наявність усіх відповідей
    if (Object.keys(data).length < 7) return;

    //Пердаємо дані на бек

    sendUserData(data);

    //Перехід на іншу сторінку
    navigate("/result");
  }

  function handleReset() {
    resetAge();
    resetNum();
  }
  return (
    <>
      <Header text="Тест для вибору домашнього улюбленця" />
      <form onSubmit={handleSubmit}>
        <p className="recommendations">
          Заповніть форму для отримання рекомендацій щодо вибору майбутньої
          домашньої тваринки🐾
        </p>
        <hr />

        <Input
          label="Вік"
          instructions="від 10 до 90"
          id="age"
          name="age"
          onBlur={handleAgeBlur}
          onChange={handleAgeChange}
          value={ageValue}
          min={10}
          max={90}
          error={ageHasError && "Будь ласка, введіть коректний вік."}
        />

        <hr />

        <Input
          label="Кількість людей, що проживає разом з вами"
          instructions="від 0 (самотній) до 12"
          id="people"
          name="people"
          onBlur={handleNumBlur}
          onChange={handleNumChange}
          value={numValue}
          min={0}
          max={12}
          error={numHasError && "Будь ласка, введіть коректну кількість осіб."}
        />

        {questions.map((obj) => (
          <RadioInput
            key={obj.id}
            question={obj.question}
            answers={obj.answers}
            name={obj.name}
          />
        ))}
        <div className="control-error combination">
          {combErr && (
            <p>
              Ви вказали, що вам від 10 до 15 років і ви живете самі.
              <br />
              Для забезпечення належного догляду та відповідальності за
              улюбленця ви повинні мати опікуна
            </p>
          )}
        </div>

        <p className="form-actions">
          <button
            onClick={handleReset}
            type="reset"
            className="button button-flat"
          >
            Очистити
          </button>
          <button type="submit" className="button">
            Результат
          </button>
        </p>
      </form>
    </>
  );
}

export async function sendUserData(data) {
  const response = await fetch("http://localhost:5000/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return { message: "Can not load results" };
  }
}
