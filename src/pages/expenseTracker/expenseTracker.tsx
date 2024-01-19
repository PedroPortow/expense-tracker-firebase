import React, { useState } from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useAddCategory } from "../../hooks/useAddCategory";
import Card from "../../components/Card/Card";
import AddTransactionModal from "../../components/AddTransactionModal/AddTransactionModal";
import AddCategoryModal from "../../components/AddCategoryModal/AddCategoryModal";

interface Props {}

const ExpenseTracker: React.FC<Props> = ({}) => {
  const { transactions, transactionTotals } = useGetTransactions();
  const [showTransactionModal, setShowTransactionModal] = useState<boolean>(false)
  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(true)
  const { balance, income, expenses } = transactionTotals;


  return (
    <div className="h-screen bg-gray-300 w-fill flex items-center gap-y-8 flex-col">
      {showTransactionModal && 
        <AddTransactionModal closeModal={() => setShowTransactionModal(false)} />
      }
      {showCategoryModal && 
        <AddCategoryModal closeModal={() => setShowCategoryModal(false)} />
      }
      <div className="mt-8 flex flex-row gap-x-8">
        <Card balance={balance} title={"Balance"} />
        <Card balance={expenses} title={"Expenses"} />
        <Card balance={income} title={"Income"} />
      </div>

      <div className="flex border border-gray-200 p-4  gap-y-2 flex-col   w-fill bg-white rounded-lg shadow">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4 text-neutral-800">
                #
              </th>
              <th scope="col" className="px-6 py-4 text-neutral-800">
                Transação
              </th>
              <th scope="col" className="px-6 py-4 text-neutral-800">
                Valor
              </th>
              <th scope="col" className="px-6 py-4 text-neutral-800">
                Categoria
              </th>
            </tr>
          </thead>
          <tbody>
						{transactions.map((transaction, index) => {
							return (
								<tr className="border-b dark:border-neutral-500">
									<td className="whitespace-nowrap text-neutral-800 px-6 py-4 font-medium">{index + 1}</td>
									<td className={`${transaction.type == "expense" ? "text-red-100" : "text-lime-600"} font-semibold whitespace-nowrap px-6 py-4`}>{transaction.description}</td>
									<td className="whitespace-nowrap text-neutral-800 px-6 py-4">{transaction.value}</td>
									<td className="whitespace-nowrap text-neutral-800 px-6 py-4">{transaction.category}</td>
								</tr>
							)
						})}
          </tbody>
        </table>

				<div className="flex flex-row justify-between gap-y-4 mt-4">
					<button className="btn btn-outline text-neutral-600" onClick={() => setShowTransactionModal(true)}>
						+ Adicionar Transação
					</button>
					<button className="btn btn-outline text-neutral-600" onClick={() => setShowCategoryModal(true)}>
						+ Adicionar Categoria
					</button>
				</div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
