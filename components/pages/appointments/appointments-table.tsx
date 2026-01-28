"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Appointment } from "@/types/appointment"

interface AppointmentsTableProps {
  appointments: Appointment[]
}

export default function AppointmentsTable({ appointments }: AppointmentsTableProps) {
  return (
    <Card className="border-border bg-card w-full min-w-0 max-w-full">
      <CardContent className="p-0 max-w-full">
        <div className="overflow-x-auto w-full max-w-full">
          <table className="w-full divide-y divide-border" style={{ minWidth: '800px' }}>
              <thead className="bg-card">
                <tr className="border-b border-border">
                  <th className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 text-left text-[10px] xs:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap min-w-[100px] sm:min-w-[120px]">
                    Client Name
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 text-left text-[10px] xs:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap min-w-[110px] sm:min-w-[130px]">
                    Client Phone
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 text-left text-[10px] xs:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap min-w-[150px] sm:min-w-[180px]">
                    Client mail
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 text-left text-[10px] xs:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap min-w-[130px] sm:min-w-[160px]">
                    Device
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 text-left text-[10px] xs:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap min-w-[100px] sm:min-w-[120px]">
                    Repair Type
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 text-left text-[10px] xs:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap min-w-[80px] sm:min-w-[100px]">
                    Date
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 text-left text-[10px] xs:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap min-w-[70px] sm:min-w-[90px]">
                    Slot no
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 text-left text-[10px] xs:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap min-w-[80px] sm:min-w-[100px]">
                    Start Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {appointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className="hover:bg-accent/50 transition-colors duration-150"
                  >
                    <td className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 cursor-pointer font-medium">
                        {appointment.clientName}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-foreground">
                        {appointment.clientPhone}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-foreground">
                        {appointment.clientEmail}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-foreground">
                        {appointment.device}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-foreground">
                        {appointment.repairType}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-foreground">
                        {appointment.date}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-foreground">
                        {appointment.slotNo}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-foreground">
                        {appointment.startTime}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </CardContent>
    </Card>
  )
}
