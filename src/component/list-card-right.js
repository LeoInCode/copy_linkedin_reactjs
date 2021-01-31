import React from 'react'
import { makeStyles, ListItem, Typography, Box, CardHeader } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(0, 0, 1, 0),
    '&:last-child': {
      paddingBottom: theme.spacing(0)
    }
  },
  iconCircle: {
    color: '#70b5f9',
    fontSize: 12,
    margin: theme.spacing(0, 1, 0, 1)
  },
  boxNumber: {
    fontSize: 12,
    marginLeft: theme.spacing(1),
    marginRight: 4
  },
  typographyList: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: '1.2'
  },
  caption: {
    color: theme.palette.type === 'dark' ? '#fff' : '#00000099',
    fontSize: 11,
    paddingLeft: '1.75rem'
  },
}))

function ListCardRight({icon, notice, info}) {

  const classes = useStyles();

  return (
    <ListItem button className={classes.listItem}>
      <CardHeader className={classes.listItem}
          title={<Typography variant="caption" className={classes.typographyList}>
          {icon === 'circle' && (
            <FiberManualRecordIcon className={classes.iconCircle}/>
          )}
          {icon === 'number' && (
            <Box className={classes.boxNumber}>
              <Typography variant="caption" className={classes.typographyList}>1.</Typography>
            </Box>
          )}
            {notice}
          </Typography>}
        subheader={
          <Typography variant="caption" className={classes.caption}>
            {info}
          </Typography>
        }
      />
    </ListItem>
  )
}

export default ListCardRight;