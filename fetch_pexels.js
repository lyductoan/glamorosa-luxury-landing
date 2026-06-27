const https = require('https');
function searchPexels(query) {
  https.get(`https://www.pexels.com/search/${encodeURIComponent(query)}/`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const matches = data.match(/https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\d+\.jpeg/g);
      if (matches) {
        console.log(`\nResults for ${query}:`);
        console.log([...new Set(matches)].slice(0, 5).join('\n'));
      }
    });
  });
}
searchPexels("diamond necklace");
searchPexels("luxury gift box");
searchPexels("elegant woman office");
searchPexels("evening dress");
searchPexels("street fashion");
