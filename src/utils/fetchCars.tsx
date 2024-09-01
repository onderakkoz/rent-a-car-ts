import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    'x-rapidapi-key': '2070e90c05msh6610476b82f11cep19d1d8jsn6c4791ddda4c',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
},
};

type Params = {
  limit: number;
  make?: string;
  model?: string;
};

const fetchCars = async ({
  limit,
  make = "bmw",
  model = "m4",
}: Params): Promise<CarType[]> => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}`;

  const res = await fetch(url, options);

  const data = await res.json();

  return data;
};

export default fetchCars;