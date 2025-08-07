import React from "react"
import { Routes, Route, Navigate } from "react-router"
import Layout from "@/components/layout/Layout"
import Dashboard from "@/pages/dashboard/Dashboard"
import Auth from "@/pages/auth"

export function Router() {
  return (
    <Routes>
      <Route index element={<Navigate to={'login'} />} />
      {/* <Route path="about" element={<About />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route> */}

      <Route path="login" element={<Auth />} />
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
