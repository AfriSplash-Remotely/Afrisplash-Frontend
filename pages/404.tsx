import ErrorPage from 'components/molecules/errorpage'
import React from 'react'

const NOtFound = () => {
    return (
        <ErrorPage statusCode={405} />
    )
}

export default NOtFound