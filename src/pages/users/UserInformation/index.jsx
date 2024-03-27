import { Box, Typography, Button, Paper, Chip } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

const UserInformation = ({ tabIndex, handleOpenBanModal }) => {
  return (
    <Box
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
        User Information
      </Typography>
      <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Nickname
          </Typography>
          <Typography variant="body2" gutterBottom>
            -{/* {userData.nickname} */}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Role
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Chip
              label="Admin"
              sx={{
                height: "19px",
                fontSize: "12px",
                // fontWeight: "bold",
                borderRadius: "4px",
                "& .MuiChip-label": {
                  px: "5px",
                },
              }}
            />
          </Typography>
        </Box>

        {/* <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Email
          </Typography>
          <Typography variant="body2" gutterBottom>
            {userData.email}
          </Typography>
        </Box> */}

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Wallet
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Chip
              label="0x000...00123"
              sx={{
                height: "19px",
                fontSize: "12px",
                // fontWeight: "bold",
                borderRadius: "4px",
                "& .MuiChip-label": {
                  px: "5px",
                },
              }}
              component="a"
              href="#"
              clickable
            >
              <CallMadeIcon />
            </Chip>
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            User ID
          </Typography>
          <Typography variant="body2" gutterBottom>
            -{/* {userData.userID} */}
          </Typography>
        </Box>
      </Paper>
      {tabIndex === "0" && (
        <Button
          variant="outlined"
          color="error"
          sx={{ textTransform: "none", mt: 1, p: 1, borderRadius: "5px" }}
          onClick={handleOpenBanModal}
          fullWidth
        >
          Ban User
        </Button>
      )}
      {tabIndex === "1" && (
        <Button
          variant="outlined"
          sx={{ textTransform: "none", mt: 1, p: 1, borderRadius: "5px" }}
          onClick={console.log("revoke user")}
          fullWidth
        >
          Revoke Ban
        </Button>
      )}
    </Box>
  );
};

export default UserInformation;
