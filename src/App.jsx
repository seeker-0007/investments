import Results from "./components/Results";
import Input from "./components/Input";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_INPUT_DATA = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function App() {
  const [inputData, setInputData] = useState(INITIAL_INPUT_DATA);

  function changeInputData(inputIdentifier, newValue) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [inputIdentifier]: +newValue,
      };
    });
  }

  let annualData;

  if (
    inputData.initialInvestment &&
    inputData.expectedReturn &&
    inputData.duration
  ) {
    annualData = calculateInvestmentResults(inputData);
  }

  return (
    <>
      <Input changeInputData={changeInputData} inputData={inputData} />
      {annualData ? (
        <Results annualData={annualData} />
      ) : (
        <p className="center">Input data should be a positive number!</p>
      )}
    </>
  );
}
