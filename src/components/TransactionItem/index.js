import './index.css'

const TransactionItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, title, amount, type} = historyDetails

  const onDeleteHistoryItems = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history1">
      <li className="history-text">{title}</li>
      <li className="history-text">{amount}</li>
      <li className="history-text">{type}</li>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteHistoryItems}
        data-testid="delete"
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
