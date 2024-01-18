import { useEffect, useState } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

interface Category {
  id: string;
  name: string;
  description: string;
}

export const useGetCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const categoriesRef = collection(db, "categories");
  const { userId } = useGetUserInfo();

  const getCategories = async () => {
    let unsubscribe: () => void;
    try {
      const queryCategories = query(
        categoriesRef,
        where("userId", "==", userId),
      );

      unsubscribe = onSnapshot(queryCategories, (snapshot: QuerySnapshot<DocumentData>) => {
        let docs: Category[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data() as Category;
          const id = doc.id;

          docs.push({ ...data, id });

        });

        setCategories(docs);
      
      });
    } catch (err) {
      console.error(err);
    }

    return () => unsubscribe?.();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories };
};
