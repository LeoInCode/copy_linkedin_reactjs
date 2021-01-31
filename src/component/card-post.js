import React from 'react'
import { Box, makeStyles, Grid, Card, CardActionArea, Typography, CardContent, CardHeader, Avatar, IconButton, List, ListItem, Divider } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  gridCardTop: {
    paddingTop: theme.spacing(1)
  },
  card: {
    width: 'auto',
    borderRadius: 8,
    boxShadow: 'none',
    border: '1px solid #0002',
  },
  cardHeader: {
    paddingTop: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  iconMore: {
    paddingTop: theme.spacing(1)
  },
  subheader: {
    display: 'flex',
    flexDirection: 'column',
  },
  caption: {
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    lineHeight: '1.33',
    display: 'flex',
    alignItems: 'center'
  },
  iconPublic: {
    marginLeft: theme.spacing(1),
    fontSize: 18
  },
  message: {
    height: 'auto',
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontSize: 14
  },
  image: {
    height: 'auto',
    width: '100%',
    maxWidth: '100%',
  },
  content: {
    padding: theme.spacing(0),
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #0002',
    borderRadius: 20
  },
  divider: {
    marginTop: theme.spacing(3)
  },
  typography: {
    paddingLeft: 3,
    fontSize: 13,
    color: theme.palette.type === 'dark' ? '#fff' : '#0008',
    fontWeight: 'bold'
  },
  list: {
    padding: theme.spacing(0,0,0,1),
    display: 'flex',
    justifyContent: 'start'
  },
  itemList: {
    padding: theme.spacing(2,1,2,1),
    '&:first-child': {
      paddingLeft: theme.spacing(1)
    },
    '&.MuiListItem-root': {
        width: 'auto'
    }
  },
  iconLike: {
    transform: 'rotate(360deg) scaleX(-1)',
    fontSize: 25
  },
  icon: {
    fontSize: 25
  },
  iconSend: {
    transform: 'rotate(315deg)',
    fontSize: 25
  }
}))
function CardPost() {

  const classes = useStyles();

  return (
    <Grid item lg={12} md={12} className={classes.gridCardTop}>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader}
          avatar={<Avatar src="" alt="" className={classes.avatar}/>}
          title={<Typography variant="caption">Leonardo Mendes</Typography>}
          action={
            <IconButton aria-label="settings" className={classes.iconMore}>
              <MoreHorizIcon />
            </IconButton>
          }
          subheader={
            <Box className={classes.subheader}>
              <Typography variant="caption" className={classes.caption}>
                Front End Developer | Angular | ReactJS | JavaScript | HTML5 | CSS3
              </Typography>
              <Typography variant="caption" className={classes.caption}>
                2 h
              <PublicIcon className={classes.iconPublic} />
              </Typography>
            </Box>
          }
        />
        <CardContent className={classes.content}>
          <Typography className={classes.message} variant="body1">
            Ano
                  </Typography>
          <CardActionArea>
            <img src="/capa.png" className={classes.image} alt="img" />
          </CardActionArea>
        </CardContent>
        <Divider className={classes.divider} />
        <List component="nav" className={classes.list}>
          <ListItem button className={classes.itemList}>
            <ThumbUpOutlinedIcon className={classes.iconLike} />
            <Typography className={classes.typography}>Gostei</Typography>
          </ListItem>
          <ListItem button className={classes.itemList}>
            <CommentOutlinedIcon className={classes.icon} />
            <Typography className={classes.typography}>Comentar</Typography>
          </ListItem>
          <ListItem button className={classes.itemList}>
            <ShareIcon className={classes.icon} />
            <Typography className={classes.typography}>Compartilhr</Typography>
          </ListItem>
          <ListItem button className={classes.itemList}>
            <SendIcon className={classes.iconSend} />
            <Typography className={classes.typography}>Enviar</Typography>
          </ListItem>
        </List>
      </Card>
    </Grid>
  )
}

export default CardPost;