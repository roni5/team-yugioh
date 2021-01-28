import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/LockOutlined";
import { Clear } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: "10% 0",
    width: "400px",
    border: "solid 2px black"
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
    marginBottom: "5%"
  },
  mainText: {
    padding: "5% 10% 5% 10%",
    fontSize: 14,
    color: "#4d5055"
  },
  popoverButton: {
    borderRadius: 0,
    borderBottom: "none",
    width: "100%"
  },
  cancellButton: {
    padding: "8px 35px",
    margin: "30px 10px",
    fontSize: 16
  },
  continueButton: {
    padding: "8px 40px",
    margin: "30px 10px",
    fontSize: 16,
    color: "white"
  },
  clearIcon: {
    marginLeft: "-20px"
  }
});

function Modal(props) {
  const classes = useStyles();
  const { onClose, open, userName, variant } = props;

  const handleClose = () => {
    onClose();
  };

  console.log(props);

  const handleSubmit = () => {
    //api call here
    handleClose();
  };

  const title = [
    "Remove User",
    `Are you sure you want to cancel the invitation to ${props.email}`,
    "Delete Template"
  ];

  const mainText = [
    "Removes the user from your organization and frees up a CalendApp license.",
    "Pending invitations will no longer include this template."
  ];

  const buttonText = ["Remove", "Yes", "Delete"];

  function getTitle(variant) {
    switch (variant) {
      case "remove_user":
        return title[0];
      case "remove_invite":
        return title[1];
      case "remove_template":
        return title[2];
      default:
        return "";
    }
  }

  function getMainText(variant) {
    switch (variant) {
      case "remove_user":
        return mainText[0];
      case "remove_invite":
        return "";
      case "remove_template":
        return mainText[1];
      default:
        return "";
    }
  }

  function getButtonText(variant) {
    switch (variant) {
      case "remove_user":
        return buttonText[0];
      case "remove_invite":
        return buttonText[1];
      case "remove_template":
        return buttonText[2];
      default:
        return "";
    }
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
          {getTitle(props.variant)}
        </Typography>
        {variant === "remove_user" ? (
          <Typography variant="h5" className={classes.subtitle}>
            {userName}
          </Typography>
        ) : null}
        <Typography variant="body1" className={classes.mainText}>
          {getMainText(props.variant)}
        </Typography>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.continueButton}
            onClick={handleSubmit}
          >
            {getButtonText(props.variant)}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.cancellButton}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default function RemoveModal({ userName, email, variant }) {
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
          startIcon={<Clear />}
          classes={{ root: classes.popoverButton }}
          onClick={handleClickOpen}
        >
          Remove
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          userName={userName}
          variant={variant}
          email={email}
        />
      </div>
    )
}
