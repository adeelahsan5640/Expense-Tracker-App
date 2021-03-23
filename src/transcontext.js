import React,{createContext, useReducer} from 'react';
import TransactionReducer from './transreducer';

const initialTransactions=[
]

export const TransactionContext=createContext(initialTransactions);
export const TransactionProvider=({children})=>{
    let [state,dispatch]=useReducer(TransactionReducer,initialTransactions);
    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount:transObj.amount,
                desc:transObj.desc
            },
        })

    }
    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTransaction
        }}>
            {children}

        </TransactionContext.Provider>
    )

}