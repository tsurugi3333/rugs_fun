import axios from "axios";


export const fetchTokenPrice = async (address: string) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BIRDEYE_API_URL}?address=${address}`, {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_BIRDEYE_API_KEY,
        },
      });
      return response.data.data.value;
    } catch (error) {
      console.error("Error fetching price:", error);
      return null;
    }
};