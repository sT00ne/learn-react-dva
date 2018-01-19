import React from 'react';
import { connect } from 'dva';
import styles from './Error.css';
import MainLayout from '../components/MainLayout/MainLayout';

function Error({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
            Route Component: Error
        </div>
    </MainLayout>

  );
}


export default connect()(Error);
