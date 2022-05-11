import React from "react";
import {useParams} from "react-router-dom"; // userId parametresini routerdan alabilmek için bunu import ediyoruz. React dom 6.0 dan 5.2.0 a indirildi router işleminde sıkıntı çıktı

function User() {

    const {userId} = useParams();
    return(
        <div>
            User!! {userId}
        </div>
    )
}

export default User;