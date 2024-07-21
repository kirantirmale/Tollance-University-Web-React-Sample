import React from 'react'
import {
    Link, useLocation
} from "react-router-dom";

export const Menu = () => {
    return (
            <ul className="justify-content-center">
                <li className="tl-nav-item">
                    <Link to='/' role="button">
                        Home
                    </Link>
                </li>

                <li className="tl-nav-item">
                    <Link to='/research' role="button">
                        Research
                    </Link>
                </li>

                {/* <li className="tl-nav-item">
                    <Link to='/study' role="button">
                        Study
                    </Link>
                </li> */}

                <li className="tl-nav-item">
                    <Link to='/transfer' role="button">
                        Transfer
                    </Link>
                </li>
                <li className="tl-nav-item">
                    <Link to='/transcript' role="button">
                        Transcript
                    </Link>
                </li>
                <li className="tl-nav-item">
                    <Link to='/admission' role="button">
                    Admission
                    </Link>
                </li>
            </ul>
    )
}
