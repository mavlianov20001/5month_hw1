import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const Pagination = ({changePageFunc, page, pageCount, theme}) => {
  return (
    <Box sx={{width: 'max-content', height: 'max-content', margin: '0 auto'}}>
 <Button variant='contained' color='error' onClick={() => changePageFunc('prev')}>prev</Button>
    <Typography sx={{color: theme === 'dark' ? 'white' : 'black'}} variant='span'>
     {page}/{pageCount}
    </Typography>
    <Button variant='contained' color='success' onClick={() => changePageFunc('next')} >next</Button>

    </Box>
  )
}

export default Pagination