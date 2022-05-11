import React, {useState, useEffect} from "react";
import Post from '../Post/Post';
import "../Home/Home.scss";

function Home() {

    const [error,setError] = useState(null); // ilk başta error u yok demek. Yani ilk durumu null
    const [isLoaded, setIsLoaded] = useState(false); // datanın gelip gelmediğinin kontrol etmek için. en başta data false dur yani loaded değildir
    const [postList, setPostList] = useState([]); //app ayağa kalktığında postcomponent nın postlisti boş liste olacak

    useEffect(() => {
        fetch("/posts")
        .then(res => res.json()) //response u parse ediyor
        .then( // iki seçenek var ya data geldi yada error geldi
            (result) => {
                setIsLoaded(true);
                setPostList(result)
            },
            (error) => {
                console.log(error)
                setIsLoaded(true); // true olmasının sebebi api call tamamlandı sayfa yükleniyor halde kalmasın diye
                setError(error);
            }
        )
     }, [])

     if(error) {
         return <div> Error !!</div>
     } else if(!isLoaded) {
         <div> Loading...</div>
     }else { //html tag lerinin içinde javascript kodu yazacaksak o kodu süslü parantez içinde yaz
         return(

            <div className="container">

                Home!!

                <Post></Post>

                    {postList.map(post => (
                        <Post title={post.title} text={post.text}></Post> //props child parent arasında iletilen datalar için kullanılır Burada home parent child da post                
                    ))}
            </div>
         );
     }
}

export default Home;