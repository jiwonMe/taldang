import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;

  try {
    const response = await axios({
      method,
      url: `${process.env.FAST_API_SERVER_HOST}/${query.endpoint}`,
      data: body,
    });

    res.status(response.status).json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'An error occurred' });
  }
}
