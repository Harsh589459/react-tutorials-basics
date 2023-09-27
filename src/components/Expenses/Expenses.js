import React ,{useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {


  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler =selectedYear =>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense=>{
    console.log(expense);
    return expense.date.getFullYear().toString()===filteredYear;
  })

  return (
    <Card classname='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      
      </Card>
  )
}



export default Expenses