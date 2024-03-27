import { Box, Typography, Paper } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Activities = ({ activities }) => {
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
        User Activity
      </Typography>
      {activities && activities.length > 0 && (
        <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
          {activities.map((activity, index) => (
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
                {activity.description}
                <OpenInNewIcon sx={{ fontSize: '16px' }} />
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {activity.description2}
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
                <CalendarMonthIcon sx={{ fontSize: '16px' }} />
                Created {activity.creationDate}
              </Typography>
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default Activities;
