import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // const [first, setfirst] = useState("");

  // const [title, setTitle] = useState(props.title);

  console.log("ExpenseItem evaluated  by React");

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className={"expense-item"}>
        <ExpenseDate date={props.date} />

        <div className={"expense-item__description"}>
          <h2>{props.title}</h2>
          <div className={"expense-item__price"}>${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
