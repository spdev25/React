import { useState } from "react";

function Cookies() {
  const [blueberry, setBlueberry] = useState(10);
  const [cookies, setCookies] = useState(10);
  const [cookiesSold, setCookiesSold] = useState(0);
  const [blueberrySold, setBlueberrySold] = useState(0);
  const [quantityCookies, setQuantityCookies] = useState(1);
  const [quantityBlueBerry, setQuantityBlueBerry] = useState(1);

  const blueberryMuffins = (e) => {
    const quantity = parseInt(
      e.target.parentNode.previousSibling.querySelector("input").value
    );
    if (blueberry <= 0) {
      return;
    }
    setBlueberry((prevBlueberry) => prevBlueberry - quantity);
    setBlueberrySold((prevBlueberrySold) => prevBlueberrySold + quantity);
  };

  const chocolateChip = (e) => {
    const quantity = parseInt(
      e.target.parentNode.previousSibling.querySelector("input").value
    );
    if (cookies <= 0) {
      return;
    }
    setCookies((prevCookies) => prevCookies - quantity);
    setCookiesSold((prevCookiesSold) => prevCookiesSold + quantity);
  };

  return (
    <div className="outer-background">
      <div className="card-container">
        <h1 className="heading">Salem Café</h1>
        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Stock Count</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>BlueBerry Muffins</td>
              <td>{blueberry}</td>
              <td>
                <input
                  type="number"
                  id="quantity-1"
                  min="1"
                  max={blueberry}
                  value={quantityBlueBerry}
                  onChange={(e) => {
                    setQuantityBlueBerry(e.target.value);
                  }}
                  placeholder="Enter >0"
                  required
                />
              </td>
              <td>
                <button className="button" onClick={blueberryMuffins}>
                  Buy
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Chocolate Chip Cookies</td>
              <td>{cookies}</td>
              <td>
                <input
                  type="number"
                  id="quantity-2"
                  min="1"
                  value={quantityCookies}
                  max={cookies}
                  onChange={(e) => {
                    setQuantityCookies(e.target.value);
                  }}
                  placeholder="Enter >0"
                  required
                />
              </td>
              <td>
                <button className="button" onClick={chocolateChip}>
                  Buy
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p>BlueBerry Muffins Sold: {blueberrySold}</p>
        <p>ChocolateChip Cookies Sold: {cookiesSold}</p>
        <p>
          Total items Sold:
          {blueberrySold + cookiesSold}
        </p>
      </div>
    </div>
  );
}

export default Cookies;
