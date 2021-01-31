import React from 'react'
import { Box, makeStyles, Typography, Divider, FormControl, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  boxDivider: {
    padding: theme.spacing(2,0,1,0),
    position: 'relative'
  },
  boxSelect: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    padding: theme.spacing(1,0,1,0)
  },
  divider: {
    margin: theme.spacing(0,21,0,0),
  },
  typographyDivider: {
    color: theme.palette.type === 'dark' ? '#fff' : '#00000099',
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 11
  },
  selectEmpty: {
    marginLeft: 4,
    marginTop: 3,
    fontSize: 11,
    fontWeight: 'bold',
    '&.MuiInput-underline': {
      '&::before': {
        display: 'none'
      }
    }
  },
  menuItem: {
    fontSize: 12
  }
}))

function DividerCard() {

  const classes = useStyles();

  return (
    <Box className={classes.boxDivider}>
      <Divider variant="inset" className={classes.divider} />
      <Box className={classes.boxSelect}>
        <Typography variant="caption" className={classes.typographyDivider}>
          Classificar por:
        </Typography>
        <FormControl>
          <Select value="Principais" className={classes.selectEmpty}>
            <MenuItem className={classes.menuItem} value="Principais">Principais</MenuItem>
            <MenuItem className={classes.menuItem} value="Recentes">Recentes</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default DividerCard;