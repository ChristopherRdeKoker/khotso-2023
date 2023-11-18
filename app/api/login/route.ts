import { type NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

const hardCodedLoginDetails = [
  {
    name: "C",
    email: "c@gmail.com",
    password: "123123",
    id: 1,
  },
  {
    name: "R",
    email: "r@gmail.com",
    password: "223344",
    id: 2,
  },
];
type hardCodedLoginDetails = {
  name: string;
  email: string;
  password: string;
  id: number;
};

export async function GET<hardCodedLoginDetails>(request: NextApiRequest, response: NextApiResponse) {
  const data = request.body;
  const { email, password } = data;
  const isValidUser = hardCodedLoginDetails.filter((i) => i.email == email && i.password == password);
  if (isValidUser) {
    return response.status(200).json({ message: "Login Successful", isValidUser: true });
  }
  return response.status(401).json({ message: "Invalid Login Credentials", isValidUser: false });
}
