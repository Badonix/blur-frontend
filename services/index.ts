import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const blur = async (data: { image: File; radius: number }) => {
  let response = await instance.post("/blur", data);
  return response;
};
