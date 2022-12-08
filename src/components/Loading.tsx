import { CircularProgress } from "@mui/material";

function Loading() {
  return (
    <CircularProgress
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        color: "#fff",
      }}
    />
  );
}

export default Loading;
