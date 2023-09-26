import React,{useState} from 'react'
import './NewExpense.css';

const ExpenseForm = () => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const tilteChangeHandler = (event)=>{

        setEnteredTitle(event.target.value);


    //    setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
        
    //    })


    //if your state update depends on previous State use this function form
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value}
    // })
    }
    const AmountChangeHandler=(event)=>{

        setEnteredAmount(event.target.value);


        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
            
        //    })

    }
    const DateChangeHandler=(event)=>{

        setEnteredDate(event.target.value);


        
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
            
        //    })

    }

  return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={tilteChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01"onChange={AmountChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2028-12-31" onChange={DateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm