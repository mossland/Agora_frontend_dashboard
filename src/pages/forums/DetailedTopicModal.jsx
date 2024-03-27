import React, { useState } from "react";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DetailedTopicModal = ({ open, handleClose }) => {
  const handleConfirmBan = () => {
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
          width: 840,
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
            Detailed Topic
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600 }}
              gutterBottom
            >
              Resource
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
              Contents
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
              Reporter
            </Typography>
            <Typography variant="body2" gutterBottom>
              -
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <Button
              variant="outlined"
              onClick={console.log("Delete")}
              sx={{
                height: '41px',
                borderRadius: '5px',
                textTransform: "none",
              }}
              >
              Delete
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                height: '41px',
                borderRadius: '5px',
                textTransform: "none",
              }}
              >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={console.log("Pin topics")}
              sx={{
                height: '41px',
                borderRadius: '5px',
                textTransform: "none",
              }}
            >
              Pin this Topic
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default DetailedTopicModal;
