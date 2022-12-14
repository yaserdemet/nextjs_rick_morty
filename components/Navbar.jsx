import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import tr from "../public/locales/tr/common.json";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSession } from "next-auth/react";
import Component from "./Auth";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Navbar(props) {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  const { locale } = router;
  const t = locale === "tr" ? tr : en;
  const [change, setChange] = useState(false);

  const handleChange = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const uppLetter = (str) => {
   return   str.slice(0,1).toUpperCase() + str.slice(1,5) + " " +  str.slice(5,6).toUpperCase() + str.slice(6)
  }


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGk6hpU-mxH3NBAV5SRdCOTknq7T0t-ox-U1mueu-z0UfGK0OFt1qZ2TBsMcpBEhRPylc&usqp=CAU"
          alt=""
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "-2rem" }}>
      <AppBar
        component="nav"
        sx={{ display: "flex", backgroundColor: "#333629" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{dispay : "flex" , justifyContent : "center"}}
          >
            <img
              src="https://the-rich-and-morty.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-2.9fa6f72b.png&w=256&q=75"
              alt="ricky"
              width="200px"
            />
         
            <Box variant="span" component = "span" style={{marginLeft : "8rem" }} sx={{ display: { xs: "none", sm: "inline" , alignItems : "center" } }}>
              {/* {session && <span style={{   color: "rgb(84, 146, 175)" ,justifyContent : "center" }}>{`Welcome ${uppLetter(session.user.name)}`}</span>} */}
    
              {session && (
                <img
                  src={session.user.image}
                  alt=""
                  width="50px"
                  style={{ borderRadius: "50%" , marginLeft : "16rem"}}
                />
              )}
            </Box>
        
           
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }} style={{display : "flex" , gap : "2rem"}}>
            <Link href="/">
 
              <Button sx={{   color: "rgb(84, 146, 175)" }}>{t.nav1}</Button>
            </Link>
            <Link href="/main">
              <Button sx={{   color: "rgb(84, 146, 175)" }}>{t.nav2}</Button>
            </Link>

        
            <Component />

            {/* <select onChange={handleChange}  defaultValue={locale} name="" id="">
                <option value="en">en</option>
                <option value="tr">tr</option>
              </select> */}

            <FormControl
              sx={{ m: 1, minWidth: 50, color: "white" }}
              size="small"
            >
              <InputLabel id="demo-select-small">Lan</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                defaultValue={locale}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="en">En</MenuItem>
                <MenuItem value="tr">Tr</MenuItem>
              </Select>
            </FormControl>

            {/* <ReactFlagsSelect
              countries={Object.keys(phones)}
              //! burada bayraklar?? getirdi object.keys in i??ine objeyi at.
              onSelect={(code) => setSelected(code)}
              customLabels={phones}
              // placeholder="Select Language"
              // onChange={handleChange}
              //* burada se??ilen bayra???? set ediyor.
              selected={locale}
              className="p-2"
            /> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
