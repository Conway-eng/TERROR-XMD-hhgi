const axios = require('axios');

exports.deployBot = async (req, res) => {
  const { botName, repoUrl, envVars } = req.body;
  try {
    const response = await axios.post(
      'https://api.render.com/v1/services',
      { /* ...payload, as in your previous sample... */ },
      {
        headers: {
          'Authorization': `Bearer ${process.env.RENDER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.response?.data || error.message });
  }
};
