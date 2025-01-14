import React, { useEffect, useState } from "react";
import { Details } from "../../functions/user";
import "./Profile.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
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
  },
  buttonDiv:{
    textAlign:"center",
    marginTop:"2%"
  },
  button:{
    color:"white",
    backgroundColor:"#ea4848",
    width:"25%",
    paddingTop:"1.5%",
    marginBottom:20,
  },
}));

export default function UserProfile() {
  const [detls, setDetls] = useState({});
  const classes = useStyles();
  let udetails = JSON.parse(localStorage.getItem("User_details"));
  console.log(udetails)
  useEffect(() => {
    setDetls(udetails);
  }, []);
  
  return (
    <div className={classes.bg}>
      <div className="outer">
        <div className="p-head">
          <h1>Details</h1>
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
            <div className="p-details">
              <h4>{detls.username}</h4>
            </div>
          </div>
          <div className="flexing">
            <div className="p-details">
              <h3>Email id</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>{detls.email}</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Contact Number</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>{detls.phoneNo}</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Gender</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>{detls.gender}</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Blood group</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>{detls.blood}</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Date of birth</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>{String(detls.dob).slice(0,10)}</h4>
            </div>
          </div>
        </div>
        
        <div className={classes.buttonDiv}>
      <Button variant="contained" className={classes.button} href="/update">
        Update
      </Button>
      </div>

      </div>
    </div>
  );
}
