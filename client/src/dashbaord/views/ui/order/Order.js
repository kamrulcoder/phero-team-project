import React from "react";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import Box from "@mui/material/Box";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import OrderTable from "./OrderTable";
function Order() {
  return (
   <OrderTable/>

  )
}

export default Order;

// export default function SvgIconsColor() {
//   return (
//     <>
 

//       {/* <Box
//         sx={{
//           "& > :not(style)": {
//             m: 2,
//           },
//         }}
//       >
  
//         <HomeIcon />
//         <HomeIcon color="primary" />
//         <HomeIcon color="secondary" />
//         <HomeIcon color="success" />
//         <HomeIcon color="action" />
//         <HomeIcon color="disabled" />
//         <HomeIcon sx={{ color: pink[500] }} />
//         <Typography sx={{ color: "red" }} variant="h1" component="h2">
//           h1. Heading
//         </Typography>
//         ;
//       </Box> */}
//     </>
//   );
// }
