import './AccountHistory.css'
import { Pizza, NotebookPen } from 'lucide-react'
import { money } from '../../utils/formatMoney'

export function AccountHistory({ accounts }) {
  return (
    <div className="account-history-container">
      <div className="today-list">
        <div className="list-header">
          <div className="name">
            <p>Nov 13</p>
            <p className="sub-text">Today</p>

            <select className="filter">
              <option value="">Category</option>
              <option value="">Income</option>
              <option value="">Expense</option>
            </select>
          </div>

          <p>-$200.00</p>
        </div>

        <ul className="list">
          <li>
            <div className="list-detail">
              <div className="category">
                <Pizza />
                <p >Food & Drink</p>
              </div>

              <div className="note">
                <NotebookPen />
                <p>McDonald's</p>
              </div>
            </div>

            <p className="expense">-$269.00</p>
          </li>
        </ul>
      </div>


      {accounts.map((account) => {
        if (account.current === true)
        return (
          <div className="account-list">
            <div className="list-header">
              <div className="name">
                <p>{account.name}</p>
                <p className="sub-text">Transactions</p>
                <select className="filter">
                  <option value="">All</option>
                  <option value="">Day</option>
                  <option value="">Week</option>
                  <option value="">Month</option>
                  <option value="">Year</option>
                </select>
              </div>
    
              <div className="income-expense">
                <div>
                  <p className="sub-text">Income</p>
                  <p className="income">+{account.currency}{money(account.income)}</p>
                </div>
                <div>
                  <p className="sub-text">Expense</p>
                  <p className="expense">-{account.currency}{money(account.expense)}</p>
                </div>
                <div>
                  <p className="sub-text">Total</p>
                  <p>{account.currency}{money(account.income - account.expense)}</p>
                </div>
              </div>
            </div>
    
            <ul className="list">
              <li>
                <div className="list-detail">
                  <div className="category">
                    <Pizza />
                    <p >Food & Drink</p>
                  </div>
    
                  <div className="note">
                    <NotebookPen />
                    <p>McDonald's</p>
                  </div>
                </div>
    
                <p className="expense">-$269.00</p>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}