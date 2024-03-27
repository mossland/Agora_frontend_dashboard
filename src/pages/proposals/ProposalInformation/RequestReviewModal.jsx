import {
  Box,
  Button,
  IconButton,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const RequestReviewModal = ({ open, handleClose }) => {
    
  const handleSendRequestReview = () => {
    handleClose();
  };

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
            Request Review
          </Typography>
          <TextareaAutosize
            aria-label="reason for ban"
            minRows={10}
            placeholder="-"
            // value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={console.log("send request")}
            sx={{
              width: "130px",
              textTransform: "none",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RequestReviewModal;
