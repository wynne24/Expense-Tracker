import './WalletForm.css'
import { X } from 'lucide-react'

export function WalletForm({ dialogRef }) {

  const closeWalletForm = () => {
    dialogRef.current.close();
  }

  return (
    <>
      <dialog ref={dialogRef}>
        <form method="dialog">
          <div className="dialog-header">
            <h1>Add a wallet</h1>
            <button type="button" onClick={closeWalletForm}>
              <X />
            </button>
          </div>

          <p>Name:</p>
          <input id="wallet-name" type="text" />
          <p>Start Amount:</p>
          <input id="wallet-amount" type="number" />

          <button type="submit">Save</button>
        </form>
      </dialog>
    </>
  );
}
