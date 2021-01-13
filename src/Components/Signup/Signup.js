import React, { useState } from "react";
import "./Signup.css";
import {} from "./Signup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Signup } from "../../functions/user";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import MaterialUIPickers from '../Date/DatePicker' 
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      width: "50%",
      flexGrow: 1,
      backgroundColor: "white",

      marginLeft: "25%",
      marginRight: "25%",
      marginTop: "3%",
      borderRadius: "30px",
      border: "solid rgb(179, 173, 173)",
      borderRadius: "35px",
      boxShadow: "5px 5px grey",
    },
  },
  center: {
    marginTop: "2%",
  },
  width: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Siup(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState(null);
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [blood, setBlood] = useState("");
  const [lastDate, setLastDate] = useState("");

  const handleSubmit = async () => {
    let result;
    const data = {
      username,
      password,
      dob,
      email,
      gender,
      phoneNo,
      blood,
      lastDate,
    };

    console.log(data);

    try {
      result = await Signup(data);
      localStorage.setItem("AUTH", true);
      localStorage.setItem("User_details", JSON.stringify(result));
      props.history.push("/dashboard");
    } catch (err) {
      console.log(err);
      const {
        err: { code },
      } = err;
      if (code === "23505") {
        alert("The username already exist");
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="bgpic">
      <h1 style={{ textAlign: "center" }}>Sign-Up</h1>
      <div style={{ textAlign: "center" }}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
                className={classes.center}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                className={classes.center}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                className={classes.center}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Phone No."
                variant="outlined"
                className={classes.center}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={6}>
              <DatePicker
                placeholderText="DOB"
                className="date"
                selected={dob}
                onChange={(date) => setDob(date)}
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()}
              />
            </Grid> */}
            
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="gender"
                variant="outlined"
                className={classes.center}
                onChange={(e) => setGender(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Blood Group"
                variant="outlined"
                className={classes.center}
                onChange={(e) => setBlood(e.target.value)}
              />
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={6}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date Of Birth"
                  views={['year', 'month', 'date']}
                  onChange={(date) => setDob(date)}
                  format="yyyy-MM-dd"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            {/* <Grid item xs={6}>
              <DatePicker
                placeholderText="last donation date"
                className="date"
                selected={lastDate}
                onChange={(date) => setLastDate(date)}
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()}
              />
            </Grid> */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={6}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Last Donation Date"
                  views={['year', 'month', 'date']}
                  onChange={(date) => setLastDate(date)}
                  format="yyyy-MM-dd"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
        </div>
      </div>
                  
      <div className="sign-button">
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}
