import { Box, Typography, Paper } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const CreatedProposal = ({ proposals }) => {
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
        Created Proposals
      </Typography>
      {proposals && proposals.length > 0 && (
        <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
          {proposals.map((proposal, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                gutterBottom
              >
                {proposal.description}{" "}
                <OpenInNewIcon sx={{ fontSize: "16px" }} />
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                gutterBottom
              >
                <CalendarMonthIcon sx={{ fontSize: "16px" }} />
                Created {proposal.creationDate}{" "}
              </Typography>
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default CreatedProposal;
