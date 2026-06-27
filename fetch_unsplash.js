const https = require('https');

function searchUnsplash(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`;
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const ids = json.results.map(r => r.id);
        console.log(`Results for "${query}":\n` + ids.join('\n'));
      } catch(e) {
        console.log("Error parsing JSON:", e.message);
      }
    });
  }).on('error', err => {
    console.log("Error fetching:", err.message);
  });
}

searchUnsplash("diamond necklace");
searchUnsplash("luxury gift box");
searchUnsplash("elegant woman office");
searchUnsplash("elegant woman evening dress");
searchUnsplash("elegant woman street style");
