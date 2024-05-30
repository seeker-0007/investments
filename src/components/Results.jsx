export default function Results({ annualData }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((item) => (
          <tr key={`#${item.year}`}>
            <td>{item.year}</td>
            <td>{item.investmentValue}</td>
            <td>{item.interest}</td>
            <td>{item.totalInterest}</td>
            <td>{item.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
