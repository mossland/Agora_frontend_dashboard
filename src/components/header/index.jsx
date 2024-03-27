import { NavLink, Outlet } from "react-router-dom";
import { Box } from "@mui/system";

const linkStyle = {
  textDecoration: "none",
  padding: "12.5px 20px",
  borderRadius: "5px",
  color: "black",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
};

const activeStyle = {
  backgroundColor: "#f0f0f0",
};

function Header() {
  return (
    <>
      <Box
        component="nav"
        sx={{
          mb: 4,
          display: "flex",
          gap: "20px",
        }}
      >
        <NavLink
          to="users"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Users
        </NavLink>
        <NavLink
          to="proposals"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Proposals
        </NavLink>
        <NavLink
          to="forums"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Forums
        </NavLink>
      </Box>
      <Outlet />
    </>
  );
}

export default Header;
