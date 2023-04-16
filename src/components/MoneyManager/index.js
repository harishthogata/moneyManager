import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    historyList: [],
    titleInput: '',
    amountInput: '',
    optionInput: transactionTypeOptions[0].optionId,
  }

  onUpdateBalance = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionInput} = this.state

    const typeOption = transactionTypeOptions.find(
      eachType => eachType.optionId === optionInput,
    )
    const {displayText} = typeOption

    const newHistory = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: displayText,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      titleInput: '',
      amountInput: '',
      optionInput: transactionTypeOptions[0].optionId,
    }))
  }

  deleteHistoryItem = id => {
    const {historyList} = this.state

    const changedTransHistory = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({
      historyList: changedTransHistory,
    })
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionInput: event.target.value})
  }

  getExpenses = () => {
    const {historyList} = this.state
    let expensesAmount = 0
    historyList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += parseInt(eachTransaction.amount)
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    historyList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount)
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {historyList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    historyList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount)
      } else {
        expensesAmount += parseInt(eachTransaction.amount)
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {
      historyList,

      titleInput,
      amountInput,
      optionInput,
    } = this.state

    const yourBalance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="app-container">
        <div className="name-card">
          <h1 className="main-heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to Your
            <span className="manage-color"> Money Manager</span>
          </p>
        </div>
        <ul className="balance-view-container">
          <MoneyDetails
            yourBalance={yourBalance}
            income={income}
            expenses={expenses}
          />
        </ul>

        <div className="form-history-container">
          <div className="form-form-container1">
            <form className="form-container" onSubmit={this.onUpdateBalance}>
              <h1 className="sub-heading">Add Transaction</h1>
              <div className="input-container">
                <label className="label" htmlFor="TITLE">
                  TITLE
                </label>

                <input
                  type="text"
                  id="TITLE"
                  value={titleInput}
                  placeholder="TITLE"
                  className="text-input"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="AMOUNT">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="AMOUNT"
                  value={amountInput}
                  placeholder="AMOUNT"
                  className="text-input"
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="TYPE">
                  TYPE
                </label>
                <select
                  className="text-input select"
                  id="TYPE"
                  value={optionInput}
                  onChange={this.onChangeOptionId}
                >
                  {transactionTypeOptions.map(eachType => (
                    <option className="option" value={eachType.optionId}>
                      {eachType.displayText}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>

          <div className="form-form-container2">
            <h1 className="sub-heading">History</h1>
            <div className="History-container">
              <div className="history-titles history">
                <p className="sub-heading">Title</p>
                <p className="sub-heading">Amount</p>
                <p className="sub-heading">Type</p>
                <p className="nonvisible">harish</p>
              </div>
              <div className="transaction-history">
                {historyList.map(eachHistory => (
                  <TransactionItem
                    key={eachHistory.id}
                    historyDetails={eachHistory}
                    deleteHistoryItem={this.deleteHistoryItem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
