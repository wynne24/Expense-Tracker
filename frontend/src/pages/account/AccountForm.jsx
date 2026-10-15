import './AccountForm.css'
import { X, Wallet, CreditCard, Landmark, PiggyBank, Banknote, Bitcoin, CircleDollarSign, Coins } from 'lucide-react'
import { useState } from 'react'

const currencies = [
  { code: "THB", name: "Thai Baht", symbol: "฿" },
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
];

export function AccountForm({ dialogRef }) {
  const [currency, setCurrency] = useState("USD");
  const [name, setName] = useState('New Account');

  const closeAccountForm = () => {
    dialogRef.current.close();
  }

  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  }
  const getCurrencySymbol = (code) => {
    const symbol = currencies.find(c => c.code === code).symbol;
    return symbol;
  }

  const handleNameChange = (e) => {
    const v = e.target.value;
    v ? setName(v) : setName('New Account');
  }

  return (
    <>
      <dialog ref={dialogRef}>
        <form method="dialog">
          <div className="form-header">
            <p>{name}</p>
            <button type="button" onClick={closeAccountForm}>
              <X />
            </button>
          </div>

          <div className="icon-selector">
            <label htmlFor="piggy-bank">
              <PiggyBank />
              <input id="piggy-bank" type="radio" name="icon-pick" defaultChecked />
            </label>

            <label htmlFor="wallet">
              <Wallet />
              <input id="wallet" type="radio" name="icon-pick"/>
            </label>

            <label htmlFor="credit-card">
              <CreditCard />
              <input id="credit-card" type="radio" name="icon-pick"/>
            </label>

            <label htmlFor="banknote">
              <Banknote />
              <input id="banknote" type="radio" name="icon-pick"/>
            </label>

            <label htmlFor="landmark">
              <Landmark />
              <input id="landmark" type="radio" name="icon-pick"/>
            </label>

            <label htmlFor="circle-dollar-sign">
              <CircleDollarSign />
              <input id="circle-dollar-sign" type="radio" name="icon-pick"/>
            </label>

            <label htmlFor="coins">
              <Coins />
              <input id="coins" type="radio" name="icon-pick"/>
            </label>

            <label htmlFor="bitcoin">
              <Bitcoin />
              <input id="bitcoin" type="radio" name="icon-pick"/>
            </label>
          </div>

          <div className="input-container">
            <div className="name-input">
              <div className="text-input">
                <p>Account name</p>

                <input 
                  name="account-name"
                  id="account-name" 
                  type="text" 
                  placeholder="Name" 
                  autoComplete="off"
                  autoFocus
                  onChange={handleNameChange}
                />
              </div>

              <div className="select-input">
                <p>Type</p>

                <select>
                  <option value="">Cash</option>
                  <option value="">Bank Account</option>
                  <option value="">Credit Card</option>
                  <option value="">Investment Port</option>
                </select>
              </div>
            </div>

            <div className="start-amount-input">
              <div className="text-input">
                <p>Initial balance</p>

                <input type="number" placeholder={`${getCurrencySymbol(currency)}0.00`}/>
              </div>

              <div className="select-input">
                <p>Currency</p>
                
                <select value={currency} onChange={handleCurrency}>
                  {currencies.map((c) => (
                    <option key={c.code} value={c.code}>
                      {`${c.symbol} ${c.code} ${c.name}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="text-input">
            <p>Description</p>
            <input type="text"/>
          </div>

          <button className="submit-form-btn" type="submit">Create</button>
        </form>
      </dialog>
    </>
  );
}
