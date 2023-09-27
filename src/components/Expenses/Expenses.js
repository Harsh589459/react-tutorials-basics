import React ,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';


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
      <ExpensesList items={filteredExpenses}/>
      
      </Card>
  )
}



export default Expenses