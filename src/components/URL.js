import React from 'react'

const URL = ({link, ...props}) => {
    return (
        <p {...props}>{link}</p>
    )
}

export default URL
