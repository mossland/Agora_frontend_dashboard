import { Box, Typography, Button } from "@mui/material";

const ProposalButtons = ({
  // handleOpenReadDescriptionModal,
  handleOpenRequestReviewModal,
}) => {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Button
          variant="outlined"
          // onClick={handleOpenReadDescriptionModal}
          sx={{
            textTransform: "none",
            p: 1,
            color: "white",
            bgcolor: (theme) => theme.palette.custom.status.approved,
            border: "none",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "",
            },
          }}
          fullWidth
        >
          Approve
        </Button>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            p: 1,
            color: (theme) => theme.palette.custom.status.rejected,
            border: 1.5,
            borderColor: (theme) => theme.palette.custom.status.rejected,
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "",
            },
          }}
          fullWidth
        >
          Reject
        </Button>
        <Button
          variant="outlined"
          onClick={handleOpenRequestReviewModal}
          sx={{
            textTransform: "none",
            p: 1,
            // color: (theme) => theme.palette.custom.status.ended,
            border: 1,
            // borderColor: (theme) => theme.palette.custom.status.ended,
            borderRadius: "5px",
          }}
          fullWidth
        >
          Request Review
        </Button>
      </Box>
    </Box>
  );
};

export default ProposalButtons;
