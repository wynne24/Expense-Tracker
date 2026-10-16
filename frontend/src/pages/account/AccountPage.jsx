import './AccountPage.css'
import { AccountForm } from './AccountForm'
import { AccountCard } from './AccountCard'
import { AccountHistory } from './AccountHistory'
import { Plus, Wallet, CreditCard, Landmark, Banknote, Bitcoin, CircleDollarSign, Coins } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const icons = [
  {id: "wallet", svg: Wallet},
  {id: "credit-card", svg: CreditCard},
  {id: "banknote", svg: Banknote},
  {id: "landmark", svg: Landmark},
  {id: "circle-dollar-sign", svg: CircleDollarSign},
  {id: "coins", svg: Coins},
  {id: "bitcoin", svg: Bitcoin},
]

export function AccountPage() {
  const [accounts, setAccounts] = useState([]);
  const dialogRef = useRef(null);

  useEffect(() => {
    console.log(accounts);
  }, [accounts]);

  const addAccountForm = () => {
    dialogRef.current.showModal();
  }

  const addAccount = (account) => {
    setAccounts(cur => [...cur, {
      ...account,
      id: crypto.randomUUID(),
      current: cur.length === 0,
    }]);
  }

  return (
    <>
      <title>Accounts</title>

      <main>
        <div className="account-page-header">
          <div className="page-title">
            <h1>Accounts</h1>
            <p>Wow! so richhh, can I have some of your's? 🤑</p>
            {/* <p>How much did you get today huh? 🤔</p> */}
          </div>

          <button className="add-account" onClick={addAccountForm}>
            <Plus />
          </button>
        </div>

        <AccountForm dialogRef={dialogRef} addAccount={addAccount} icons={icons} />

        <AccountCard accounts={accounts} icons={icons} />

        <AccountHistory accounts={accounts} />
      </main>
    </>
  );
}