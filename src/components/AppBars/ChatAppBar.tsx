import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ElevationScroll from "../Utils/ElevationScroll/ElevationScroll";

interface Props {
  name: string;
  imageUrl: string;
}

export default function ButtonAppBar({ name, imageUrl }: Props) {
  const navigate = useNavigate();

  const toChatsScreen = () => {
    navigate("/chats");
  };

  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            onClick={toChatsScreen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
          <Box sx={{ mr: 2 }}>
            <Avatar alt={name} src={imageUrl} sx={{ width: 36, height: 36 }} />
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
