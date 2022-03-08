import React from 'react'
import PropTypes from 'prop-types'
import { AppBar } from '@mui/material'
import { Typography } from '@mui/material'
const Header = () => {
  return (
    <AppBar
        sx={{ py: 1}}
    >
        <Typography component="h1" sx={{m: 'auto'}}>News</Typography>
    </AppBar>
  )
}

Header.propTypes = {}

export default Header