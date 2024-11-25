import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import { useDisclosure } from "@mantine/hooks";
import {
  CalendarModal,
  ModalData,
} from "../appointment-modal/appointment-modal";
import { Appointment } from "../types";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./appointment-calendar.scss";

export function AppointmentCalendar() {
  const [events, setEvents] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment>();
  const [opened, { open, close }] = useDisclosure(false);

  const handleSelectAppointment = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    open();
  };

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setSelectedAppointment({ start, end });
    open();
  };

  const handleCreateEvent = (data: ModalData) => {
    setEvents([
      ...events,
      {
        start: data.startDate,
        end: data.endDate,
        title: data.firstName + data.lastName,
      },
    ]);
    close();
  };

  return (
    <div className="App">
      <Calendar
        localizer={momentLocalizer(moment)}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectAppointment}
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
      />
      <CalendarModal
        appointment={selectedAppointment}
        onClose={() => close()}
        opened={opened}
        onConfirm={handleCreateEvent}
      />
    </div>
  );
}
