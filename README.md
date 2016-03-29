KAGAMI
to do what ?

quickly creates one or multiple frame(s) in domain or crossdomain and interact with them. This script is based on the postMessage method ( easy to guess). its design is led by Raphael Marandet , and uses its o2 script ( object creation ).

install

add script kagami.min.js in every page you want interact

how to

allo interact with frame

//allow interact with frame //place this in every page that you want to interact var K = new Kagami.Controller(false);

events

familyGrowUp
tweet
//define function to do when event K.on('familyGrowUp', function(e) { //when a frame in the 'cloud' is added }); K.on('tweet', function(e) { //a tweet is coming });

methods //send to a specific frame K.send(to, "event", callback); //send to all frame created and recursive to their own frame K.broadcast(event, msg, callback);

params for callback //@param object K instance of Kagami.Controller //@param string from frame id //@param json data response callback expected params function(K,from, data);