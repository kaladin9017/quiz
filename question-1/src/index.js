import * as React from "react";
import ReactDOM from "react-dom";

interface RoomDetails {
  room_type: string;
  vacant_rooms: number;
  price: number;
}

const rooms = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 },
];

export const App: React.SFC = () => {
  return <ol>{mapRoomsToList(rooms)}</ol>;
};

const mapRoomsToList = (arr: RoomDetails[]) =>
  arr.map((item) => (
    <li>{`${item.room_type}, ${item.vacant_rooms}, ${item.price}`}</li>
  ));

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
