import { ApproveLoanRoute, DashboardRoute, DeclineLoanRoute, LoansRoute } from 'components/RouteName';
import React from 'react'
import { Link } from 'react-router-dom';

function userSidebarLinks() {
    return (
        <>
            <li>
                <Link to="/#" className="has-arrow waves-effect">
                    <i className="ti-layout-grid2-alt"></i> <span>My Projects</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                    <li>
                        <Link to={DashboardRoute}>
                            <i className="ti-house"></i> <span> My projects </span>
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    )
}

export default userSidebarLinks