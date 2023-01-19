
import './App.css';


import Expenses from "./components/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      date: new Date(2023, 0, 10),
      title:'New book',
      price: 30.99
    },
    {
      date: new Date(2023, 0, 5),
      title:'New jeans',
      price: 99.99
    },
      {
          date: new Date(2023, 0, 5),
          title:'New bag',
          price: 199.99
      }
  ]

const App = () => {
    const addExpenseHandler = (expense) => {
      console.log('In App.js')
      console.log(expense)
    }
}

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
      <div className="App">
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
      </div>
  );
}

export default App;