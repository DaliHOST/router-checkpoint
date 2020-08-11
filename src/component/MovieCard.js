import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap'
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { Route,Switch,Link } from 'react-router-dom';
import Movietrailer from './MovieTrailer'



export default function MovieCard({list}) {
    return (
        <div style={{margin:'3%'}}>
            <Card style={{ width: '18rem',height:'600px' }}>
                <Card.Img variant="top" src={list.posterUrl} style={{ height: '375px' }}/>
                <Card.Body>
                    <Card.Title>{list.title}</Card.Title>
                    <Card.Text>{list.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div style={{display:"flex"}}>
                    <small className="text-muted" style={{marginRight:"7%"}}><Rate disabled defaultValue={list.rating} /></small>
                    <Link to={`/${list.id}`} ><Button variant="primary" >more info</Button></Link>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}
