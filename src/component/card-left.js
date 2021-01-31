import React from 'react'
import { Box, makeStyles, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Link, Divider, List, ListItem, Avatar } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StopIcon from '@material-ui/icons/Stop';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 'auto',
    borderRadius: 8,
    boxShadow: 'none',
    border: '1px solid #0002',
  },
  media: {
    height: 50,
  },
  gridCardBottom: {
    paddingTop: theme.spacing(1)
  },
  boxMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: theme.spacing(4)
  },
  circleAvatar: {
    border: '2px solid #fff',
    position: 'absolute',
    right: '30%',
    top: '20%',
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  boxContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: theme.spacing(1)
  },
  link: {
    color: theme.palette.type === 'dark' ? '#fff' : '#000000e6',
    fontWeight: 'bold',
    paddingBottom: theme.spacing(1)
  },
  typography: {
    fontSize: 11,
    textAlign: 'center'
  },
  listItem: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    display: 'flex',
    justifyContent: 'space-between',
    '&:first-child': {
      color: theme.palette.secondary.main,
    },
    '&:nth-child(2)': {
      color: theme.palette.secondary.main,
    } 
  },
  listItemTypography: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  typographyMark: {
    fontSize: 12,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemLink: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  itemLinkAcesse: {
    fontSize: 11,
    textAlign: 'left',
    '&:nth-child(2)': {
      color: 'blue'
    }
  },
  itemLinkPremium: {
    fontSize: 11,
    fontWeight: 'bold',
    color: theme.palette.type === 'dark' ? '#fff' : '#000',
    textAlign: 'left',
    '&:hover': {
      color: theme.palette.secondary.main,
    }
  },
  iconStop: {
    color: 'transparent', 
    background: 'linear-gradient(224.81deg, #F8C77E 0%, #F8C77E 11.35%, #F8C77E 20.8%, #F8C77E 31.2%, #F8C77E 39.4%, #F8C77E 44.75%, #FA9500 59.03%)',
    fontSize: 12,
    marginRight: theme.spacing(1)
  },
  iconMark: {
    fontSize: 20,
    marginRight: theme.spacing(1),
  },
  boxLinks: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0,0,1,1),
  },
  linksBox: {
    color: theme.palette.secondary.main,
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: theme.spacing(1),
    textAlign: 'left',
    '&:nth-child(1)': {
      paddingTop: theme.spacing(1),
    },
    '&:nth-child(3)': {
      paddingBottom: theme.spacing(0),
    }
  },
  iconAdd: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    right: 0,
    top: 25,
    cursor: 'pointer'
  },
  listDescubra: {
    paddingBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center'
  },
  typographyDesc: {
    fontSize: 11,
    fontWeight: 'bold'
  }
}))

function CardLeft() {

  const classes = useStyles();

  return(
    <>
      <Grid item lg={12} md={12}>
        <Card className={classes.card}>
          <CardActionArea>
            <Box className={classes.boxMedia}>
              <CardMedia
                className={classes.media}
                image="/capa.png"
                title="Capa"
              />
              <Avatar alt="Foto" src="/foto.jpg" className={classes.circleAvatar} />
            </Box>
          </CardActionArea>
          <CardContent>
            <Box className={classes.boxContent}>
              <Link component="button" variant="body2" className={classes.link}>
                Leonardo Mendes
              </Link>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
                Front End Developer | Angular | ReactJS | JavaScript | HTML5 | CSS3
              </Typography>
            </Box>
          </CardContent>
          <Divider />
          <List component="nav">
            <ListItem button className={classes.listItem}>
              <Typography variant="body2" color="textSecondary" className={classes.listItemTypography}>
                Quem viu seu perfil
              </Typography>
              <Typography className={classes.listItemTypography}>
                1000
              </Typography>
            </ListItem>
            <ListItem button className={classes.listItem}>
              <Typography variant="body2" color="textSecondary" className={classes.listItemTypography}>
                Viram sua publicação
              </Typography>
              <Typography className={classes.listItemTypography}>
                2000
              </Typography>
            </ListItem>
            <ListItem button className={classes.listItemLink}>
              <Link variant="body2"color="textSecondary" className={classes.itemLinkAcesse}>
                Acesse ferramentas exclusivas
                <Box className={classes.itemLinkPremium}>
                  <StopIcon className={classes.iconStop}/>
                  Experimente Premium grátis por 1 mês
                </Box>
              </Link>
            </ListItem>
            <Divider/>
            <ListItem button className={classes.listItem}>
              <Typography variant="body2" color="textSecondary" className={classes.typographyMark}>
                <BookmarkIcon className={classes.iconMark}/>
                Meus itens
              </Typography>
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid item lg={12} md={12} className={classes.gridCardBottom}>
        <Card className={classes.card}>
          <Box className={classes.boxLinks}>
            <Link component="button" variant="body2" color="textSecondary" className={classes.linksBox}>
                  Grupos
            </Link>
            <Link component="button" variant="body2" color="textSecondary" className={classes.linksBox}>
                  Eventos
            </Link>
            <Link component="button" variant="body2" color="textSecondary" className={classes.linksBox}>
                  Hashtags seguidas
            </Link>
            <AddIcon className={classes.iconAdd}/>
          </Box>
          <Divider/>
          <ListItem button className={classes.listDescubra}>
            <Typography variant="body2" className={classes.typographyDesc}>
              Descubra mais
            </Typography>
          </ListItem>
        </Card>
      </Grid>
    </>
  )
}

export default CardLeft;