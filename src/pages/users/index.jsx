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

// Local components
import BanUserModal from "./UserInformation/BanUserModal";
import UserInformation from "./UserInformation";
import CreatedProposal from "./CreatedProposal";
import Activities from "./Activities";
import ReasonForSuspension from "./ReasonForSuspension";

function createData(user, role, wallet, id) {
  return { user, role, wallet, id };
}

const rows = [
  createData("User 1", "Admin", "0x000...00123", "999999"),
  createData("User 2", "Admin", "0x000...00123", "999999"),
  createData("User 3", "Admin", "0x000...00123", "999999"),
  createData("User 4", "Admin", "0x000...00123", "999999"),
  createData("User 5", "Admin", "0x000...00123", "999999"),
];

function Users() {
  // Get users
  const [users, setUsers] = useState(null);
  const [bannedUsers, setBannedUsers] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      // pagination of the table?
      try {
        //const response = await
        //setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getBannedUsers = async () => {
      // pagination of the table?
      try {
        //const response = await
        //setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };
    getBannedUsers();
  }, []);

  function banUser() {}
  function revokeUserBan() {}
  function formatWallet() {}
  function formatWallet(walletString) {
    return walletString.slice(0, 4) + "..." + walletString.slice(-4);
  }

  // Tab Toggle
  const [value, setValue] = useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedGeneralUser(null);
    setSelectedBannedUser(null);
  };

  // Sort Button Logic
  const [sortAsc, setSortAsc] = useState(null);
  const handleSort = () => {
    setSortAsc((sortAsc) => (sortAsc !== null ? !sortAsc : true));
  };

  // Table
  const [selectedGeneralUser, setSelectedGeneralUser] = useState(null);
  const [selectedBannedUser, setSelectedBannedUser] = useState(null);
  const handleRowClick = (row) => {
    if (value === "0") {
      setSelectedGeneralUser(row);
    } else if (value === "1") {
      setSelectedBannedUser(row);
    }
  };

  // Modal Logic
  const [isBanModalOpen, setBanModalOpen] = useState(false);
  const handleOpenBanModal = () => {
    setBanModalOpen(true);
  };
  const handleCloseBanModal = () => {
    setBanModalOpen(false);
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
            label="General"
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
            label="Banned"
            value="1"
            sx={(theme) => ({
              mr: 1,
              minHeight: "27px",
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
            <TextField
              variant="outlined"
              placeholder="Search Users by Nickname, Wallet, or ID"
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
                    <TableCell>User</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Wallet</TableCell>
                    <TableCell>User ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      hover
                      onClick={() => handleRowClick(row)}
                      sx={{
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>{row.user}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.role}
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
                      <TableCell>
                        <Chip
                          label={row.wallet}
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
                      <TableCell>{row.id}</TableCell>
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
          {selectedGeneralUser && (
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              })}
            >
              <UserInformation
                user={selectedGeneralUser}
                tabIndex={value}
                handleOpenBanModal={handleOpenBanModal}
              />
              <CreatedProposal
                proposals={[
                  { description: "Lorem ipsum", creationDate: "123456" },
                ]}
              />
              <Activities
                activities={[
                  {
                    description: "Lorem ipsum",
                    description2: "Lorem ipsum",
                    creationDate: "123456",
                  },
                ]}
              />
            </Box>
          )}
        </TabPanel>
        <TabPanel
          value="1"
          sx={{
            p: 0,
            display: "flex",
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
            <TextField
              variant="outlined"
              placeholder="Search Users by Nickname, Wallet, or ID"
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
                    <TableCell>User</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Wallet</TableCell>
                    <TableCell>User ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      hover
                      onClick={() => handleRowClick(row)}
                      sx={{
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>{row.user}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.role}
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
                      <TableCell>
                        <Chip
                          label={row.wallet}
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
                      <TableCell>{row.id}</TableCell>
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
          {selectedBannedUser && (
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              })}
            >
              <UserInformation
                user={selectedBannedUser}
                tabIndex={value}
                handleOpenBanModal={handleOpenBanModal}
              />
              <ReasonForSuspension
                suspendedReason={{
                  description: "Lorem ipsum",
                  creationDate: "123456",
                }}
              />
            </Box>
          )}
        </TabPanel>
      </TabContext>
      <BanUserModal open={isBanModalOpen} handleClose={handleCloseBanModal} />
    </>
  );
}

export default Users;
