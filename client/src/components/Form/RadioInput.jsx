export default function RadioInput({ question, answers, name }) {
  return (
    <fieldset>
      <legend>{question}</legend>
      {answers.map((answ, i) => {
        return (
          <div key={i} className="control">
            <input
              type="radio"
              className="box"
              id={name + "-" + i}
              name={name}
              value={i}
              required
            />
            <label htmlFor={name + "-" + i}>{answ}</label>
          </div>
        );
      })}
    </fieldset>
  );
}
