import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";
import { Transaction } from "./../components/transaction";

// Initial State
const initialState = {
   transactions: [],
};

// Global Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   function addTransaction(transaction) {
      dispatch({
         type: "ADD_TRANSACTION",
         payload: transaction,
      });
   }

   function deleteTransaction(id) {
      dispatch({
         type: "DELETE_TRANSACTION",
         payload: id,
      });
   }

   return (
      <GlobalContext.Provider
         value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};
