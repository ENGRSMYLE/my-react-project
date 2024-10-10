// It will take an item object
export default function Eachtodo({ item, changeToggle, deleteItem }) {
  function changeCheck(id) {
    changeToggle(id);
  }

  function deleteAnItem(id) {
    deleteItem(id);
  }
  return (
    <div className="eachtodo">
      <input type="checkbox" onChange={() => changeCheck(item.id)} />{" "}
      <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>
        {item.quantity} {item.desc}{" "}
      </span>
      <button onClick={() => deleteAnItem(item.id)}>❌</button>
    </div>
  );
}
