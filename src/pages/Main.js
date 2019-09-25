import React from 'react';

export default function Main({ match }) {
    return (
        <nav className="navbar-pai">
            <a className="navbar-name" href='/'>{match.params.id}</a>
        </nav>
    )
}