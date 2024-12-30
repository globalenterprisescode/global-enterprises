"use client"

import DashboardSidebar from '@/src/components/dashboard/DashboardSidebar'
import AuthGuard from '@/src/components/AuthGuard'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGuard>
      <div className="flex h-screen bg-gray-100">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </AuthGuard>
  )
}