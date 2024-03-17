import React from 'react'


const Interface = () => {
var Quotes = require('anime-quotes-api');

(async function() {
    var quote = new Quotes();
    var get_quotes = await quote.quotes();
    console.log(get_quotes);
})();

  return (
    <div>
      
    </div>
  )
}

export default Interface
