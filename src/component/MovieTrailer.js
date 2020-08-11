import React from 'react'
import { Link } from 'react-router-dom'
import { data } from './MovieData'

export default function MovieTrailer({ match }) {
    return (
        <>
        <Link to="/" style={{ fontSize: '30px', margin: '2%' }}>Home</Link>
        <div style={{margin:'4%'}}>
            {data.map((el) => el.id == match.params.id ? <><h2>Title:</h2><p>{el.title}</p><h2>Description:</h2><p>{el.description}</p><h2>trailer URL:</h2><p><a href={el.trailer}>{el.trailer}</a></p></> : null)}
        </div>
        </>
    )
}
