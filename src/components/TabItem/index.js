import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickBtn = () => {
    updateTabItem(tabId)
  }
  const xxx = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${xxx}`} onClick={onClickBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
