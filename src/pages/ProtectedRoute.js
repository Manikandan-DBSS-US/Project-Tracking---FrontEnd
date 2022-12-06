import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {firstUser} = useSelector(store => store.userReducer)
    if(!firstUser) return Navigate("/")
    return children;
}

export default ProtectedRoute
