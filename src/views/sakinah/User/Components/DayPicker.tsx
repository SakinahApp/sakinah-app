import * as React from "react"
import dayjs, { Dayjs } from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import { Box, Button } from "@mui/material"
import "./Style.css"
import ConfirmBooking from "./ConfirmBooking"
import SnackbarX from "./SnackbarX"

const isWeekend = (date: Dayjs) => {
  const day = date.day()
  return day === 0 || day === 6
}

export default function DayPicker({ therapist, open, setOpen }) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs())
  const [time, setTime] = React.useState("09:00")
  const [openSnackbar, setOpenSnackbar] = React.useState(false)

  const date = dayjs(value).format("LL")

  // console.log("date", date);

  // const day = dayjs(value[0]).date();
  // const month = dayjs(value).month();
  // const year = dayjs().year();

  return (
    <Box sx={{}}>
      <ConfirmBooking
        therapist={therapist}
        open={open}
        setOpen={setOpen}
        setOpenSnackbar={setOpenSnackbar}
        date={date}
        time={time}
      />
      <SnackbarX
        open={openSnackbar}
        setOpen={setOpenSnackbar}
        backgroundColor="#32a676"
        message="The session has been successfully booked!"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          shouldDisableDate={isWeekend}
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
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
          marginTop: "15px",
        }}
      >
        {[
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
        ].map((item, index) => (
          <Button
            key={index}
            onClick={() => setTime(item)}
            disabled={index % 5 === 0}
            style={{
              padding: "2px 8px",
              background:
                item === time
                  ? "rgb(226, 109, 128)"
                  : index % 5
                  ? "white"
                  : "#e4e4e4",
              color:
                item === time
                  ? "white"
                  : index % 5
                  ? "rgb(226, 109, 128)"
                  : "white",
              border:
                index % 5 ? "1px solid rgb(226, 109, 128)" : "1px solid white",
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
  )
}
