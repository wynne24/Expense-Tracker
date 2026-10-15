import { PiggyBank } from 'lucide-react';
import './AccountCard.css'

const accounts = [{
  icon: "piggy-bank",
  name: "Wallet-1",
  type: "cash",
  balance: 3000,
  currency: "USD",
  description: "My first wallet",
  current: true,
}];

export function AccountCard() {

  return (
    <div className="account-container"> 
      <div className="current-account">
        <div className="account-card">
          <div className="account-header">
            <div className="header-left-sec">
              <div>
                <PiggyBank />
                <p className="account-name">Wallet-1</p>
              </div>
              <div>
                <h>Account type -</h>
                <p>Cash</p>
              </div>
            </div>
            
            <span>Current</span>
          </div>

          <p className="account-balance">$3,000.00</p>
          
          <div className="account-total">
            <div className="account-total-income">
              <h>INCOME</h>
              <p>+$3,000.00 </p>
            </div>

            <div className="account-total-expense">
              <h>EXPENSE</h>
              <p>-฿0.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="account-box">
        {`${JSON.stringify(accounts)}`}
      </div>
    </div>
  );
}