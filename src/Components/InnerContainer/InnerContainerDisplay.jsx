import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import InnerHeader from '../InnerHeader';
import Overview from '../Overview';
import Insights from '../Insights';

import { innerContainerStyle } from './InnerContainerStyle';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={0}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function InnerContainerDisplay({ tabValue, handleTabChange }) {
  const { rootStyle, tabsStyle } = innerContainerStyle();

  return (
    <>
      <InnerHeader isFeedBack={false} />
      <TabPanel>
        <TabPanel>
          <AppBar position="static" className={rootStyle}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="inner app choicer"
              indicatorColor="secondary"
              className={tabsStyle}
            >
              <Tab label="Overview" {...a11yProps(0)} />
              <Tab label="Insights" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={tabValue} index={0}>
            <Overview />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Insights />
          </TabPanel>
        </TabPanel>
      </TabPanel>
    </>
  );
}

export default InnerContainerDisplay;
