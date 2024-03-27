import { Box, Typography, Button, Paper, Chip } from "@mui/material";

const ProposalInformation = ({
  proposal,
  tabIndex,
  handleOpenReadDescriptionModal,
}) => {
  if (!proposal) return null;

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
        Proposal Information
      </Typography>
      <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Title
          </Typography>
          <Typography variant="body2" gutterBottom>
            {proposal.proposalTitle || "N/A"}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Proponent
          </Typography>
          <Typography variant="body2" gutterBottom>
            {proposal.proponent || "N/A"}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Category
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Chip
              label="Core"
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
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Status
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Chip
              label="Approved"
              variant="outlined"
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
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Created
          </Typography>
          <Typography variant="body2" gutterBottom>
            {/*  */}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Started
          </Typography>
          <Typography variant="body2" gutterBottom>
            {/*  */}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            Ended
          </Typography>
          <Typography variant="body2" gutterBottom>
            {/*  */}
          </Typography>
        </Box>
      </Paper>
      {tabIndex === "0" && (
        <Button
          variant="outlined"
          sx={{ textTransform: "none", mt: 1, p: 1, borderRadius: "5px" }}
          onClick={console.log("luniversity")}
          fullWidth
        >
          Luniverse Scan
        </Button>
      )}
      {tabIndex === "1" && (
        <Button
          variant="outlined"
          sx={{ textTransform: "none", mt: 1, p: 1, borderRadius: "5px" }}
          onClick={handleOpenReadDescriptionModal}
          fullWidth
        >
          Read Description
        </Button>
      )}
    </Box>
  );
};

export default ProposalInformation;
