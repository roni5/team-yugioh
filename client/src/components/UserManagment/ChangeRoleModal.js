import React from "react";
import PropTypes from "prop-types";
import { makeStyles, NativeSelect} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: "10% 0",
    width: "400px",
    border:"solid 2px black"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "5%",
    color: "#4d5055"
  },
  subtitle: {
    color: "#4d5055",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom:"5%"
  },
  mainText:{
      padding:"5% 10% 5% 10%",
      fontSize:14,
      color: "#4d5055",
  },
  popoverButton:{
    borderRadius:0,
    borderBottom:"none"
},
cancellButton:{
    padding:"8px 35px",
    margin:"30px 10px",
    fontSize:16

},
continueButton:{
    padding:"8px 40px",
    margin:"30px 10px",
    fontSize:16,
    color:"white"
},
selectDropdown:{
    margin: "8px",
    minWidth: 120,
    fontSize:16
}
});

function Modal(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, userName } = props;

  const [state, setState] = React.useState({
    Role: ""
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSubmit = ()=>{
    //api call here
    handleClose()
}

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="xl"
    >
      <div className={classes.root}>
        <Typography variant="h1" className={classes.title}>
          Modify Role
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          {userName}
        </Typography>

        <NativeSelect
          value={state.Role}
          onChange={handleChange}
          name="Role"
          className={classes.selectDropdown}
          inputProps={{ "aria-label": "age" }}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Owner">Owner</option>
        </NativeSelect>
        <Typography variant="body1" className={classes.mainText}>
          Users can create and manage their own personal event types. They can
          also be added as Managers of individual teams.
        </Typography>
        <div>
            <Button variant="contained" color="primary" className={classes.continueButton} onClick={handleSubmit}>Apply</Button>
            <Button variant="outlined" color="primary" className={classes.cancellButton} onClick={handleClose}>Cancel</Button>
        </div>
      </div>
    </Dialog>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function ChangeRoleModal({userName}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<LockIcon />}
        classes={{ root: classes.popoverButton }}
        onClick={() => handleClickOpen()}
      >
        Change role
      </Button>
      <Modal open={open} onClose={handleClose} userName={userName} />
    </div>
  );
}
