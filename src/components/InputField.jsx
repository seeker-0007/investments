export default function InputField({
  changeInputData,
  inputData,
  inputName,
  labelText,
}) {
  return (
    <p>
      <label htmlFor={inputName}>{labelText}</label>
      <input
        type="number"
        id={inputName}
        value={inputData[inputName]}
        onChange={(event) => changeInputData(inputName, event.target.value)}
        min={0}
      />
    </p>
  );
}
