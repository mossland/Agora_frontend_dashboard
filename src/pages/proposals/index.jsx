import { useState, useEffect } from "react";

// Material-UI core imports
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
  TableRow,
  TablePagination,
  TextField,
} from "@mui/material";

// Material-UI lab imports
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// Material-UI icons imports
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Local component imports
import ProposalButtons from "./ProposalButtons";
import ProposalInformation from "./ProposalInformation";
import Votes from "./Votes";
import ReadDescriptionModal from "./ProposalInformation/ReadDescriptionModal";
import RequestReviewModal from "./ProposalInformation/RequestReviewModal";

function createData(proposalTitle, status, proponent, tag, proposalId) {
  return { proposalTitle, status, proponent, tag, proposalId };
}

const rows = [
  createData(
    "Mossland Improvement Proposal (MIP) 1",
    "Ready",
    "Chelsea",
    "Core",
    10
  ),
  createData(
    "Mossland Improvement Proposal (MIP) 2",
    "Ongoing",
    "Chelsea",
    "Core",
    10
  ),
  createData(
    "Mossland Improvement Proposal (MIP) 3",
    "Ongoing",
    "Chelsea",
    "Core",
    10
  ),
  createData(
    "Mossland Improvement Proposal (MIP) 4",
    "Ongoing",
    "Chelsea",
    "Core",
    10
  ),
  createData(
    "Mossland Improvement Proposal (MIP) 5",
    "Ended",
    "Chelsea",
    "Core",
    10
  ),
];

function Proposals() {
  const [proposals, setProposals] = useState(null);

  useEffect(() => {
    const getProposals = async () => {
      try {
        //const response = await
        //setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };
    getProposals();
  }, []);

  // Tab Toggle
  const [value, setValue] = useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedOngoingProposal(null);
    setSelectedApprovalProposal(null);
  };

  // Table Logic
  const [selectedOngoingProposal, setSelectedOngoingProposal] = useState(null);
  const [selectedApprovalProposal, setSelectedApprovalProposal] =
    useState(null);
  const handleRowClick = (row) => {
    if (value === "0") {
      setSelectedOngoingProposal(row);
      setSelectedApprovalProposal(null);
    } else if (value === "1") {
      setSelectedApprovalProposal(row);
      setSelectedOngoingProposal(null);
    }
  };

  const [sortAsc, setSortAsc] = useState(null);
  const handleSort = () => {
    setSortAsc((sortAsc) => (sortAsc !== null ? !sortAsc : true));
  };

  // Modal Logic
  const [isReadDescriptionModalOpen, setReadDescriptionModalOpen] =
    useState(false);
  const handleOpenReadDescriptionModal = () => {
    setReadDescriptionModalOpen(true);
  };
  const handleCloseReadDescriptionModal = () => {
    setReadDescriptionModalOpen(false);
  };

  const [isRequestReviewModalOpen, setRequestReviewModalOpen] = useState(false);
  const handleOpenRequestReviewModal = () => {
    setRequestReviewModalOpen(true);
  };
  const handleCloseRequestReviewModal = () => {
    setRequestReviewModalOpen(false);
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
            label="Ready, Ongoing, Ended"
            value="0"
            sx={(theme) => ({
              ml: 1,
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
            label="In Review/Reject"
            value="1"
            sx={(theme) => ({
              mr: 1,
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
                placeholder="Search Title"
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
                    <TableCell>Proposal Title</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Proponent</TableCell>
                    <TableCell>Tag</TableCell>
                    <TableCell>Proposal ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      hover
                      onClick={() => handleRowClick(row)}
                      sx={{
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>{row.proposalTitle}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
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
                      </TableCell>
                      <TableCell>{row.proponent}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.tag}
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
                      <TableCell>{row.proposalId}</TableCell>
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
          {selectedOngoingProposal && (
            <Box
              sx={() => ({
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              })}
            >
              <ProposalInformation
                proposal={selectedOngoingProposal}
                tabIndex={value}
              />
              <Votes />
            </Box>
          )}
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
                placeholder="Search Title"
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
                    <TableCell>Status</TableCell>
                    <TableCell>Proposal Title</TableCell>
                    <TableCell>Proponent</TableCell>
                    <TableCell>Tag</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      hover
                      onClick={() => handleRowClick(row)}
                      sx={{
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>
                        <Chip
                          label={row.status}
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
                      </TableCell>
                      <TableCell
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {row.proposalTitle}
                        <OpenInNewIcon sx={{ fontSize: "16px" }} />
                      </TableCell>
                      <TableCell>{row.proponent}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.tag}
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
          {selectedApprovalProposal && (
            <Box
              sx={() => ({
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              })}
            >
              <ProposalInformation
                proposal={selectedApprovalProposal}
                tabIndex={value}
                handleOpenReadDescriptionModal={handleOpenReadDescriptionModal}
              />
              <ProposalButtons
                // handleOpenReadDescriptionModal={handleOpenReadDescriptionModal}
                handleOpenRequestReviewModal={handleOpenRequestReviewModal}
              />
            </Box>
          )}
        </TabPanel>
      </TabContext>
      <ReadDescriptionModal
        open={isReadDescriptionModalOpen}
        handleClose={handleCloseReadDescriptionModal}
      />
      <RequestReviewModal
        open={isRequestReviewModalOpen}
        handleClose={handleCloseRequestReviewModal}
      />
    </>
  );
}

export default Proposals;
