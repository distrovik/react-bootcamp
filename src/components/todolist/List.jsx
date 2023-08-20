import React from "react";

function List(props) {
  return (
    <div
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.list}</li>
    </div>
  );
}

export default List;
