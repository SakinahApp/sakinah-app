import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box, Button } from "@mui/material";
import "./Style.css";
import ConfirmBooking from "./ConfirmBooking";

const isWeekend = (date: Dayjs) => {
  const day = date.day();
  return day === 0 || day === 6;
};

export default function StaticDatePickerDemo({
  therapist,
  visibility,
  setVisibility,
}) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-12-07"));
  const [time, setTime] = React.useState("11:00-12:00");

  const date = dayjs(value).format("LL");
  const day = dayjs(value).date();
  const month = dayjs(value).month();
  const year = dayjs().year();

  return (
    <Box sx={{}}>
      <ConfirmBooking
        therapist={therapist}
        visibility={visibility}
        setVisibility={setVisibility}
        date={date}
        time={time}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          shouldDisableDate={isWeekend}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Box
        style={{
          padding: "0px 20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: 0,
          marginTop: "-25px",
        }}
      >
        {[
          "08:00-09:00",
          "09:00-10:00",
          "10:00-11:00",
          "11:00-12:00",
          "12:00-13:00",
          "13:00-14:00",
          "14:00-15:00",
          "15:00-16:00",
          "16:00-17:00",
        ].map((item, index) => (
          <Button
            onClick={() => setTime(item)}
            disabled={index % 4 === 0}
            style={{
              padding: "2px 8px",
              background:
                item === time
                  ? "rgb(226, 109, 128)"
                  : index % 4
                  ? "white"
                  : "#e4e4e4",
              color:
                item === time
                  ? "white"
                  : index % 4
                  ? "rgb(226, 109, 128)"
                  : "white",
              border:
                index % 4 ? "1px solid rgb(226, 109, 128)" : "1px solid white",
              fontSize: 12,
              boxShadow: "none",
              margin: 5,
              fontWeight: 500,
              borderRadius: 6,
            }}
          >
            {item}
          </Button>
        ))}
      </Box>
      <Box
        style={{
          width: "100%",
          background: "rgb(245, 245, 245)",
          padding: "10px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "20px auto 10px",
          maxWidth: 270,
          fontSize: 14,
          borderRadius: "6px",
        }}
      >
        <p style={{ fontWeight: 600 }}>Chosen Date and Time</p>
        <p>{date}</p>
        <p>{time}</p>
      </Box>
    </Box>
  );
}
