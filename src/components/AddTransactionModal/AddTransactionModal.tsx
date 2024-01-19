import React, { useState } from "react";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useAddTransaction } from "../../hooks/useAddTransaction";


interface Props {
  closeModal: () => void
}

const AddTransactionModal: React.FC<Props> = ({closeModal}) => {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const { categories } = useGetCategories();
  const { addTransaction } = useAddTransaction();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(transactionAmount.replace(",", "."));

    await addTransaction({
      description: description, 
      transactionAmount: amount,
      transactionType: selectedType, 
      categoryId: selectedCategory,
    });
    closeModal()
  };


  console.log({categories})
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
    <div className="relative p-5 bg-white rounded-lg shadow-xl w-1/2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-neutral-800">Add Transcation</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="transactionName" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            id="transactionName"
            placeholder="Food for my dog"
            onChange={e => setDescription(e.target.value)}
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="transactionAmount" className="block text-gray-700 text-sm font-bold mb-2">
            Value*
          </label>
          <div className="flex relative ">
            <span className="inline-flex shadow items-center px-3 rounded-l-md border h-[50px] border-r-0 border-gray-300 bg-gray-50 text-gray-500  py-2  text-sm">
              R$
            </span>
            <input
              id="transactionAmount"
              placeholder="2,50"
              onChange={e => setTransactionAmount(e.target.value)}
              className="shadow appearance-none h-[50px] bg-white border rounded-r w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              style={{ paddingLeft: '1rem' }} // Ajuste conforme necessário para alinhar com o prefixo
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="transactionType" className="block text-gray-700 text-sm font-bold mb-2">
            Type
          </label>
          <select
            id="transactionType"
            value={selectedType} // Você pode querer renomear essa variável para algo mais apropriado como selectedType
            onChange={(e) => setSelectedType(e.target.value)} // E aqui também, para setSelectedType
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Choose a type</option>
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="transactionCategory" className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            id="transactionCategory"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecione uma categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default AddTransactionModal;
