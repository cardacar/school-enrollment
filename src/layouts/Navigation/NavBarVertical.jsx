import React, { Fragment } from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Badge,
  Tooltip,
  Divider,
  Button,
  Chip,
  IconButton,
} from "@mui/material";

import {Link} from 'react-router-dom'

import { Menu, ExitToApp } from "@mui/icons-material";

import navBarList from "./navList";
import CustomAvatar from '../../components/Avatar'

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

const NavBarVertical = ({children}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toogleOpen = () => setOpen(!open);

  const drawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "42px",
          width: "auto",
          backgroundColor: "transparent",
          margin: "14px 14px",
          padding: "12px 0px",
          borderBottom: "1px solid lightgray",
          alignItems: "flex-end",
        }}
      >
        <Typography
          variant="h1"
          noWrap={true}
          gutterBottom
          sx={{
            display: { xs: "none", sm: "initial" },
            fontSize: "18px",
            fontWeight: 600,
            color: "#fff",
            width: "154px",
            marginLeft: open ? "0px" : "8px",
            paddingBottom: "3px",
          }}
        >
          Colegio Sin Nombre
        </Typography>

        <Button
          onClick={toogleOpen}
          sx={{
            minWidth: "initial",
            padding: "10px",
            color: "#fff",
            borderRadius: "8px",
            backgroundColor: open ? "transparent" : "transparent",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          <Menu
            sx={{ fontSize: "20px", color: open ? "#fff" : "#fff" }}
          ></Menu>
        </Button>
      </Box>

      <List dense={true}>
        {navBarList.map((key, index) => (
          <Fragment key={index}>
              <Tooltip
                title={open ? key.desc : ""}
                placement={"right"}
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "red",
                      color: "white",
                      marginLeft: "22px !important",
                      boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                    },
                  },
                }}
              >
                  <Link to={key.link}>
                  
                 
                <ListItemButton
                  sx={{
                    margin: "6px 14px",
                    padding: "10px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#002973",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "46px" }}>
                    <Badge
                      badgeContent={key.badge}
                      
                      variant="dot"
                    >
                      <key.icon sx={{ fontSize: "20px", color: "#fff" }} />
                    </Badge>
                  </ListItemIcon>

                  <ListItemText
                    primary={key.desc}
                    primaryTypographyProps={{
                      variant: "body2",
                    }}
                    sx={{
                      display: "inline",
                      margin: "0px",
                      overflowX: "hidden",
                      color: "lightgray",
                      whiteSpace: "nowrap",
                      minWidth: "126px",
                    }}
                  />
                  {key.badge !== 0 ? (
                    <Chip
                      label={key.badge}
                      color={"success"}
                      size="small"
                      sx={{ height: "auto" }}
                    />
                  ) : (
                    <></>
                  )}
                </ListItemButton>
                </Link>
              </Tooltip>

          </Fragment>
        ))}
        <Divider variant="middle" sx={{color: "#000"}} />
      </List>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContents: "center",
          margin: "14px 14px",
          padding: "12px 4px",
          borderTop: "1px solid lightgray",
        }}
      >
          <Box
          sx={{
            display: 'flex',
            marginRight: '18px',
            paddingLeft: '0px',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <CustomAvatar />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Typography
            component="span"
            variant="body2"
            sx={{
              
              display: "block",
              whiteSpace: "nowrap",
              lineHeight: "inherit",
              fontWeight: 500,
              color: "lightgray",
            }}
          >
            Carlos D. Quiros
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              display: "block",
              whiteSpace: "nowrap",
              lineHeight: "inherit",
              color: "lightgray",
            }}
          >
            Secretario
          </Typography>
        </Box>
        <IconButton sx={{ color: "lightGray" }}>
          <ExitToApp />
        </IconButton>
      </Box>
    </>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open
            ? { xs: "0px", sm: drawerWidthClose }
            : { xs: drawerWidthClose, sm: drawerWidthOpen },
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
          "& .MuiDrawer-paper": {
            justifyContent: "space-between",
            overflowX: "hidden",
            width: open
              ? { xs: "0px", sm: drawerWidthClose }
              : { xs: drawerWidthClose, sm: drawerWidthOpen },
            borderRight: "0px",
            borderRadius: "0px 16px 16px 0px",
            boxShadow: theme.shadows[8],
            backgroundColor: open ? "primary.main" : "primary.main",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>
      {children}
    </Box>
  );
};

export default NavBarVertical;
