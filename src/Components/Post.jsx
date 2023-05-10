import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Post = (props) => {
    //let { id } = useParams();
    let { dataId } = props
    const [posts, setPosts] = useState([]);

    console.log(dataId)
    let newPost = posts.filter((post) => dataId == post.userId);

    const getData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/?userId="+dataId)
            .then((res) => {setPosts(res.data)
                console.log("sdf")
            }
            )
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getData();
    }, [dataId]);
    return (
        <div>
            {
                posts && posts.map((item) => {
                    return <div style={{border:'1px solid gray', padding:10 ,margin:10}} key={item.id}>
                        <h3 style={{backgroundColor:'black' , color:'white' , padding:10, display:'inline-block'}}>{item.id}</h3>
                        <p><span style={{fontWeight:700 , color:'green'}}>Title:</span>  {item.title}</p>
                        <p><span style={{fontWeight:700 , color:'green'}}>Description:</span>{item.body}</p>

                    </div>
                })
            }
        </div>
    )
}

export default Post
