import { useState } from "react";
import Housing from "./Housing";

const Salary = () => {
  const [salary, setSalary] = useState(0);
  const [moneySavedDec, setMoneySavedDec] = useState(0);
  const [houseCost, setHouseCost] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [showHousing, setShowHousing] = useState(false);
  return (
    <div className="salary-container">
      <div className="salary-card">
        <h1 className="heading">Month Calculator</h1>
        <label htmlFor="annualSalary">Enter your Annual Salary:</label>
        <input
          className="salary-input"
          id="annualSalary"
          type="number"
          placeholder="Enter your Annual Salary"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
        <br />
        <label htmlFor="moneySaved">
          Enter the Percentage of Amount to be saved:
        </label>
        <input
          className="salary-input"
          id="moneySaved"
          type="number"
          step="0.01"
          min="0"
          placeholder="(in decimals)"
          onChange={(e) => {
            setMoneySavedDec(e.target.value);
          }}
        />
        <br />
        <label htmlFor="houseCost">Enter the Total Cost of the House:</label>
        <input
          className="salary-input"
          id="houseCost"
          type="number"
          placeholder="Total cost of the house"
          onChange={(e) => {
            setHouseCost(e.target.value);
          }}
        />
        <br />
        <label htmlFor="downPayment">
          Enter the Percentage of Downpayment:{" "}
        </label>
        <input
          className="salary-input"
          id="downPayment"
          type="number"
          placeholder="(in decimals)"
          step="0.01"
          min="0"
          onChange={(e) => {
            setDownPayment(e.target.value);
          }}
        />
        <br />
        <button
          className="salary-button"
          onClick={() => {
            setShowHousing(true);
          }}
        >
          Calculate the Number of Months
        </button>
        {showHousing && (
          <Housing
            salary={salary}
            moneySavedDec={moneySavedDec}
            houseCost={houseCost}
            downPayment={downPayment}
          />
        )}
      </div>
    </div>
  );
};

export default Salary;
