import { NextApiRequest, NextApiResponse } from 'next';

const robotTXT = (_req: NextApiRequest, res: NextApiResponse) => {
  const robotsTxt = `
User-agent: *
Disallow: 
Sitemap: https://taldang.com/sitemap.xml
  `;
  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();
};

export default robotTXT;