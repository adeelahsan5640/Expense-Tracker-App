import React, { useContext, useState } from 'react';
import './App.css';
import {TransactionContext} from './transcontext';


function Child() {
    let {transactions,addTransaction}=useContext(TransactionContext);
    let [newDesc,setdesc]=useState("");
    let [newamount,setAmount]=useState(0);
    const handleAddition =(event)=>{
        event.preventDefault();
        if(Number(newamount)===0){
            alert("please enter correct amount");
            return false
        }
        addTransaction({
            amount: Number(newamount),
            desc: newDesc
        })
    }
    const getIncome=()=>{
        let income = 0;
        for(var i = 0;i < transactions.length;i++){
            if(transactions[i].amount > 0)
            income += transactions[i].amount
    }
    return income;
}
    const getExpense=()=>{
        let expense = 0;
        for(var i = 0;i < transactions.length;i++){
            if(transactions[i].amount < 0)
            expense += transactions[i].amount
}
return expense;
}
  return (
    <div className="container">
        <h1 className="text-centre">Expense Tracker</h1>
        <h3>Your Balance<br/>Rs.{getIncome() + getExpense()}</h3>
        <div className="Expense-container">
            <h3>Income <br/>Rs.{getIncome()}</h3>
            <h3>Expense <br/>Rs.{getExpense()}</h3>
            </div>
            <h3>History</h3>
            <hr/>
            <ul className="transaction-list">
                {transactions.map((transObj, ind)=>{
                    return(
                <li>
                    <span>Rs.{transObj.desc}</span>
                    <span>Rs.{transObj.amount}</span>
                </li>
                    )
                })}
                
                

            </ul>
            <h3>Add new transaction</h3>
            <hr/>
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description<br/>
                    <input type="text" placeholder="Description" onChange={(ev)=>setdesc(ev.target.value)}required/>
                </label>
                <br/>
                <label>
                    Enter Amount<br/>
                    <input type="number" placeholder="Amount" onChange={(ev)=>setAmount(ev.target.value)} required/>
                </label>
                <button type="submit">Add Transaction</button>
            </form>
    </div>
  );
}

export default Child;
