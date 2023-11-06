/* eslint-disable */

import React from 'react'
import './appsidebarnav.css'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

export const AppSidebarNav = ({ items }) => {
  const location = useLocation()

  const navLink = (name) => {
    return (
      <>
              {name && <span className="nav-link-text">{name}</span>}
      </>
    )
  }  

  const navItem = (item, index) => {
    const { component, name, ...rest } = item
    const Component = component
    return (
      <Component
        {...(rest.to && !rest.items && {
          component: NavLink
        })}
        key={index}
        {...rest}
      >
      {navLink(name)}
      </Component>
    )
  }

  const navGroup = (item, index) => {
    const { component, name, to, parent, ...rest } = item
    const Component = component || NavLink // <--- Utilisez NavLink comme composant par défaut
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name)}
        visible={location.pathname.startsWith(to)}
        // onClick={
        //   parent
        //     ? () => {
        //         if (to) {
        //           navigate(to)
        //         }
        //       }
        //     : null
        // }
        to={to}  // <--- Ajoutez l'attribut 'to' pour naviguer
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
      </Component>
    )
  }


  return (
    <div className="sidebar-nav-container">
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </React.Fragment>
    </div>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default AppSidebarNav
