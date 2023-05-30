import { NextApiRequest, NextApiResponse } from "next";
import NodeGeocoder from "node-geocoder";

const geocoder = NodeGeocoder({
  provider: "google",
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { address } = req.body;

  try {
    const results = await geocoder.geocode(address);

    if (results.length > 0) {
      res.status(200).json({ valid: true });
    } else {
      res.status(200).json({ valid: false });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export default handler;
