import Eachtodo from "./Eachtodo";

export default function Todolist({ items, changeToggle, deleteItem }) {
  return (
    <div className="todolist">
      {items.map((item) => (
        <Eachtodo
          item={item}
          key={item.id}
          changeToggle={changeToggle}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}
