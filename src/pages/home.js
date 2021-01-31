import React from 'react'
import { Box, Container, makeStyles, Grid, Hidden } from '@material-ui/core';
import AppBarComponent from '../component/app-bar'
import CardLeft from '../component/card-left'
import CardPublish from '../component/card-publish'
import DividerCard from '../component/divider-card'
import CardPost from '../component/card-post'
import CardRightTop from '../component/card-right-top'
import CardRightBottom from '../component/card-right-bottom'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  card: {
    width: 'auto',
    borderRadius: 8,
    boxShadow: 'none',
    border: '1px solid #0002',
  },
  container: {
    margin: theme.spacing(6, 0, 0, 17)
  },
}))

function Home({ darkMode, setDarkMode }) {

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBarComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Container className={classes.container}>
        <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item lg={2} md={2} sm={2}>
            <CardLeft />
          </Grid>
        </Hidden>
          <Grid item lg={6} md={8} sm={10} className={classes.grid}>
            <CardPublish/>
            <DividerCard/>
            <CardPost/>
          </Grid>
          <Hidden mdDown>
            <Grid item lg={3}>
              <CardRightTop titulo='LinkedIn Notícias' icon='circle'/>
              <CardRightBottom titulo='Os cursos mais visualizados hoje' icon='number'/>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home;