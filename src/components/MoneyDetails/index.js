import './index.css'

const MoneyDetails = props => {
  const {yourBalance, income, expenses} = props

  return (
    <li className="balance-container">
      <div className="balance-view-card bg1">
        <div className="image-container">
          <img
            className="img"
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />

          <div className="amount-title">
            <p className="balance-title">Your Balance</p>
            <p data-testid="balanceAmount" className="balance-title amount">
              Rs <span>{yourBalance}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="balance-view-card bg2">
        <div className="image-container">
          <img
            className="img"
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />

          <div className="amount-title">
            <p className="balance-title">Your Income</p>
            <p data-testid="incomeAmount" className="balance-title amount">
              Rs {income}
            </p>
          </div>
        </div>
      </div>
      <div className="balance-view-card bg3">
        <div className="image-container">
          <img
            className="img"
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />

          <div className="amount-title">
            <p className="balance-title">Your Expenses</p>
            <p data-testid="expensesAmount" className="balance-title amount">
              Rs {expenses}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
