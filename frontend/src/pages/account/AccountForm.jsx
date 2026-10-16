import './AccountForm.css'
import { X, PiggyBank } from 'lucide-react'
import { useState } from 'react'

const currencies = [
  { code: "THB", name: "Thai Baht", symbol: "฿" },
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
];

export function AccountForm({ dialogRef, addAccount, icons }) {
  const
    [account, setAccount] = useState({
      icon: "piggy-bank",
      name: "New Account",
      type: "cash",
      currency: "$",
      description: "",
      current: false,
      income: 0,
      expense: 0,
    });

  const closeAccountForm = () => {
    dialogRef.current.close();
  }

  const handleCurrency = (e) => {
    setAccount(cur => ({...cur,
      currency: e.target.value
    }));
  }

  const handleNameChange = (e) => {
    const v = e.target.value;
    v ? setAccount(cur => ({...cur, name: v})) : 
    setAccount(cur => ({...cur, name: 'New Account'}));
  }

  const handleIconChange = (e) => {
    setAccount(cur => ({...cur, icon: e.target.id}));
  }

  return (
    <>
      <dialog ref={dialogRef}>
        <form 
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            addAccount(account);
            closeAccountForm();
            e.currentTarget.reset();
          }}
        >
          <div className="form-header">
            <p>{account.name}</p>
            <button type="button" onClick={closeAccountForm}>
              <X />
            </button>
          </div>

          <div className="icon-selector">
            <label htmlFor="piggy-bank">
              <PiggyBank />
              <input id="piggy-bank" type="radio" name="icon-pick" 
                onChange={handleIconChange}
                defaultChecked
              />
            </label>

            {icons.map((icon) => {
              return (
                <label key={icon.id} htmlFor={icon.id}>
                  <icon.svg />
                  <input id={icon.id} type="radio" name="icon-pick" 
                    onChange={handleIconChange}
                  />
                </label>
              );
            })}
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

                <select value={account.type} onChange={(e) => {
                  setAccount(cur => ({...cur, type: e.target.value}))}
                }>
                  <option value="cash">Cash</option>
                  <option value="bank-account">Bank Account</option>
                  <option value="credit-card">Credit Card</option>
                  <option value="investment-port">Investment Port</option>
                </select>
              </div>
            </div>

            <div className="start-amount-input">
              <div className="text-input">
                <p>Initial balance</p>

                <input 
                  type="number" 
                  placeholder={`${account.currency}0.00`}
                  onChange={(e) => {
                    setAccount(cur => ({...cur, income: Number(e.target.value)}))
                  }}
                />
              </div>

              <div className="select-input">
                <p>Currency</p>
                
                <select value={account.currency} onChange={handleCurrency}>
                  {currencies.map((c) => (
                    <option key={c.code} value={c.symbol}>
                      {`${c.symbol} ${c.code} ${c.name}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="text-input">
            <p>Description</p>
            <input 
              type="text"
              onChange={(e) => {
                setAccount(cur => ({...cur, description: e.target.value}))
              }}
            />
          </div>

          <button 
            className="submit-form-btn" 
            type="submit"
          >Create</button>
        </form>
      </dialog>
    </>
  );
}
