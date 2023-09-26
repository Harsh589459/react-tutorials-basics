import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'


import React from 'react'

const ExpenseItem = (props) => {
    const clickHandler = ()=>{
        console.log("Clicked !!!")
    }
    const clickDelete=()=>{
        console.log("Delete Clicked")
    }
    
 
    return (<Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>    
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={clickDelete}>Delete</button>

    </Card>
    )
}



export default ExpenseItem;