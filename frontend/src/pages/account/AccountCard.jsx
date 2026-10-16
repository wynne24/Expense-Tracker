import { PiggyBank } from 'lucide-react';
import { money } from '../../utils/formatMoney'
import { idToName } from '../../utils/formatName'
import './AccountCard.css'

export function AccountCard({ accounts, icons }) {

  const getIcon = (accountIcon) => {
    const selectedIcon = icons.find(icon => icon.id === accountIcon);
    const Icon = selectedIcon?.svg ?? PiggyBank;
    return <Icon />;
  }

  return (
    <div className="account-container"> 
      <div className="current-account">
        {accounts.length > 0 ? accounts.map((account) => {
          if (account.current === true)
          return (
            <div key={account.id} className="account-card">
              <div className="account-header">
                <div className="header-left-sec">
                  <div>
                    {getIcon(account.icon)}
                    <p className="account-name">{account.name}</p>
                  </div>
                  <div>
                    <p className="text-main">Account type -</p>
                    <p>{idToName(account.type)}</p>
                  </div>
                </div>
                
                <span>Current</span>
              </div>
  
              <p className="account-balance">{account.currency}{money(account.income - account.expense)}</p>
              
              <div className="account-total">
                <div className="account-total-income">
                  <p className="text-main">INCOME</p>
                  <p>+{account.currency}{money(account.income)}</p>
                </div>
  
                <div className="account-total-expense">
                  <p className="text-main">EXPENSE</p>
                  <p>-{account.currency}{money(account.expense)}</p>
                </div>
              </div>
            </div>
          );
        }): <div className="no-account">Create some account!</div>}
      </div>
            

      <div className="account-box">
        {accounts.length > 1 ? accounts.map((account) => {
          if (!account.current) {
            return (
              <div key={account.id} className="account-card-sub">
                <div className="account-header">
                  <div className="header-left-sec">
                    <div>
                      <PiggyBank />
                      <p className="account-name">{account.name}</p>
                    </div>
                    <div>
                      <p className="text-main">Account type -</p>
                      <p>{idToName(account.type)}</p>
                    </div>
                  </div>
                </div>

                <p className="account-balance">{account.currency}{money(account.income - account.expense)}</p>
                
                <div className="account-total">
                  <div className="account-total-income">
                    <p className="text-main">INCOME</p>
                    <p>+{account.currency}{money(account.income)}</p>
                  </div>

                  <div className="account-total-expense">
                    <p className="text-main">EXPENSE</p>
                    <p>-{account.currency}{money(account.expense)}</p>
                  </div>
                </div>
              </div>
            );
          }
        }) : 
        <div className="no-account">
          <p>Oink!</p>
          <PiggyBank />
        </div>}
      </div>
    </div>
  );
}