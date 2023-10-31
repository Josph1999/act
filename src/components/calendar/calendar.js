import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function BasicDatePicker({ formik }) {
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
    formik.setFieldValue("ends_at", newValue.format("DD/MM/YYYY HH:mm"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Controlled picker"
        value={value}
        onChange={(newValue) => handleChange(newValue)}
        ampm={false}
        disablePast
      />
    </LocalizationProvider>
  );
}
