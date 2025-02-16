import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

interface Props {
    children: JSX.Element
}

interface accessDataType {
    "User Type": string
    access: string
    refresh: string
}


const AuthRoute: React.FC<Props> = ({ children }) => {

    // let accessData: accessDataType | null = localStorage.getItem("accessData") ? JSON.parse(localStorage.getItem("accessData") ?? '') : null
    let accessData = true
    return (
        <>
            {/* {accessData ?
                accessData?.["User Type"] === "Patient" ? children : <Navigate to="/" replace />
                : <Navigate to="/login" replace />} */}
                {accessData && children }
        </>
    )
}

export default AuthRoute