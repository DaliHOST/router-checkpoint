import React from 'react'
import Home from './Home'
import { Route,Switch,Link } from 'react-router-dom';
import Movietrailer from './component/MovieTrailer'


export default function App() {
    return (
        <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Movietrailer} />
      </Switch>
        </div>
    )
}
