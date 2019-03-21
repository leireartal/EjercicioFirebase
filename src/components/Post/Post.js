import React from 'react';
import './bootstrap.min.css';

import './Post.css';

const style = {
    width: '150px',

  };

const post = (props) => (
    <div className="Post" onClick={props.clicked}>
        <h1>{props.author}</h1>
        <div className="Info">
            {/* <div className="Author">{props.author}</div> */}
            <img src={props.url} className="media-object" style={style} alt="Responsive image"></img>

        </div>
    </div>
);

export default post;