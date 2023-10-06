import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  if (res.status !== 200) {
    throw new Error(`There was an error with status code ${res.status}`);
  }

  return res.json();
};

export default getCategories;
