import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Product() {
    return (
       <Grid container>
           <Grid item xs={12} sm={12} md={12}></Grid>
           <Grid item xs={12} sm={12} md={12}>
               <Typography>PRODUCT DETAILS</Typography>
               <TextField 
               type="text"
               variant="outlined"
               label="Product Name"
               fullWidth
               required
               margin="normal"
               />
               <TextField
               type="text"
               variant="outlined"
               label="Manufacturing Name"
               fullWidth
               required
               margin="normal"
               />
               <TextField
               type="text"
               variant="outlined"
               label="Distributor"
               fullWidth
               required
               margin="normal"
               />
               <TextField
               type="date"
               variant="outlined"
               label="Manufacturing date"
               fullWidth
               required
               margin="normal"
               />
               <TextField
               type="date"
               variant="outlined"
               label="Expiry Date"
               fullWidth
               required
               margin="normal"
               />
               <TextField
               type="number"
               variant="outlined"
               label="Retail Price"
               fullWidth
               required
               margin="normal"
               />
               <TextField
               type="number"
               variant="outlined"
               label="WholeSale Price"
               fullWidth
               required
               margin="normal"
               />
               <Button
               type="submit"
               variant="contained"
               color="secondary"
               >SUBMIT</Button>
           </Grid>
           <Grid item xs={12} sm={12} md={12}></Grid>
       </Grid> 
    )
}
