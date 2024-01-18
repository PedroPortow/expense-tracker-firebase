import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

type Category = {
  name: string;
  description?: string;
};


export const useAddCategory = () => {
  const categoriesRef = collection(db, "categories");
  const { userId } = useGetUserInfo();

  const addCategory = async ({
    name,
    description,
  }: Category) => {
    await addDoc(categoriesRef, {
      userId,
      name,
      description,
    });
  };

  return { addCategory };
};
