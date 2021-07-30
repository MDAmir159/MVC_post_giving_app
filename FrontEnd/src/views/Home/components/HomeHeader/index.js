import React from 'react'
import HomeHeaderElements from './HomeHeaderElements'

export default function HomeHeader(props) {
    const {authorisedUserDetails} = props;
    return <HomeHeaderElements 
                authorisedUserDetails = {authorisedUserDetails}
            />
}
