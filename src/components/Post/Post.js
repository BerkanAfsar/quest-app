import React from "react";
import "../Post/Post.scss";
//import ReactDOM from "react-dom";

//Hooks kullanıyoruz

function Post(props) { // props u buraya vererek gelen propsları alabiliriz

    const {title,text} = props;

    return(
        <div className="postContainer">
            {title}
            {text}
        </div>
    )
}

export default Post; // Component ı dışarıya export ediyoruz.. Yani dışarıdan erişmek isteyenler Post diye erişebilir