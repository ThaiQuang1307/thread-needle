import { get } from "../utils/request";

export const getListPosition = async () => {
  const result = await get(`position`);
  return result;
};

export const getPosition = async (id) => {
  const result = await get(`position/${id}`);
  return result;
};
