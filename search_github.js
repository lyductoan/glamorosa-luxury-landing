const https = require('https');
const options = {
  hostname: 'api.github.com',
  path: '/search/code?q="images.unsplash.com/photo-"+jewelry+in:file',
  headers: { 'User-Agent': 'Node.js' }
};

https.get(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const results = JSON.parse(data);
      console.log(`Found ${results.total_count} results.`);
      if (results.items) {
        results.items.slice(0, 3).forEach(item => {
          console.log(item.html_url);
        });
      }
    } catch(e) { console.log(e.message); }
  });
});
