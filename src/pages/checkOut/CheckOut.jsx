import { Box, Button, Container, IconButton } from "@mui/material";
import { useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, removeItem } from "../../redux/slices/cartSlice";

const inputs = [
  {
    name: "First Name*",
  },
  {
    name: "Company Name",
  },
  {
    name: "Street Address*",
  },
  {
    name: "Apartment, floor, etc. (optional)",
  },
  {
    name: "Town/City*",
  },
  {
    name: "Phone Number*",
  },
  {
    name: "Email Address*",
  },
];

const CheckOut = () => {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const total = items?.reduce((prev, next) => prev + next.price * next.quantity, 0) || 0

  useEffect(() => {
    dispatch(updateCart())
  }, [] )

  return (
    <div>
      <Container maxWidth="lg" sx={{display:'flex', justifyContent:"space-between", alignItems:"center"}}>
        <Box width={470}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "500",
              paddingBottom: "48px",
            }}
          >
            Billing Details
          </h1>

          {inputs.map((names) => (
            <div key={names} style={{ marginBottom: "32px" }}>
              <p style={{ color: "#999999", paddingBottom: "8px" }}>
                {names.name}
              </p>
              <input
                style={{
                  width: "100%",
                  height: "50px",
                  outline: "none",
                  background: "#F5F5F5",
                  borderRadius: "4px",
                }}
                type="text"
              />
            </div>
          ))}
        </Box>

        <Box width={527}>
            <Box sx={{mb:"32px"}} width={425}>
            {items.map(el => (
              <Box
              key={el?.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb:"32px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={() => {
                  dispatch(removeItem(el))
                }}
                  sx={{
                    position: "absolute",
                    top: "-20px",
                    left: "-20px",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <TiDelete />
                </IconButton>
                <img
                  width={"54px"}
                  src={el?.images[0].replaceAll('["', "")}
                  alt="img"
                />
                <p style={{ width: "166px" }}>{el?.title}</p>
              </Box>
              <Box>$ {items.reduce((prev, next) => next.id === el.id ? prev + (next.price * next.quantity) : prev, 0)}</Box>
            </Box>  
    ))}

<Box sx={{display:"flex", justifyContent:"space-between", paddingBottom:'16px', borderBottom:'1px solid #909090'}}>
              <p>Shipping</p>
              <p>free</p>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between", padding:'16px 0', borderBottom:'1px solid #909090'}}>
            <p>Total: </p>
            <p>{total}</p>
            </Box >
            </Box>
            <Box sx={{display:'flex', gap:'16px'}}>
           <div style={{width:'300px', height:'56px', border:'1px solid #000', borderRadius:"4px", padding:"16px 5px 16px 24px  "}}> <input style={{width:'100%', outline:"none", }} type="text" placeholder="coupon code"/></div>
            <div><Button variant="outlined" sx={{padding:'16px 48px', background:'#DB4444', color:'#fff', border:'none', borderRadius:'4px', '&:hover': {
                  backgroundColor: "#DB4444",
                  border: "none"
                }}}>Apply coupon</Button></div>
          </Box>

          {/* <Box sx={{display:'flex', justifyContent:'center', marginTop:'16px'}}> */}
           <Button variant="outlined" sx={{padding:'16px 48px', background:'#DB4444', color:'#fff', border:'none', borderRadius:'4px', mt:"32px",'&:hover': {
                  backgroundColor: "#DB4444",
                  border:'none'
                }}}>Place Order</Button>
           {/* </Box> */}
        </Box>
      </Container>
    </div>
  );
};

export default CheckOut;
