import React, { useEffect } from "react";
import { Button, Modal, TextInput } from "@mantine/core";
import { Appointment } from "../types";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import "./appointment-modal.scss";

interface Props {
  appointment?: Appointment;
  opened: boolean;
  onClose: () => void;
  onConfirm: (data: ModalData) => void;
}

export interface ModalData {
  firstName: string;
  lastName: string;
  startDate: Date;
  endDate: Date;
}

const nonEmptyValidation = (value: string) => {
  return value.length > 0 ? null : "Value must not be empty";
};

export function CalendarModal({
  appointment,
  opened,
  onClose,
  onConfirm,
}: Props) {
  const form = useForm({
    mode: "uncontrolled",
    validateInputOnBlur: ["firstName"],
    initialValues: {
      firstName: "",
      lastName: "",
      startDate: appointment?.start || new Date(),
      endDate: appointment?.end || new Date(),
    } as ModalData,
    validate: {
      firstName: nonEmptyValidation,
    },
  });

  useEffect(() => {
    form.setValues({
      firstName: "",
      lastName: "",
      startDate: appointment?.start || new Date(),
      endDate: appointment?.end || new Date(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointment]);

  const onSubmit = (data: ModalData) => {
    onConfirm(data);
  };

  return (
    <Modal
      className="calendar--modal"
      title="BHealth"
      opened={opened}
      onClose={onClose}
      size="lg"
    >
      <form onSubmit={form.onSubmit(onSubmit)}>
        <div className="input-row">
          <TextInput
            withAsterisk
            label="First Name"
            key={form.key("firstName")}
            {...form.getInputProps("firstName")}
          />
          <TextInput
            withAsterisk
            label="Last Name"
            key={form.key("lastName")}
            {...form.getInputProps("lastName")}
          />
        </div>
        <div className="input-row">
          <DateTimePicker
            label="Appointment start date"
            placeholder="Pick date and time"
            key={form.key("startDate")}
            {...form.getInputProps("startDate")}
          />
          <DateTimePicker
            label="Appointment end date"
            placeholder="Pick date and time"
            key={form.key("endDate")}
            {...form.getInputProps("endDate")}
          />
        </div>
        <Button variant="filled" type="submit">
          Save
        </Button>
      </form>
    </Modal>
  );
}
