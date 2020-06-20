import React from 'react'
import './searchbox.style.css'

export const SearchBox = ({ placeholder, changehandler }) => (
    <input className="search" type="search" placeholder={placeholder} onChange={changehandler} />

)