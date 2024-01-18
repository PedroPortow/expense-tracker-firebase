import React from 'react';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import { useGetCategories } from '../../hooks/useGetCategories';
import { useAddCategory } from '../../hooks/useAddCategory';

interface Props {
}

const ExpenseTracker: React.FC<Props> = ({ }) => {
	const { addTransaction } = useAddTransaction();
	const { addCategory } = useAddCategory();
	// const { transactions, transactionTotals } = useGetTransactions();
	const { categories } = useGetCategories();
	// const { balance, income, expenses } = transactionTotals;

	console.log({categories})


	return (
		<div className='h-screen bg-gray-800 flex items-center'>
		</div>
	);
};

export default ExpenseTracker;