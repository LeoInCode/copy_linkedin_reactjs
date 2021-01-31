import React from 'react';
import { AppBar, Toolbar, makeStyles, InputBase, Container, Box, IconButton, Typography, Divider, Link, Switch, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Apps from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
  },
  container: {
    position: 'relative'
  },
  toolBar: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    padding: theme.spacing(0, 1, 0, 4),
    display: 'flex',
    alignItems: 'center'
  },
  logoIcon: {
    fontSize: 45,
    color: '#0a66c2'
  },
  search: {
    width: '22%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#eef3f8',
    borderRadius: 5,
    '&:focus': {
      width: '25%',
      '&.inputInput': {
        fontSize: 16
      }
    }
  },
  searchIcon: {
    padding: theme.spacing(2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#000'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    fontSize: 14,
  },
  grow: {
    flexGrow: 1,
  },
  sectionIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconButton: {
    padding: theme.spacing(0, 3, 2, 3),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    textAlign: 'center',
    width: '10%',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#000'
    }
  },
  icon: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 30,
    '&:hover': {
      color: '#000'
    }
  },
  iconScale: {
    transform: 'scaleX(-1)'
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  typography: {
    position: 'absolute',
    marginTop: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 12,
  },
  link: {
    width: '20%',
    color: theme.palette.type === 'dark' ? '#CE7E09' : '#915907',
    fontSize: 12,
  },
  switch: {
    position: 'absolute',
    right: 0,
    top: '10%'
  }
}))

function AppBarComponent({ darkMode, setDarkMode }) {

  const classes = useStyles();

  return (
    <AppBar position="static" color='inherit' className={classes.appBar}>
      <Container fixed className={classes.container}>
        <Toolbar variant="dense" className={classes.toolBar}>
          <Box className={classes.logo}>
            <LinkedInIcon className={classes.logoIcon} />
          </Box>
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase placeholder="Pesquisar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <Box className={classes.grow} />
          <Box className={classes.sectionIcons}>
            <IconButton className={classes.iconButton}>
              <HomeIcon className={classes.icon}/>
              <Typography className={classes.typography}>Início</Typography>
            </IconButton>
            <IconButton className={classes.iconButton}>
              <PeopleIcon className={classes.icon} />
              <Typography className={classes.typography}>Minha rede</Typography>
            </IconButton>
            <IconButton className={classes.iconButton}>
              <BusinessCenterIcon className={classes.iconScale}/>
              <Typography className={classes.typography}>Vagas</Typography>
            </IconButton>
            <IconButton className={classes.iconButton}>
              <SmsIcon className={classes.iconScale} />
              <Typography className={classes.typography}>Mensagens</Typography>
            </IconButton>
            <IconButton className={classes.iconButton}>
              <NotificationsIcon className={classes.icon} />
              <Typography className={classes.typography}>Notificações</Typography>
            </IconButton>
            <IconButton aria-haspopup="true" className={classes.iconButton}>
              <Avatar alt="Foto" src="/foto.jpg" className={classes.avatar} />
              <Typography className={classes.typography}>
                Eu
                  <ArrowDropDownIcon />
              </Typography>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton className={classes.iconButton}>
              <Apps />
              <Typography className={classes.typography}>
                Soluções
                  <ArrowDropDownIcon />
              </Typography>
            </IconButton>
            <Link component="button" variant="body2" className={classes.link}>
              Experimente Premium grátis por 1 mês
            </Link>
          </Box>
        </Toolbar>
          <Switch
            className={classes.switch}
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
      </Container>
    </AppBar>
  )
}

export default AppBarComponent;