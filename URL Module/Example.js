var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr,true);
console.log(q.host);          // Return the 'locallhost:8080'
console.log(q.pathname);      // Returns 'default.html'
console.log(q.search);        // Ruturns   

var qdata = q.query;          // returns an object: {}
console.log(qdata.month);     // returns 'february'