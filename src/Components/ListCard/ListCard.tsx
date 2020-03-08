import React from "react";
import CardUser from "../Card/CardUser";
import ActionButton from "../ActionButton/ActionButton";

export default function ListCard() {
  let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        marginLeft: 100
      }}
    >
      <ActionButton />
      {array.map(index => {
        return <CardUser />;
      })}
    </div>
  );
}
