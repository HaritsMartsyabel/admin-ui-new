import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const LogoutBackdrop = ({ open, text = "Logging Out", color = "#299D91" }) => {
  return (
    <Backdrop
      open={open}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 9999,
        backgroundColor: "rgba(0,0,0,0.35)",
      }}
    >
      <div className="flex flex-col items-center">
        <CircularProgress size={46} sx={{ color }} />
        <p className="mt-4 text-sm font-medium" style={{ color }}>
          {text}
        </p>
      </div>
    </Backdrop>
  );
};

export default LogoutBackdrop;
