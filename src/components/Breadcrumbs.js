import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/') //this will split each path example /help/contact it will be help | contact as array
    .filter(crumb => crumb !== '') //this will remove blank space example /help/contact/(space)(space)
    .map(crumb => {
        currentLink += `/${crumb}`

        return(
            <div className='crumb' key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })
  return (
    <div className='breadcrumbs'>{crumbs}</div>
  )
}

export default Breadcrumbs