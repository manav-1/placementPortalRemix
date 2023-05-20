import { Text, createStyles } from '@mantine/core';
import React, { useCallback, useContext, useMemo, useState } from 'react';

const useStyles = createStyles((theme) => ({
  snackbarContainer: {
    position: 'fixed',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.black : theme.colors.blue,
    color: theme.black,
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: theme.shadows.lg,
    zIndex: 1000,
  },

  snackbarDismiss: {
    cursor: 'pointer',
  },
}));

export default function Snackbar() {
  const { classes } = useStyles();
  const { msg, onClose } = useContext(SnackbarContext);

  return (
    <div className={classes.snackbarContainer}>
      <Text>{msg}</Text>
      <div
        onClick={onClose}
        onKeyDown={onClose}
        role="button"
        tabIndex={0}
        className={classes.snackbarDismiss}
      >
        &times;
      </div>
    </div>
  );
}

const SnackbarContext = React.createContext({
  msg: '',
  isDisplayed: false,
  displayMsg: (message: string) => {},
  onClose: () => {},
});

export { SnackbarContext };

export function SnackBarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [msg, setMsg] = useState('');
  const [isDisplayed, setIsDisplayed] = useState(false);
  const displayHandler = useCallback((message: string) => {
    setMsg(message);
    setIsDisplayed(true);
    setTimeout(() => {
      closeHandler();
    }, 3000); // close snackbar after 3 seconds
  }, []);

  const providerValue = useMemo(
    () => ({
      msg,
      isDisplayed,
      displayMsg: displayHandler,
      onClose: closeHandler,
    }),
    [msg, isDisplayed, displayHandler],
  );

  const closeHandler = () => {
    setIsDisplayed(false);
  };
  return (
    <SnackbarContext.Provider value={providerValue}>
      {children}
    </SnackbarContext.Provider>
  );
}
