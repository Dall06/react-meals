import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const myStyles = {
  txt: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.5)",
  },
  title: {
    fontWeight: "bold",
    color: "#42a5f5"
  },
  price: {
    fontWeight: "bold",
  }
};

const SelectInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    border: '1px solid #ced4da',
    fontSize: 16,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    padding: '10px 26px 10px 12px',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const Item = (props) => {
  const { data } = props;

  const [qty, setQty] = useState(0);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const handleRange = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (qty == 0) {
      // show error modal
      console.log("error must be more than zero");
      return;
    }

    const cartData = {...data, qty}
    props.toCart(cartData)
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <InputLabel>
          <Typography gutterBottom variant="subtitle1" sx={myStyles.txt}>
            Quantity
          </Typography>
        </InputLabel>
        <Select value={qty} label="quantity" onChange={handleChange} sx={myStyles.txt} input={<SelectInput />}>
          {handleRange(0, 20).map((n, key) => (
            <MenuItem value={n} key={key}>
              {n}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item>
        <InputLabel>
          <Typography gutterBottom variant="subtitle1" sx={myStyles.txt}>
            Add to cart
          </Typography>
        </InputLabel>
        <IconButton onClick={handleClick}>
          <AddShoppingCartIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" sx={myStyles.title}>
              {data.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {data.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div" sx={myStyles.price}>
            ${data.price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Item;
