export const ChildComponent = ({ items, deleteItem })=> {
  return (
    <div className="child-container">
      <h2>Items ({items.length})</h2>
      {items.length === 0 ? (
        <p className="empty-message">No items yet. Add one to get started!</p>
      ) : (
        <ul className="items-list">
          {items.map((item, index) => (
            <li key={index} className="item-card">
              <span className="item-text">{item}</span>
              <button 
                onClick={() => deleteItem(index)}
                className="delete-btn"
                title="Delete this item"
              >
                ✕ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}