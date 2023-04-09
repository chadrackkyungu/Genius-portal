import { ApproveLoanRoute, DashboardRoute, DeclineLoanRoute, LoansRoute } from 'components/RouteName';
import React from 'react'
import { Link } from 'react-router-dom';

function userSidebarLinks() {
    return (
        <>
            <li>
                <Link to={DashboardRoute} className="has-arrow waves-effect">
                    <i className="ti-layout-grid2-alt"></i> <span>My Projects</span>
                </Link>
            </li>
        </>
    )
}

export default userSidebarLinks