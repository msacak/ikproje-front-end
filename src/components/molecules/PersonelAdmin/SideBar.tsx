import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'

function SideBar() {
    return (
        <>
            <div className="logo-box">
                <NavLink to={'/personeladmin'} className="logo-text">
                    HR Manage
                </NavLink>
                <a id="sidebar-close"><i className="material-icons">close</i></a>
                <a style={{ cursor: 'pointer' }} id="sidebar-state">
                    <i className="material-icons">adjust</i>
                    <i className="material-icons compact-sidebar-icon">panorama_fish_eye</i>
                </a>
            </div>
            <div className="page-sidebar-inner slimscroll">
                <ul className="accordion-menu">
                    <li>
                        <NavLink
                            to="/personeladmin"
                            className={({ isActive }) => isActive ? 'active-page' : ''}
                        >
                            <i className="material-icons-outlined">home</i>Anasayfa
                        </NavLink>
                    </li>
                    <li>
                        <a><i className="material-icons-outlined">list</i>İzin Listesi</a>
                    </li>
                    <li>
                        <a>
                            <i className="material-icons-outlined">add</i>İzin Talebi
                        </a>
                    </li>
                    <li className="sidebar-title">
                        Zimmet Yönetimi
                    </li>
                    <li>
                        <a><i className="material-icons-outlined">list</i>Zimmet Listesi</a>
                    </li>
                    <li className="sidebar-title">
                        Harcama Yönetimi
                    </li>
                    <li>
                        <a><i className="material-icons-outlined">list</i>Harcama Listesi</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar