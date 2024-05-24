export default function Input({
  label,
  id,
  error,
  instructions,
  min,
  max,
  ...props
}) {
  function preventScroll() {
    // event.preventDefault();
    document.activeElement.blur();
  }
  return (
    <div className="control">
      <label className="control-label" htmlFor={id}>
        {label}
      </label>
      <p>{instructions}</p>
      <input
        onWheel={preventScroll}
        id={id}
        type="number"
        {...props}
        min={min}
        max={max}
        required
      />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
