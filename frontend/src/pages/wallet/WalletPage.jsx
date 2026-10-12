import './WalletPage.css'
import { WalletForm } from './WalletForm'
import { Plus } from 'lucide-react'
import { useRef } from 'react'

export function WalletPage() {
  const dialogRef = useRef(null);

  const addWalletForm = () => {
    dialogRef.current.showModal();
  }

  return (
    <>
      <title>Wallet</title>

      <main>
        <div className="wallet-page-header">
          <div className="page-title">
            <h1>Wallet</h1>
            <p>Wow! so richhh, can I have some of your's? 🤑</p>
            {/* <p>How much did you get today huh? 🤔</p> */}
          </div>

          <button className="add-wallet" onClick={addWalletForm}>
            <Plus />
          </button>

        </div>

        <WalletForm dialogRef={dialogRef}/>
      </main>
    </>
  );
}