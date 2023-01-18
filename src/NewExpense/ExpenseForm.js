import React from 'react';

const ExpenseForm = (props) => {
    return (
        <form>
            <div>
                <div>
                    <label>Title</label>
                    <input type = 'text' />
                </div>
                <div>
                    <label>Amount</label>
                    <input type = 'number' min='0.01' step='0.01'/>
                </div>
                <div>
                    <label>Date</label>
                    <input type = 'date' min='2023-01-08' max='2025-12-31'/>
                </div>
            </div>
            <div>
                <button type = 'submit'> Add Expense4</button>
            </div>
        </form>
    )
}

export default ExpenseForm