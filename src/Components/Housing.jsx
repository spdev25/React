function Housing({ salary, moneySavedDec, houseCost, downPayment }) {
  const moneySaved = parseFloat(moneySavedDec);
  const salaryAnu = parseFloat(salary);
  const monthlySaved = (moneySaved * (salaryAnu / 12)).toFixed(0);
  const houseCo = parseFloat(houseCost);
  const downPaymentCost = houseCo * parseFloat(downPayment);
  const months = (downPaymentCost / monthlySaved).toFixed(0);
  const years = (months / 12).toFixed(1);
  return (
    <div className="housing-container">
      <div className="housing-card">
        <div className="housing-box">
          <p>
            Annual Salary: <span className="amount">{salary}</span>
          </p>
          <p>
            Monthly Salary:{" "}
            <span className="amount">{(salaryAnu / 12).toFixed(0)}</span>
          </p>
          <p>
            Money Saved (Every Month):{" "}
            <span className="amount">{monthlySaved}</span>
          </p>
          <p>
            Cost of the House: <span className="amount">{houseCo}</span>
          </p>
          <p>
            Down Payment (%): <span className="amount">{downPayment}</span>
          </p>
          <p>
            Down Payment (in Rs.):{" "}
            <span className="amount">{downPaymentCost}</span>
          </p>
        </div>
        <div className="housing-result">
          <p>Month Required to Pay the Downpayment: {months}</p>
          <p>Years Required to Pay the Downpayment: {years}</p>
        </div>
      </div>
    </div>
  );
}

export default Housing;
