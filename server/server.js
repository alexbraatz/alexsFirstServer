// require express to make  a server
const express = require( 'express' );
// our app
const app = express();
// tell the server to use "server/public" as the root of the website
app.use( express.static( 'server/public' ) );
// globals
const port = 5000;
let devices = [ 'iphone X', 'macbookPro M1' ];
// tell our app to spin up and listen
app.listen( port, ()=>{ // one port to not use is 5432 or 6000
    // stick to 5000 or 3000 to be safe in Prime
    console.log( 'server is up' ); 
});
// our first GET route 
app.get( '/devices', ( req, res )=>{ // remember req/res order by alphabet
    console.log( '/dvices GET' );
    res.send( devices )
})