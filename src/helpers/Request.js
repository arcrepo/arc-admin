import Axios from "axios";
import { HOST } from "../env";

export const MakePOST = async (url, data) => {
  const req = await Axios.post(HOST + url, data);
  return req.data;
};
