import {
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ReadDescriptionModal = ({ open, handleClose }) => {
  // const handleConfirmBan = () => {
  //   console.log(reason);
  //   handleClose();
  // };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="ban-user-modal-title"
      aria-describedby="ban-user-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 420,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          outline: "none",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Typography id="ban-user-modal-title" variant="h6" component="h2">
            Proposal Description
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600 }}
              gutterBottom
            >
              Title
            </Typography>
            <Typography variant="body2" gutterBottom>
              -
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600 }}
              gutterBottom
            >
              Description
            </Typography>
            <Typography variant="body2" gutterBottom>
              -
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600 }}
              gutterBottom
            >
              Schedule
            </Typography>
            <Typography variant="body2" gutterBottom>
              -
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={console.log("I read this description")}
            sx={{
              width: "130px",
              textTransform: "none",
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReadDescriptionModal;
