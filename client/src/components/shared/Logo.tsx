import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        // gap: "2px",
      }}
    >
      <Link to={"/"}>
        <img
          src="logo.png"
          alt="openai"
          width={"80px"}
          height={"80px"}
        />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "25px" }}>AI</span>BOT
      </Typography>
    </div>
  );
};

export default Logo;