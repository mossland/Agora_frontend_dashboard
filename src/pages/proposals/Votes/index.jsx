import { Box, Typography, Paper } from "@mui/material";

const Votes = ({}) => {
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
        Votes
      </Typography>
      <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            For
          </Typography>
          <Typography variant="body2" gutterBottom>
            -{/* {userData.nickname} */}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Against
          </Typography>
          <Typography variant="body2" gutterBottom>
            -{/* {userData.role} */}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Abstain
          </Typography>
          <Typography variant="body2" gutterBottom>
            -
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Votes;
