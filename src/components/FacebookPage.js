import React from 'react';
import FacebookProvider, { Page } from 'react-facebook';

const facebookPage = () => {

    return (
        process.env.REACT_APP_FACEBOOK_APP_ID !== undefined ? (
            <FacebookProvider appId= { process.env.REACT_APP_FACEBOOK_APP_ID }>
                <Page href="https://www.facebook.com/facebook" tabs="timeline" />
            </FacebookProvider> 
        ) : (
            null
        )
    );
}

export default facebookPage;