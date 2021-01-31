import React from 'react'
import { makeStyles, Grid, Card, List, Typography, ListItem, CardHeader } from '@material-ui/core';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ListCardRight from './list-card-right'

const useStyles = makeStyles((theme) => ({
  card: {
    width: 'auto',
    borderRadius: 8,
    boxShadow: 'none',
    border: '1px solid #0002',
    '& .MuiList-padding': {
      paddingBottom: 0
    }
  },
  gridCardTop: {
    paddingTop: theme.spacing(1)
  },
  typography: {
    padding: theme.spacing(2, 0, 1, 1),
    marginLeft: 3,
    fontSize: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconHelp: {
    fontSize: 15,
    marginRight: theme.spacing(1),
  },
  list: {
    '&.MuiList-padding': {
      padding: theme.spacing(0,0,2,0)
    }
  },
  listItem: {
    padding: theme.spacing(0, 2, 0, 1),
  },
  typographyList: {
    color: theme.palette.secondary.main,
    fontSize: 12,
    fontWeight: 'bold',
  },
}))

function CardRightBottom({titulo, icon}) {

  const classes = useStyles();

  return (
    <Grid item lg={12} className={classes.gridCardTop}>
      <Card className={classes.card}>
        <Typography className={classes.typography}>
          {titulo}
        <LiveHelpIcon className={classes.iconHelp}/>
        </Typography>
        <List component="nav">
          <ListCardRight icon={icon} notice='Como Vencer a Procrastinação' info='Brenda Bailey-Hughes'/>
          <ListCardRight icon={icon} notice='Como Desenvolver a Autoconfiança' info='Tod Dewett'/>
          <ListCardRight icon={icon} notice='Técnicas de Comunicação Interpessoal' info='Dorie Clark'/>
        </List>
        <List component="nav" className={classes.list}>
          <ListItem button className={classes.listItem}>
            <CardHeader className={classes.listItem}
              title={<Typography variant="caption" className={classes.typographyList}>
                Exibir mais no LinkedIn Learning
              </Typography>}
            />
          </ListItem>
          </List>
      </Card>
    </Grid>
  )
}

export default CardRightBottom;