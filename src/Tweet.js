import React from 'react';
import './Tweet.css';
function Tweet({name,message}){
    //We can use the imported data anywhere

    return(
        <div className="Tweet">
            <h2 className="tweet_inline">{name}: </h2>
		    <p className="tweet_inline">{message}</p>
        </div>
    );
}
export default Tweet;



