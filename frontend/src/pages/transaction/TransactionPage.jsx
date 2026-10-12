import './TransactionPage.css'

export function TransactionPage() {
  return (
    <>
      <title>Transactions</title>

      <main>
        <div className="page-title">
          <h1>Transactions</h1>
          <p>Let's sprikle some richeness. ✨</p>
        </div>


        <div className="current-wallet">
          <div>
            <span>Bank Account</span>
            <button>Change Accounts</button>
          </div>

          <h1>฿4,356.00</h1>
          <p>INCOME EXPENSE</p>
          <p>+฿10.00 -฿644.00</p>
        </div>

        <div className="input-container">
          <select>
            <option>Income</option>
            <option>Outcome</option>
          </select>

          <label htmlFor="date">Date</label>
          <input id="" type="text" /> 

          <label htmlFor="category">Category</label>
          <input id="" type="text" /> 

          <label htmlFor="amount">Amount</label>
          <input id="" type="text" /> 

          <label htmlFor="">Note</label>
          <input type="text" />
        </div>

        <div className="current-mission">
          max spend amount from goal appear here
          as a progress-bar
          if spent over max, display pig dead and mission fail.try again next month/week etc
          goal can set as a level.
        </div>

        <div>
          Transactions History
          <select name="" id="">
            <option value="">day</option>
            <option value="">week</option>
            <option value="">month</option>
            <option value="">year</option>
            <option value="">all</option>
          </select>

          sorting, filters - Most spend, which account, date

          <ul>
            <p>Oct 15 Today</p>
            <li>🍔 Food & Drink       McDonald's     -฿249.00</li>
            <li>🚆 Transportation     MRT             -฿27.00</li>
          </ul>

          <ul>
            <p>Oct 14 Yesterday</p>
            <li>🍔 Food & Drink       McDonald's     -฿249.00</li>
            <li>🚆 Transportation     MRT             -฿27.00</li>
          </ul>

          <ul>
            <p>Oct 13 Tue</p>
            <li>🍔 Food & Drink       McDonald's     -฿249.00</li>
            <li>🚆 Transportation     MRT             -฿27.00</li>
          </ul>
        </div>

        piggy's trick! try to use bank account for transactions to prevent physical money loss🤯
      </main>
    </>
  );
}