import React from 'react';
import { AppBar, Button, Typography } from '@material-ui/core';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useHeader } from './hook';

export const Header: React.FC = (): React.ReactElement => {
  const { isOnIndexPage, onCopy } = useHeader();

  return (
    <AppBar color="secondary" className={styles.header}>
      <div className={styles.headerTitleSection}>
        <Typography variant="subtitle2">Remote Presentations</Typography>
      </div>
      {isOnIndexPage ? null : (
        <>
          <div className={styles.headerCopyButtonSection}>
            <Button
              variant="contained"
              size="small"
              className={styles.headerCopyButton}
              onClick={onCopy}
            >
              Copy presentation link
            </Button>
          </div>

          <div className={styles.headerStartNewSection}>
            <Link to="/">
              <Typography variant="subtitle2">
                Start a new presentation
              </Typography>
            </Link>
          </div>
        </>
      )}
    </AppBar>
  );
};
