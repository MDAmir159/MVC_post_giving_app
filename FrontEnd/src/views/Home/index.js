import axios from 'axios';
import React , {useState} from 'react'
import { useLocation } from 'react-router-dom';
import PostBox from './components/PostBox'
import HomeElements from './HomeElements'

// postId : "",
// userId : "",
export default function Home(props) {
    const [postItemsIntel, setPostItemsIntel] = useState([]);
    let location = useLocation()

    ////////////////////////////////////////////     model portion  ///////////////////////////////////////
    const [newPost, setNewPost] = useState()
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(location.state.data);
    /////////////////////////////////////////// controller     ///////////////////////////////////////////

    axios.get('http://localhost:9000/postListItems')
    .then((res)=>{
        //console.log(res.data);
        setPostItemsIntel(res.data);
    })

    ///////////////////////////////////////   view   /////////////////////////////////////////////////////
    return <HomeElements 
                newPost = {newPost}
                authorisedUserDetails = {authorisedUserDetails}
                postItemsIntel = {postItemsIntel}
                setNewPost = {setNewPost}
                
        />
}
