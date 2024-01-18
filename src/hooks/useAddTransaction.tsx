import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

// Definindo o tipo para o objeto de transação
type Transaction = {
  description: string;
  transactionAmount: number;
  transactionType: string;
  categoryId?: string; // Campo opcional para o ID da categoria
};

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userId } = useGetUserInfo();

  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType,
    categoryId,
  }: Transaction) => {
    await addDoc(transactionCollectionRef, {
      userId,
      description,
      transactionAmount,
      transactionType,
      categoryId, 
      createdAt: serverTimestamp(),
    });
  };

  return { addTransaction };
};
