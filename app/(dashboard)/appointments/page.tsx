"use client"

import { useState } from "react"
import Navbar from "@/components/common/navbar"
import SummaryCards from "@/components/pages/appointments/sumarry/summary"
import BookingLink from "@/components/pages/appointments/booking-link"
import AppointmentsTable from "@/components/pages/appointments/appointments-table"
import Pagination from "@/components/ui/pagination"
import { useSidebar } from "@/contexts/sidebar-context"
import { Appointment } from "@/types/appointment"

const generateAppointments = (): Appointment[] => {
  const times = ["09:00", "10:00", "11:00", "12:00", "02:00", "03:00", "04:00", "05:00"]
  const repairTypes = ["Screen", "Battery", "Software", "Back Glass"]
  const devices = ["Apple/Iphone 13pro", "Apple/Iphone 14", "Samsung Galaxy S21", "Apple/Ipad Pro"]
  const names = ["Jane.D", "John.S", "Sarah.M", "Mike.T", "Emma.W"]
  
  const appointments: Appointment[] = []
  
  for (let i = 1; i <= 30; i++) {
    appointments.push({
      id: i.toString(),
      clientName: names[i % names.length],
      clientPhone: `0196068576${(i % 10).toString()}`,
      clientEmail: `client${i}@gmail.com`,
      device: devices[i % devices.length],
      repairType: repairTypes[i % repairTypes.length],
      date: "02/06/2026",
      slotNo: ((i - 1) % 3) + 1,
      startTime: times[i % times.length],
    })
  }
  
  return appointments
}

const mockAppointments = generateAppointments()

export default function AppointmentsPage() {
  const { open } = useSidebar()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const totalPages = Math.ceil(mockAppointments.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAppointments = mockAppointments.slice(startIndex, endIndex)

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden w-full">
      <Navbar title="Appointments" onMenuClick={open} />
      
      <div className="flex-1 lg:mt-2 overflow-y-auto overflow-x-hidden w-full pt-20 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="mx-auto lg:ml-22 max-w-8xl min-w-0 space-y-4 sm:space-y-5 md:space-y-6">
          {/* Summary Cards */}
          <div className="min-w-0 w-full">
            <SummaryCards />
          </div>

          {/* Booking */}
          <div className="min-w-0 w-full">
            <BookingLink />
          </div>

          {/* Appointments Table */}
          <div className="min-w-0 w-full overflow-hidden">
            <AppointmentsTable appointments={currentAppointments} />
          </div>

          {/* Pagination */}
          <div className="flex justify-center pt-2 sm:pt-4 min-w-0 w-full">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
