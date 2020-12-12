import React, { useEffect, useState } from 'react';
import ShowList from './components/ShowList';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';
import 'bootstrap/dist/css/bootstrap.css';
import { Router ,Link ,navigate } from '@reach/router';



function App() {
    return (  
        <div className="continer">
            <div className="row">
                <h1>Favorite authors</h1>
            </div>

            <Link to="/new">Add an author</Link>

            <Router>
                <ShowList path="/" />
                <AuthorForm path="/new" />
                <EditAuthor path="/edit/:_id" />
            </Router>

        </div>
    );
}

export default App;
