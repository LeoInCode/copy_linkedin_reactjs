import React from 'react'
import { makeStyles, Grid, Card, CardContent, Typography, List, ListItem } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import PanoramaIcon from '@material-ui/icons/Panorama';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 'auto',
    borderRadius: 8,
    boxShadow: 'none',
    border: `1px solid ${theme.palette.type === 'dark' ? '#fff5' : '#0002'}`,
  },
  gridCardTop: {
    paddingTop: theme.spacing(1)
  },
  cardContent: {
    padding: theme.spacing(0,2,0,2),
    '&:last-child': {
      paddingBottom: theme.spacing(1),
    }
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${theme.palette.type === 'dark' ? '#fff5' : '#0002'}`,
    borderRadius: 20
  },
  iconCreate: {
    color: theme.palette.type === 'dark' ? '#fff' : '#0009',
  },
  typography: {
    paddingLeft: theme.spacing(1),
    fontSize: 13,
    color: theme.palette.type === 'dark' ? '#fff' : '#0008',
    fontWeight: 'bold'
  },
  list: {
    padding: theme.spacing(0),
    width: 'auto',
    display: 'flex',
    justifyContent: 'center'
  },
  itemList: {
    padding: theme.spacing(1,0,1,0),
    '&:first-child': {
      paddingLeft: theme.spacing(1)
    }
  },
  iconPanorama: {
    color: '#70b5f9',
    fontSize: 25
  },
  iconTube: {
    color: '#7fc15e',
    fontSize: 25
  },
  iconEvent: {
    color: '#e7a33e',
    fontSize: 25
  },
  iconFormat: {
    color: '#f5987e',
    fontSize: 25
  }
}))

function CardPublish() {

  const classes = useStyles();

  return (
    <Grid item lg={12} md={12}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <List component="nav">
            <ListItem button className={classes.listItem}>
              <CreateIcon className={classes.iconCreate} />
              <Typography variant="body2" component="p" className={classes.typography}>
                Começar publicação
              </Typography>
            </ListItem>
          </List>
          <List component="nav" className={classes.list}>
            <ListItem button className={classes.itemList}>
              <PanoramaIcon className={classes.iconPanorama} />
              <Typography className={classes.typography}>Foto</Typography>
            </ListItem>
            <ListItem button className={classes.itemList}>
              <YouTubeIcon className={classes.iconTube} />
              <Typography className={classes.typography}>Vídeo</Typography>
            </ListItem>
            <ListItem button className={classes.itemList}>
              <EventIcon className={classes.iconEvent} />
              <Typography className={classes.typography}>Evento</Typography>
            </ListItem>
            <ListItem button className={classes.itemList}>
              <FormatIndentIncreaseIcon className={classes.iconFormat} />
              <Typography className={classes.typography}>Escrever Artigo</Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CardPublish;