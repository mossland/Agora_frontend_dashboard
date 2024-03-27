import { Box, Typography, Paper } from "@mui/material";

const ReasonForSuspension = ({ suspendedReason }) => {
  return (
    <Box
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {suspendedReason && (
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          Reason for Suspension
        </Typography>
      )}
      {suspendedReason && (
        <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600 }}
              gutterBottom
            >
              {suspendedReason.description}{" "}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Banned {suspendedReason.creationDate}{" "}
            </Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ReasonForSuspension;
