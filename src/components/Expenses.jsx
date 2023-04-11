import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log("Expense.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  // console.log(props.expenses);

  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={"expenses"}>
      {/* {filteredYear} */}
      <ExpensesFilter
        select={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        /> */}

      {/* {expensesContent} */}
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />

      {/* {filterExpenses.length === 0 && <p>No Expense found</p>} */}

      {/* {filterExpenses.length > 0 &&
        filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* // {filterExpenses.length === 0 ? (
      //   <p>No Expense foudn</p>
      // ) : (
      //   filterExpenses.map((expense) => (
      //     <ExpenseItem
      //       key={expense.id}
      //       title={expense.title}
      //       amount={expense.amount}
      //       date={expense.date}
      //     />
      //   ))
      // )} */}

      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
