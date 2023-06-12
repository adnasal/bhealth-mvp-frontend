import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import AppointmentsPageAdmin from './pages/appointments-page/Appointments-page'
import AdminDashboardPage from './pages/dashboard/Admin-dashboard'
import HistoryPage from './pages/history-page/HistoryPage'
import RequestsPage from './pages/requests/RequestsPage'
import NotificationsPage from './pages/notifications/NotificationsPage'


const AdminDashboardWrapper = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout><AdminDashboardPage /></Layout>} />
                <Route path="/history" element={<Layout><HistoryPage /></Layout>} />
                <Route path="/appointments" element={<Layout><AppointmentsPageAdmin /></Layout>} />
                <Route path="/requests" element={<Layout><RequestsPage /></Layout>} />
                <Route path="/notifications" element={<Layout><NotificationsPage /></Layout>} />
                <Route path="*" element={<Navigate to="/admin-dashboard" replace />} />
            </Routes>
        </>
    )
}

export default AdminDashboardWrapper