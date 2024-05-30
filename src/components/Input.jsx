import InputField from "./InputField";

export default function Input(props) {
  return (
    <form action="" id="user-input">
      <div className="input-group">
        <InputField
          {...props}
          inputName="initialInvestment"
          labelText="INITIAL INVESTMENT"
        />
        <InputField
          {...props}
          inputName="annualInvestment"
          labelText="ANNUAL INVESTMENT"
        />
      </div>
      <div className="input-group">
        <InputField
          {...props}
          inputName="expectedReturn"
          labelText="EXPECTED RETURN"
        />
        <InputField {...props} inputName="duration" labelText="DURATION" />
      </div>
    </form>
  );
}
