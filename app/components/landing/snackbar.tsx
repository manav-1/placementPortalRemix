import { Text, createStyles } from "@mantine/core";
import React, { useContext, useState } from "react";

const useStyles = createStyles((theme) => ({
  snackbarContainer: {
    position: "fixed",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: theme.colorScheme === "dark" ? theme.black : theme.white,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: theme.shadows.lg,
    zIndex: 1000,
  },

  snackbarDismiss: {
    cursor: "pointer",
  },
}));

export default function Snackbar() {
  const { classes } = useStyles();
  const snackbarContext = useContext(SnackbarContext);

  return (
    <div className={classes.snackbarContainer}>
      <Text>{snackbarContext.msg}</Text>
      <div
        onClick={snackbarContext.onClose}
        className={classes.snackbarDismiss}
      >
        &times;
      </div>
    </div>
  );
}

const SnackbarContext = React.createContext({
  msg: "",
  isDisplayed: false,
  displayMsg: (message: string) => {},
  onClose: () => {},
});

export { SnackbarContext };

export const SnackBarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [msg, setMsg] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);
  const displayHandler = (msg: string) => {
    setMsg(msg);
    setIsDisplayed(true);
    setTimeout(() => {
      closeHandler();
    }, 3000); // close snackbar after 3 seconds
  };
  const closeHandler = () => {
    setIsDisplayed(false);
  };
  return (
    <SnackbarContext.Provider
      value={{
        msg,
        isDisplayed,
        displayMsg: displayHandler,
        onClose: closeHandler,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
