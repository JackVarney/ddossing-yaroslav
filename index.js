const request = require('request');

const oneNilYaroslav = () =>
  new Promise(resolve => {
    request.get('http://tech.masterofsql.com/beer.html', (err, res, body) => {
      if (err) console.log(err);

      const thing = 'element-id="326">';
      const indexOfCount = body.lastIndexOf(thing) + thing.length;
      const thing2 = '&nbsp;total views,';
      const indexOfEndOfCount = body.lastIndexOf(thing2);
      resolve(body.slice(indexOfCount, indexOfEndOfCount));
    });
  });

(async () => {
  console.log('running');

  for (let i = 0; i < 1000; i = await oneNilYaroslav()) {
    console.log(i);
  }
})();
