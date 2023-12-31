import {
  Box,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon,
  Input,
  Avatar,
  Button,
  
} from "@mui/material";
import { useAppDrawerContext } from "../../data/contexts";
import React from "react";

interface IPaginaBase {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramentas?: React.ReactNode;
}

export const PaginaBase: React.FC<IPaginaBase> = ({
  children,
  titulo,
  barraDeFerramentas,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const menuSize = theme.spacing(28);
  const { toggleDrawerOpen } = useAppDrawerContext();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100vh"}
      
      marginLeft={smDown ? 0 : menuSize}
    >
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ width: "100%", height: theme.spacing(1) }}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ width: "100%" }}
              padding={1}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={theme.spacing(2)}
              >
                {smDown && (
                  <IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                  </IconButton>
                )}

                <Typography
                  variant="h6"
                  whiteSpace={"nowrap"}
                  textOverflow={"ellipsis"}
                  overflow={"hidden"}
                >
                  {titulo}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={theme.spacing(2)}
              >
                <IconButton>
                  <Icon>notifications</Icon>
                </IconButton>
                <IconButton>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {barraDeFerramentas ? barraDeFerramentas : undefined}
      <Box flex={1} overflow={"auto"}>
        {children}
      </Box>
    </Box>
  );
};
