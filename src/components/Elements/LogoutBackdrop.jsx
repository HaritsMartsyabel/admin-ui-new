import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Portal from "@mui/material/Portal";

export default function LogoutBackdrop({
  open,
  text = "Logging Out",
  color = "#299D91",
}) {
  return (
    <Portal>
      <Backdrop
        open={open}
        sx={{
          zIndex: 99999,
          backgroundColor: "rgba(255,255,255,0.85)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress size={48} sx={{ color }} />
        <Typography sx={{ fontSize: 13, fontWeight: 500, color }}>
          {text}
        </Typography>
      </Backdrop>
    </Portal>
  );
}
