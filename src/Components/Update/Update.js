import React, { useEffect, useState } from "react";
import { MyUpdate } from "../../functions/user";
import "./Update.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SnackBar from "../SnackBar/SnackBar";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  bg:{
    backgroundColor:"#eeeeee",
    minHeight: "89vh",
  },
  text: {
    marginTop: "1%",
    width: "100%",
    backgroundColor:"white",
  },
  buttonDiv: {
    textAlign: "center",
    marginTop: "2%",
  },
  button1: {
    color: "white",
    backgroundColor: "#ea4848",
    width: "20%",
    paddingTop: "1%",
    marginLeft:15,
    marginRight:15,
    marginBottom:20,
    // fontSize:"15px"
  },
  button2: {
    color: "white",
    backgroundColor: "#364653",
    width: "20%",
    paddingTop: "1%",
    marginLeft:15,
    marginRight:15,
    marginBottom:20,
    // fontSize:"15px"
  },
}));

export default function UserUpdate(props) {
  let userdetails = JSON.parse(localStorage.getItem("User_details"));
  const [username, setUname] = useState(userdetails.username);
  const [email, setUEmail] = useState(userdetails.email);
  const [phoneNo, setUNo] = useState(userdetails.phoneNo);
  const [snack, setSnack] = useState(false);
  const [succerr, setSuccerr] = useState("");
  const [descri, setDescri] = useState("");
  const handleEmail = (e) => {
    setUEmail(e.target.value);
  };
  const handleNo = (e) => {
    setUNo(e.target.value);
  };

  const handleUpdate = async () => {
    const data = {
      email,
      phoneNo,
      username,
    };
    let result;
    try {
      result = await MyUpdate(data);
      setSnack(true)
      setSuccerr("success")
      setDescri("Updated successfully!");
      const udata = JSON.parse(localStorage.getItem("User_details"));
      udata.email = data.email;
      udata.phoneNo = data.phoneNo;
      
      localStorage.setItem("User_details", JSON.stringify(udata));
      // window.location.href = "/profile";
    } catch (err) {
      setSuccerr("success")
      setDescri("Cannot update at the moment!");
    }
  };

  const classes = useStyles();
  const [detls, setDetls] = useState({});

  let udetails = JSON.parse(localStorage.getItem("User_details"));

  useEffect(() => {
    setDetls(udetails);
    setUname(userdetails.username);
  }, []);

  return (
    <div className={classes.bg}>
      <div className="outer">
        <div className="p-head">
          <h1>Update Details</h1>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="details-outer">
          <div className="flexing">
            <div className="p-details">
              <h3>Username</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.username}
                variant="outlined"
                className={classes.text}
                disabled="true"
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Email id</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>

            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.email}
                variant="outlined"
                className={classes.text}
                onChange={handleEmail}
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Contact Number</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.phoneNo}
                variant="outlined"
                className={classes.text}
                onChange={handleNo}
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Gender</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>

            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.gender}
                variant="outlined"
                disabled="true"
                className={classes.text}
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Blood group</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>

            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.blood}
                variant="outlined"
                disabled="true"
                className={classes.text}
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Date of birth</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>

            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={String(detls.dob).slice(0,10)}
                variant="outlined"
                disabled="true"
                className={classes.text}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonDiv}>
        <Button
          variant="contained"
          className={classes.button2}
          onClick={handleUpdate}
          
        >
          Submit
        </Button>
        <Button
          variant="contained"
          className={classes.button1}
          href="/profile"
        >
          Cancel
        </Button>
        {snack && (
        <SnackBar
          con={succerr}
          stat={snack}
          fun={setSnack}
          desc={descri}
        ></SnackBar>
      )}
      </div>
    </div>
  );
}
