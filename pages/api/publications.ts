import type { NextApiRequest, NextApiResponse } from "next";

interface ApiResponse {
  scholarUrl: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ scholarUrl: "" });
  }

  const scholarUrl = `https://scholar.google.com/citations?user=CTTrDC8AAAAJ&hl=pt-BR&oi=ao`;

  return res.status(200).json({ scholarUrl });
}
