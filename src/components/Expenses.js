import React, {useState} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./Expenses/ExpensesFilter";
import ExpensesList from "./Expenses/ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    console.log('Year data in Expenses.js' + filteredYear)

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Expenses.js')
        console.log(year + 'in Expenses.js')
        setFilteredYear(year)
    }
    const filteredExpenses = props.expenses.filter(
        (expense) => {
            return expense.date.getFullYear().toString() === filteredYear
        })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesList filteredExpenses = {filteredExpenses}></ExpensesList>
        </Card>
    )
}


export default Expenses