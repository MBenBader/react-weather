import React from 'react'
import {
    Link
} from "react-router-dom";

function Home() {

    return (
        <div className="columns" style={{ height: "100vh", alignItems: "center" }}>
            <div className="column">
                <Link to="/region">Search by ZipCode</Link>
            </div>
            <div className="column">
                <Link to="/cityname"> Search by Name</Link>
            </div>
        </div>
    )
}

export default Home;