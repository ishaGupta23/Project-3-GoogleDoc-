import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ToggleButton } from '@mui/material';
import { AlignHorizontalCenter, FormatAlignCenterOutlined } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';



export default function DropDownSize() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    '',
    <p id="full-size" onClick={handleClick} style={{fontSize:'13px'}}>100%</p>,
    <p id="size-50%">'50%'</p>,
    '75%',
    '90%',
    '100%',
    '125%',
    '150',
    '200%'
  ];
  const fullsize= document.querySelector('#full-size')
  // const size50= document.querySelector('#size-50%')
  function handleClick(){
   document.execCommand('italic')
  }
  
  return (
    <div >
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'aliceblue' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{height:"1.8rem", }}
        >
          
          <ListItemText
            primary= {options[selectedIndex]}
          />

        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
