import React from 'react'

const URLShotenerSegment = ({children, ...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default URLShotenerSegment
