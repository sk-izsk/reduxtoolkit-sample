import axios, { AxiosInstance, AxiosResponse } from "axios";
import { User } from ".";

const BASE_URL: string = `https://jsonplaceholder.typicode.com/`;

const axiosApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const fetchUsers = async (): Promise<{
  data: User[];
  status: number;
}> => {
  const response: AxiosResponse<User[]> = await axiosApi.get<
    any,
    AxiosResponse<User[]>
  >("/users");
  return {
    data: response.data,
    status: response.status,
  };
};

export { fetchUsers };
