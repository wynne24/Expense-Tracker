import './AccountPage.css'
import { AccountForm } from './AccountForm'
import { Plus } from 'lucide-react'
import { useRef } from 'react'

export function AccountPage() {
  const dialogRef = useRef(null);

  const addAccountForm = () => {
    dialogRef.current.showModal();
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

        <AccountForm dialogRef={dialogRef} />
      </main>
    </>
  );
}