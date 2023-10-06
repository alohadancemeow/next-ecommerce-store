import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  if (res.status !== 200) {
    throw new Error(`There was an error with status code ${res.status}`);
  }

  return res.json();
};

export default getColors;
