var express     = require("express"),
    app         = express(),
    request = require('request-promise-native'),
    encodeUrl = require('encodeurl'),
    sentiment = require('sentiment-multilang');

require('dotenv').load();

var Twitter = require('twit');


var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var tweet = { tweets: [], hashtag: []};

//number of tweet research
var count = 3000;

module.exports = {
      printItem: async function (arg, callback){
          try {
              tweet = { tweets: [], hashtag: []};
              tweet = await getTweet(arg);
              var text = "";
              // testo di tutti i tweets
              for (i=0; i< tweet.tweets.length; i++){
                  text = text + tweet.tweets[i];
              }
              // testo tutti gli hashtag
              var hasht = "";
              for (i=0; i< tweet.hashtag.length; i++){
                  hasht = hasht + " " + tweet.hashtag[i];
              }
              // analyze tweet with dandelion
              // var item = await analyzeTweet(tweet);
              var item = await analyzetweetlocal(tweet);
              item.text = text;
              item.hashtags = hasht;
              await callback(item);
              // finish to analyze i can print result
              console.log("FINISH CALL")
          } catch (error){
              console.log("Error: ", error)
            }
        }
}


//local sentiment analyze
async function analyzetweetlocal(tweets){
      console.log("ANALYZE LOCAL TWEET");
      var contSent = {
          pos: 0,
          neg: 0,
          neu: 0
      }
      for (var i=0; i< tweets.tweets.length;i++){
        var result = sentiment(tweets.tweets[i].replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, ''), 'it');
        if (result.vote == 'positive'){ contSent.pos = contSent.pos+1;}
        if (result.vote == 'negative'){ contSent.neg = contSent.neg+1;}
        if (result.vote == 'neutral'){ contSent.neu = contSent.neu+1;}
      }

      return contSent
}

//function for analyze sentiment of Tweet
async function analyzeTweet(tweets){
         console.log("ANALYZE TWEET");
          var contSent = {
              pos: 0,
              neg: 0,
              neu: 0
          }

              for (var i=0; i<tweets.tweets.length;i++) {

                var options = {
                  method: 'POST',
                  headers:{'content-type' : 'application/x-www-form-urlencoded'},
                  url: 'https://api.dandelion.eu/datatxt/sent/v1',
                  body: 'text='+ tweets.tweets[i].replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '') +'&lang=it&token=2c7fba19a40b464891a7082348367d1c',
                  json: true
              }
              //send url reques
              await request(options).then(
                (body) =>{
                    if(body.sentiment == undefined){
                        console.log("error get sentiment")
                        var err=true;
                    }
                    else {
                        if (body.sentiment.type == 'positive'){ contSent.pos = contSent.pos+1;}
                        if (body.sentiment.type == 'negative'){ contSent.neg = contSent.neg+1;}
                        if (body.sentiment.type == 'neutral'){ contSent.neu = contSent.neu+1;}
                    }
                });//chiude THEN
              }
          return contSent;
}//end function


//function to get tweet from api twitter
function getTweet (argument){
    console.log("GET TWEET");
   return new Promise (
     function (resolve, reject){
        client.get('search/tweets', {q: argument, tweet_mode: 'extended', lang: 'it', count: count},
         function(error, tweets, response) {
             for (var i = 0; i < tweets.statuses.length ; i++){
                    if(tweets.statuses[i].entities.hashtags.length != 0){
                        for (var j=0; j< tweets.statuses[i].entities.hashtags.length; j++){
                          tweet.hashtag.push(tweets.statuses[i].entities.hashtags[j].text);
                        }
                    }
                 if(tweets.statuses == undefined){
                      console.log("ERRORE GET TWEET");
                 } else {
                   tweet.tweets[i] = tweets.statuses[i].full_text
                 }

             }
           if(!error){
              resolve(tweet);
           } else {
              reject(error);
           }
         });
     });
}
