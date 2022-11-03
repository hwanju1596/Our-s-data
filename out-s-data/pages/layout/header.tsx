import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

// const SearchButton = styled(Button)``;

const SearchButton = () => {
    return (
        <Button variant="outlined" startIcon={<SearchIcon/>}> #tag Search </Button>
    )
}

const Header = () => {
    
  return (
    <div>
        <SearchButton/>
    </div>
  )
}

export default Header