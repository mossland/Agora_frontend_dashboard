import { useState, useEffect } from "react";

// MUI Core imports
import {
  Box,
  Button,
  Chip,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";

// MUI Lab imports
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// MUI Icons imports
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

// Local imports
import DetailedTopicModal from "./DetailedTopicModal";


function createData(
  topicTitle,
  created,
  author,
  category,
  topicId,
  reportedDate,
  reporter
) {
  return {
    topicTitle,
    created,
    author,
    category,
    topicId,
    reportedDate,
    reporter,
  };
}

const rows = [
  createData(
    "Mossland Improvement Proposal (MIP) 1: Build own DAO system in Mossverse",
    "Dec. 22, 2023",
    "Chelsea",
    "Announcement",
    "100",
    "Dec. 22, 2023",
    "Chelsea"
  ),
  createData(
    "Mossland Improvement Proposal (MIP) 1: Build own DAO system in Mossverse",
    "Dec. 22, 2023",
    "Chelsea",
    "Announcement",
    "100",
    "Dec. 22, 2023",
    "Chelsea"
  ),
  createData(
    "Mossland Improvement Proposal (MIP) 1: Build own DAO system in Mossverse",
    "Dec. 22, 2023",
    "Chelsea",
    "Announcement",
    "100",
    "Dec. 22, 2023",
    "Chelsea"
  ),
  createData(
    "Mossland Improvement Proposal (MIP) 1: Build own DAO system in Mossverse",
    "Dec. 22, 2023",
    "Chelsea",
    "QnA",
    "100",
    "Dec. 22, 2023",
    "Chelsea"
  ),
  createData(
    "Mossland Improvement Proposal (MIP) 1: Build own DAO system in Mossverse",
    "Dec. 22, 2023",
    "Chelsea",
    "Announcement",
    "100",
    "Dec. 22, 2023",
    "Chelsea"
  ),
];

function Forums() {
  // Tab Toggle
  const [value, setValue] = useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Sort Logic
  const [sortAsc, setSortAsc] = useState(null);
  const handleSort = () => {
    setSortAsc((sortAsc) => (sortAsc !== null ? !sortAsc : true));
  };

  // Modal Logic
  const [isDetailedTopicModalOpen, setDetailedTopicModalOpen] = useState(false);
  const handleOpenDetailedTopicModal = () => {
    setDetailedTopicModalOpen(true);
  };
  const handleCloseDetailedTopicModal = () => {
    setDetailedTopicModalOpen(false);
  };

  return (
    <>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          sx={(theme) => ({
            display: "inline-flex",
            py: 1,
            border: 1,
            borderColor: theme.palette.custom.border,
            borderRadius: "7.5px",
            "& .MuiTabs-indicator": {
              display: "none",
            },
          })}
        >
          <Tab
            label="Topics"
            value="0"
            sx={(theme) => ({
              mx: 1,
              textTransform: "none",
              color: theme.palette.primary.main,
              borderRadius: "5px",
              "&.Mui-selected": {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.custom.hover,
              },
            })}
          />
          <Tab
            label="Reported"
            value="1"
            sx={(theme) => ({
              textTransform: "none",
              color: theme.palette.primary.main,
              borderRadius: "5px",
              "&.Mui-selected": {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.custom.hover,
              },
            })}
          />
          <Tab
            label="Deleted"
            value="2"
            sx={(theme) => ({
              mx: 1,
              textTransform: "none",
              color: theme.palette.primary.main,
              borderRadius: "5px",
              "&.Mui-selected": {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.custom.hover,
              },
            })}
          />
        </TabList>
        <TabPanel
          value="0"
          sx={{
            mt: 4,
            p: 0,
            display: "flex",
            justifyContent: "space-between",
            gap: "35px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                variant="outlined"
                placeholder="Search Topic ID or Title"
                sx={(theme) => ({
                  width: "350px",
                  fieldset: {
                    border: 1,
                    borderColor: theme.palette.custom.border,
                    borderRadius: "5px",
                  },
                  input: {},
                })}
              />
              <Box
                sx={(theme) => ({
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: 1,
                  borderColor: theme.palette.custom.border,
                  borderRadius: "5px",
                })}
              >
                <Button
                  onClick={handleSort}
                  sx={{ textTransform: "none", pl: 2, height: "100%" }}
                >
                  Latest
                  <UnfoldMoreIcon sx={{ ml: 1 }} />
                </Button>
              </Box>
            </Box>
            <TableContainer
              component={Paper}
              elevation={0}
              sx={(theme) => ({
                border: 1,
                borderColor: theme.palette.custom.border,
                borderRadius: "5px",
              })}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Topic Title</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Topic ID</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      hover
                      onClick={handleOpenDetailedTopicModal}
                      sx={{
                        cursor: 'pointer',
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell sx={{}}>
                        {row.topicTitle}
                        <OpenInNewIcon sx={{ fontSize: "16px", ml: '10px', verticalAlign: 'middle' }} />
                      </TableCell>
                      <TableCell>{row.created}</TableCell>
                      <TableCell>{row.author}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.category}
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
                      </TableCell>
                      <TableCell>{row.topicId}</TableCell>
                      <TableCell>
                        <MoreHorizIcon
                          sx={{
                            "&:hover": {},
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              // count={totalNumberOfRows} // total number of items
              rowsPerPage={10} // rows per page
              // page={currentPage} // current page number
              // onPageChange={handlePageChange} // function to call when a new page is selected
              // onRowsPerPageChange={handleRowsPerPageChange} // function to call when rows per page is changed
              // Styling for pagination to match your uploaded image
              sx={{
                display: "flex",
                justifyContent: "space-between",
                ".MuiTablePagination-toolbar": {
                  justifyContent: "space-between",
                  padding: "8px 16px",
                },
                ".MuiTablePagination-selectRoot": {
                  display: "none",
                },
                ".MuiTablePagination-actions": {
                  flexShrink: 0,
                },
                ".MuiButtonBase-root": {
                  margin: "0 4px",
                },
              }}
            />
          </Box>
        </TabPanel>
        <TabPanel
          value="1"
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "space-between",
            gap: "35px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                variant="outlined"
                placeholder="Search Topic ID, Reporter or Title"
                sx={(theme) => ({
                  width: "350px",
                  fieldset: {
                    border: 1,
                    borderColor: theme.palette.custom.border,
                    borderRadius: "5px",
                  },
                  input: {},
                })}
              />
              <Box
                sx={(theme) => ({
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: 1,
                  borderColor: theme.palette.custom.border,
                  borderRadius: "5px",
                })}
              >
                <Button
                  onClick={console.log("empty list")}
                  sx={{ textTransform: "none", px: 2, height: "100%" }}
                >
                  Empty List
                </Button>
              </Box>
            </Box>
            <TableContainer
              component={Paper}
              elevation={0}
              sx={(theme) => ({
                border: 1,
                borderColor: theme.palette.custom.border,
                borderRadius: "5px",
              })}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Topic ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Reported Date</TableCell>
                    <TableCell>Reporter</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.topicId}</TableCell>
                      <TableCell
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {row.topicTitle}
                        <OpenInNewIcon sx={{ fontSize: "16px" }} />
                      </TableCell>
                      <TableCell>{row.reportedDate}</TableCell>
                      <TableCell>{row.reporter}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              // count={totalNumberOfRows} // total number of items
              rowsPerPage={10} // rows per page
              // page={currentPage} // current page number
              // onPageChange={handlePageChange} // function to call when a new page is selected
              // onRowsPerPageChange={handleRowsPerPageChange} // function to call when rows per page is changed
              // Styling for pagination to match your uploaded image
              sx={{
                // border: '1px solid red',
                display: "flex",
                justifyContent: "space-between",
                ".MuiTablePagination-toolbar": {
                  justifyContent: "space-between",
                  padding: "8px 16px",
                },
                ".MuiTablePagination-selectRoot": {
                  display: "none",
                },
                ".MuiTablePagination-actions": {
                  flexShrink: 0,
                },
                ".MuiButtonBase-root": {
                  margin: "0 4px",
                },
              }}
            />
          </Box>
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "space-between",
            gap: "35px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                variant="outlined"
                placeholder="Search Topic ID, Reporter or Title"
                sx={(theme) => ({
                  width: "350px",
                  fieldset: {
                    border: 1,
                    borderColor: theme.palette.custom.border,
                    borderRadius: "5px",
                  },
                  input: {},
                })}
              />
              <Box
                sx={(theme) => ({
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: 1,
                  borderColor: theme.palette.custom.border,
                  borderRadius: "5px",
                })}
              >
                <Button
                  onClick={console.log("empty list")}
                  sx={{ textTransform: "none", px: 2, height: "100%" }}
                >
                  Empty List
                </Button>
              </Box>
            </Box>
            <TableContainer
              component={Paper}
              elevation={0}
              sx={(theme) => ({
                border: 1,
                borderColor: theme.palette.custom.border,
                borderRadius: "5px",
              })}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Topic ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Reported Date</TableCell>
                    <TableCell>Reporter</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.topicId}</TableCell>
                      <TableCell
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {row.topicTitle}
                        <OpenInNewIcon sx={{ fontSize: "16px" }} />
                      </TableCell>
                      <TableCell>{row.reportedDate}</TableCell>
                      <TableCell>{row.reporter}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              // count={totalNumberOfRows} // total number of items
              rowsPerPage={10} // rows per page
              // page={currentPage} // current page number
              // onPageChange={handlePageChange} // function to call when a new page is selected
              // onRowsPerPageChange={handleRowsPerPageChange} // function to call when rows per page is changed
              // Styling for pagination to match your uploaded image
              sx={{
                // border: '1px solid red',
                display: "flex",
                justifyContent: "space-between",
                ".MuiTablePagination-toolbar": {
                  justifyContent: "space-between",
                  padding: "8px 16px",
                },
                ".MuiTablePagination-selectRoot": {
                  display: "none",
                },
                ".MuiTablePagination-actions": {
                  flexShrink: 0,
                },
                ".MuiButtonBase-root": {
                  margin: "0 4px",
                },
              }}
            />
          </Box>
        </TabPanel>
      </TabContext>
      <DetailedTopicModal
        open={isDetailedTopicModalOpen}
        handleClose={handleCloseDetailedTopicModal}
      />
    </>
  );
}

export default Forums;
