import React, { useState } from "react";

interface Props {
  closeModal: () => void;
}

const AddCategoryModal: React.FC<Props> = ({ closeModal }) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para salvar a nova categoria
    console.log({ categoryName, categoryDescription });

    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative p-5 bg-white rounded-lg shadow-xl w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-neutral-800">Add Category</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="categoryName" className="block text-gray-700 text-sm font-bold mb-2">
              Category Name*
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="e.g., Utilities"
              className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categoryDescription" className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <input
              type="text"
              id="categoryDescription"
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
              placeholder="Short description"
              className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
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

export default AddCategoryModal;
