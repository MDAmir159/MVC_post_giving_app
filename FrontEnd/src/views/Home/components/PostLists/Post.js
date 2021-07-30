import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IoEllipsisVertical } from "react-icons/io5";
import { Divider } from '@material-ui/core';

export default function PostBox(props) {

    const useStyles = makeStyles((theme) => ({
        root:{
            display : 'flex',
            backgroundColor : '#fdffe0',
            width : '85.5ch',
            // height : '29ch',
            flexDirection : 'column',
            borderRadius : '6px',
            border: 1,
            borderStyle: 'solid',
            borderColor : '#c9c9c9',
            fontFamily : 'arial',
            marginLeft : '44.5ch'

        },
        box:{
            display : 'flex',
            justifyContent : 'center',
            height : '83%',
            width : '95%',
            marginTop : '2%',
            marginLeft : '2%',
        },
        container:{
            // backgroundColor : 'blue',
            width : '95%',
            marginLeft : '2%'
        },
        header_details : {
            display : 'flex',
            flexDirection : 'row',
            // backgroundColor : 'red'
        },
        post_text : {
            
        },
        post_details : {
            minWidth : '95%',
            // backgroundColor : 'blue'

        },
        post_options:{
            marginTop : '4ch',
            maxWidth : '5%',
            // backgroundColor:'green',
            // marginLeft : '1ch'
        },
        post_user_name:{
            fontSize : '20px',
            color : '#3d3c38'
            // fontFamily : 'arial'
        },
        post_time:{
            color : '#b0a997',
            // fontFamily : 'arial',
        },
        post_text_p:{
            color : '#3d3c38',
            fontSize : '15px'
        }

    }));
    const styles = useStyles();
    
    const [item, setItem] = useState(props.value)
    
    return (
        <div>
            <br/>
            <div className = {styles.root}>
                {/* container */}
                <div className = {styles.container}>
                    {/* header portion */}
                    <div className = {styles.header_details}>
                        {/* name and time */}
                        <div className = {styles.post_details}>
                            <p className = {styles.post_user_name}>
                                {item.postUserName}
                            </p>
                            <p className = {styles.post_time}>{item.postInsertedTime}</p>
                        </div>
                        {/* option icon */}
                        <div className = {styles.post_options}>
                            <IoEllipsisVertical size = "20"/>
                        </div>
                    </div>
                    <Divider/>
                    {/* post text */}
                    <div className = {styles.post_text}>
                        <p className = {styles.post_text_p}> {item.postDescription} </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
