import { Box, Button, Container, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { removeItem, updateCart } from "../../redux/slices/cartSlice";
import {Link} from "react-router-dom"
import { useEffect } from "react";
const Cart = () => {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const total = items?.reduce((prev, next) => prev + next.price * next.quantity, 0) || 0

  useEffect(() => {
    dispatch(updateCart())
  }, [] )


  const handleRemoveItem = (id) => {
    dispatch(removeItem({id}))
  }
  return (
    <div>
      <div>
        <img src={items.images} alt="" />
      </div>

      <Container maxWidth="lg" sx={{paddingTop:'180px'}}>
        <Box>
          <Box sx={{ padding:'24px 40px', display: "flex",  justifyContent:"space-between",  marginBottom:"40px", boxShadow: "0px 1px 13px 0px #0000000D"
}}>
            <Box sx={{ width: "400px" }}>Product</Box>
            <Box sx={{ width: "200px" }}>Price</Box>
            <Box sx={{ width: "200px" }}>Quantity</Box>
            <Box sx={{ width: "200px" }}>Subtotal</Box>
          </Box>
          {items?.map(el => (
            <Box key={el?.id} sx={{ padding:'39px 40px', marginBottom:"24px", display: "flex",  justifyContent:"space-between" , alignItems:"center",  boxShadow: "0px 1px 13px 0px #0000000D"}}>
            <Box sx={{ width: "400px", display:"flex", gap:'20px', position:"relative", alignItems:"center"}}>
              <IconButton sx={{position:'absolute', top:"-20px", left:'-20px',
                '&:hover': {
                  backgroundColor: "transparent"
                }
              }} onClick={() =>handleRemoveItem(el.id)}>
                <TiDelete />
              </IconButton>
              <img width={"54px"} src={el?.images[0].replaceAll('["', "")} alt="img" />
              <p style={{width:'166px'}}>{el?.title}</p>
            </Box>
            <Box sx={{ width: "200px" }}>$ {el?.price}</Box>
            <Box sx={{ width: "200px", display:"flex", justifyContent:"center" }}>
              <input style={{width:'60px'}} type="number" value={el.quantity} />
            </Box>
            <Box sx={{ width: "200px" }}> {items.reduce((prev, next) => next.id === el.id ? prev + (next.price * next.quantity) : prev, 0)}</Box>
          </Box>
          ))}

          

          <Box sx={{display:'flex', justifyContent:"space-between"}}>
            <Button component={Link} to="/" variant="outlined"  sx={{padding:'16px 48px',  color:'#000', border:'1px solid black', borderRadius:'4px', '&:hover': {
              border:'1px solid black'
                }}}>Return to Shop</Button>
            <Button variant="outlined"  sx={{padding:'16px 48px', color:'#000', border:'1px solid black', borderRadius:'4px', '&:hover': {
              border:'1px solid black'
                }}}>Update to Cart</Button>
          </Box>
        </Box>

        <Box sx={{display:'flex', justifyContent:"space-between", marginTop:"80px"}}>
          <Box sx={{display:'flex', gap:'16px'}}>
           <div style={{width:'300px', height:'56px', border:'1px solid #000', borderRadius:"4px", padding:"16px 5px 16px 24px  "}}> <input style={{width:'100%', outline:"none", }} type="text" placeholder="coupon code"/></div>
            <div><Button variant="outlined" sx={{padding:'16px 48px', background:'#DB4444', color:'#fff', border:'none', borderRadius:'4px', '&:hover': {
                  backgroundColor: "#DB4444",
                  border: "none"
                }}}>Apply coupon</Button></div>
          </Box>
          <Box width={"470px"} sx={{border:'1px solid #000', padding:'32px 24px'}}>
            <h3 style={{fontWeight:'500', fontSize:'20px', marginBottom:'24px'}}>Cart Total</h3>
            <Box sx={{display:"flex", justifyContent:"space-between", paddingBottom:'16px', borderBottom:'1px solid #909090'}}>
              <p>Shipping</p>
              <p>free</p>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between", padding:'16px 0', borderBottom:'1px solid #909090'}}>
            <p>Total:</p>
            <p>{total}</p>
            </Box >
           <Box sx={{display:'flex', justifyContent:'center', marginTop:'16px'}}>
           <Button component={Link} to="/checkOut" variant="outlined" sx={{padding:'16px 48px', background:'#DB4444', color:'#fff !important', border:'none', borderRadius:'4px', '&:hover': {
                  backgroundColor: "#DB4444",
                  border:'none'
                }}}>Procees to checkout</Button>
           </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
