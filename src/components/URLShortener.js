import React from 'react'

const URLShortener = ({children, ...props}) => {
    return (
        <form {...props}>
            {children}
        </form>
    )
}

export default URLShortener
