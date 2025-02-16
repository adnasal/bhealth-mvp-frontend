import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './layout'
import HistoryPage from './pages/history-page/history-page'
import { AppointmentsPage } from './pages/appointments-page'
import PatientDashboard from './pages/dashboard/patient-dashboard'

const PatientDashboardWrapper = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout><PatientDashboard /></Layout>} />
                <Route path="/history" element={<Layout><HistoryPage /></Layout>} />
                <Route path="/appointments" element={<Layout><AppointmentsPage /></Layout>} />
                {/* <Route path="/requests" element={<Layout><RequestsPage /></Layout>} /> */}
                <Route path="*" element={<Navigate to="/patient-dashboard" replace />} />
            </Routes>
        </>
    )
}

export default PatientDashboardWrapper