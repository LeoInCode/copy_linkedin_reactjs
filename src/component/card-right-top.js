import React from 'react'
import { makeStyles, Grid, Card, List, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  accordion: {
    paddingTop: theme.spacing(0),
    '&.MuiAccordion-root': {
      '&:before': {
        display: 'none'
      }
    },
    '&.MuiPaper-elevation1': {
      boxShadow: 'none'
    },
  },
  accordionSumary: {
    display: 'flex',
    justifyContent: 'start',
    paddingLeft: theme.spacing(3),
    '& .MuiAccordionSummary-content': {
      flexGrow: 0,
    },
    '& .MuiIconButton-root': {
      paddingLeft: theme.spacing(0)
    }
  },
  typographyAccordion: {
    color: theme.palette.type === 'dark' ? '#fff' : '#00000099',
    fontSize: 12,
    fontWeight: 'bold'
  },
  accordionDetails: {
    padding: theme.spacing(0)
  },
  list: {
    '&.MuiList-padding': {
      padding: theme.spacing(0,0,2,0)
    }
  },
}))

function CardRightTop({titulo, icon}) {

  const classes = useStyles();

  return (
    <Grid item lg={12}>
      <Card className={classes.card}>
        <Typography className={classes.typography}>
          LinkedIn Notícias
        <LiveHelpIcon className={classes.iconHelp}/>
        </Typography>
        <List component="nav">
          <ListCardRight icon={icon} notice='Covid-19: as últimas notícias sobre as v...' info='Notícias mais lidas • 2.610 leitores'/>
          <ListCardRight icon={icon} notice='iFood faz doação milionária ao Butantan' info='há 1 d'/>
          <ListCardRight icon={icon} notice='Pandemia acelera vagas de tecnologia ...' info='há 1 d'/>
          <ListCardRight icon={icon} notice='Há vagas: confira as empresas que estã...' info='há 1 d'/>
          <ListCardRight icon={icon} notice='Dona da 99 doará corridas grátis para a...' info='há 1 d'/>
        </List>
        <Accordion className={classes.accordion}>
          <AccordionSummary className={classes.accordionSumary} expandIcon={<ExpandMoreIcon />} >
            <Typography className={classes.typographyAccordion}>Exibir mais</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <List component="nav"  className={classes.list}>
              <ListCardRight icon={icon} notice='Covid-19: as últimas notícias sobre as v...' info='Notícias mais lidas • 2.610 leitores'/>
              <ListCardRight icon={icon} notice='iFood faz doação milionária ao Butantan' info='há 1 d'/>
              <ListCardRight icon={icon} notice='Pandemia acelera vagas de tecnologia ...' info='há 1 d'/>
              <ListCardRight icon={icon} notice='Há vagas: confira as empresas que estã...' info='há 1 d'/>
              <ListCardRight icon={icon} notice='Dona da 99 doará corridas grátis para a...' info='há 1 d'/>
            </List>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Grid>
  )
}

export default CardRightTop;