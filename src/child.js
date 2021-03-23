import React, { useContext } from 'react';
import './App.css';
import {TransactionContext} from './transcontext';


function Child() {
    let {transactions}=useContext(TransactionContext);
  return (
    <div className="container">
        <h1 className="text-centre">Expense Tracker</h1>
        <h3>Your Balance<br/>$260</h3>
        <div className="Expense-container">
            <h3>Income <br/>$500</h3>
            <h3>Expense <br/>$240</h3>
            </div>
            <h3>History</h3>
            <hr/>
            <ul className="transaction-list">
                {transactions.map((transObj, ind)=>{
                    return(
                <li>
                    <span>{transObj.desc}</span>
                    <span>{transObj.amount}</span>
                </li>
                    )
                })}
                
                

            </ul>
            <h3>Add new transaction</h3>
            <hr/>
            <form className="transaction-form">
                <label>
                    Enter Description<br/>
                    <input type="text" required/>
                </label>
                <br/>
                <label>
                    Enter Amount<br/>
                    <input type="number" required/>
                </label>
                <input type="submit" value="Add Transaction"/>
            </form>
    </div>
  );
}

export default Child;
