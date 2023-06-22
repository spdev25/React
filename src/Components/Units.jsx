function Units({ onUnitsChange }) {
  return (
    <>
      <h1 className="heading">Electricity Bill</h1>
      <label htmlFor="unit">Enter the Units Consumed: </label>
      <input
        id="unit"
        type="number"
        placeholder="Enter the Units Consumed: "
        onChange={(e) => {
          onUnitsChange(e.target.value);
        }}
      />
    </>
  );
}

export default Units;
