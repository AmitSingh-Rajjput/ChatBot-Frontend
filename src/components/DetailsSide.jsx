import React from "react";
import loginImage from "../images/loginBackground.png";
import kpmgWhite from "../images/kpmgWhite.png";
import symbol from "../images/symbol.png";

import SignInSide from "../Pages/Login";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import "../styles/testStyles.css";
import "../styles/general.css";
import Chatbot from "./Chatbot";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import "../styles/general.css";
import { InputAdornment, InputBase, InputLabel } from "@mui/material";
import { Form } from "react-bootstrap";
import { DynamicCutoutInput } from "./DynamicCutoutInput";
import Chatb from "./Chatb";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChatbotPane from "./ChatbotPane";
function DetailsSide() {
  const [tableToggle, setTableToggle] = useState(false);
  const handleTableExpand = () => {
    setTableToggle(!tableToggle);
  };
  const rowData = [
    {
      a: "India",
      b: "IN",
      c: 1324171354,
      d: 1324171354,
      e: 1324171354,
      f: 1324171354,
      g: 1324171354,
    },
    {
      a: "India",
      b: "IN",
      c: 1324171354,
      d: 1324171354,
      e: 1324171354,
      f: 1324171354,
      g: 1324171354,
    },
  ];
  return (
    // <DynamicCutoutInput label="Username" required={true} placeholder="Enter your username" />
    <Grid container component="main" style={{}}>
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        container
        component="main"
        // style={{ zIndex: -1 }}
      >
        <Card className="generalView" style={{ width: "100%" }}>
          <Card>
            <Typography style={{ fontSize: "1rem" }}>
              Invoice Details
            </Typography>
            <Typography style={{ fontSize: "0.6rem" }}>
              Fields marked as * are mandatory
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="Invoice Date"
                      required={true}
                      placeholder="Enter your Invoice Date"
                    />
                  </FormControl>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="Supplier ID"
                      required={true}
                      placeholder="Supplier ID"
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="PO No."
                      required={true}
                      placeholder="Enter your PO No."
                    />
                  </FormControl>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="Invoice No."
                      required={true}
                      placeholder="Enter your Invoice No."
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="Payment Terms"
                      required={true}
                      placeholder="Enter your Payment Terms"
                    />
                  </FormControl>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="Total Amount"
                      required={true}
                      placeholder="Enter your Total Amount"
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="Total Tax"
                      required={true}
                      placeholder="Enter your Total Tax"
                    />
                  </FormControl>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="Total Quantity"
                      required={true}
                      placeholder="Enter your Total Quantity"
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="Currency"
                      required={true}
                      placeholder="Enter your Currency"
                    />
                  </FormControl>
                  <FormControl sx={{ flex: 1 }}>
                    <DynamicCutoutInput
                      label="Currency Exchange Rate"
                      required={false}
                      placeholder="Enter your Currency Exchange Rate"
                    />
                  </FormControl>
                </Stack>
              </Stack>
            </Stack>
          </Card>
          {/* <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow> */}
          <Card>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                className="poppins"
                style={{ fontFamily: "Poppins,sans-serif", fontSize: "1rem" }}
              >
                Item Details
              </Typography>{" "}
              <IconButton aria-label="exp" onClick={handleTableExpand}>
                {tableToggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </div>
            {tableToggle && (
              <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{}}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="center"
                          colSpan={0.5}
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "0.6rem",
                            color: "#575F6E",
                          }}
                        >
                          Item ID
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={0.5}
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "0.6rem",
                            color: "#575F6E",
                          }}
                        >
                          Item Description
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={0.5}
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "0.6rem",
                            color: "#575F6E",
                          }}
                        >
                          Invoice Quantity
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={0.5}
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "0.6rem",
                            color: "#575F6E",
                          }}
                        >
                          PO Quantity
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={0.5}
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "0.6rem",
                            color: "#575F6E",
                          }}
                        >
                          Inv. Cost
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={0.5}
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "0.6rem",
                            color: "#575F6E",
                          }}
                        >
                          PO Cost
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={0.5}
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "0.6rem",
                            color: "#575F6E",
                          }}
                        >
                          Inv. Amount
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={0.5}
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "0.6rem",
                            color: "#575F6E",
                          }}
                        >
                          PO Amount
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowData.map((item) => (
                        <TableRow hover role="checkbox">
                          <TableCell
                            align="center"
                            colSpan={0.5}
                            style={{
                              fontFamily: "Poppins,sans-serif",
                              fontSize: "0.6rem",
                              color: "#454B54",
                            }}
                          >
                            {item.a}
                          </TableCell>
                          <TableCell
                            align="center"
                            colSpan={0.5}
                            style={{
                              fontFamily: "Poppins,sans-serif",
                              fontSize: "0.6rem",
                              color: "#454B54",
                            }}
                          >
                            {item.b}
                          </TableCell>
                          <TableCell
                            align="center"
                            colSpan={0.5}
                            style={{
                              fontFamily: "Poppins,sans-serif",
                              fontSize: "0.6rem",
                              color: "#454B54",
                            }}
                          >
                            {item.c}
                          </TableCell>
                          <TableCell
                            align="center"
                            colSpan={0.5}
                            style={{
                              fontFamily: "Poppins,sans-serif",
                              fontSize: "0.6rem",
                              color: "#454B54",
                            }}
                          >
                            {item.d}
                          </TableCell>
                          <TableCell
                            align="center"
                            colSpan={0.5}
                            style={{
                              fontFamily: "Poppins,sans-serif",
                              fontSize: "0.6rem",
                              color: "#454B54",
                            }}
                          >
                            {item.e}
                          </TableCell>
                          <TableCell
                            align="center"
                            colSpan={0.5}
                            style={{
                              fontFamily: "Poppins,sans-serif",
                              fontSize: "0.6rem",
                              color: "#454B54",
                            }}
                          >
                            {item.f}
                          </TableCell>
                          <TableCell
                            align="center"
                            colSpan={0.5}
                            style={{
                              fontFamily: "Poppins,sans-serif",
                              fontSize: "0.6rem",
                              color: "#454B54",
                            }}
                          >
                            {item.g}
                          </TableCell>
                          <TableCell
                            align="center"
                            colSpan={0.5}
                            style={{
                              fontFamily: "Poppins,sans-serif",
                              fontSize: "0.6rem",
                              color: "#454B54",
                            }}
                          >
                            {item.g}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Card>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ justifyContent: "space-evenly" }}>
              <Button
                size="md"
                variant="solid"
                style={{
                  backgroundColor: "#283D76",
                  fontFamily: "Poppins,sans-serif",
                }}
              >
                SAVE
              </Button>
              <Button
                size="md"
                variant="solid"
                style={{
                  backgroundColor: "#283D76",
                  fontFamily: "Poppins,sans-serif",
                }}
              >
                PREVIEW
              </Button>
              <Button
                size="md"
                variant="solid"
                style={{
                  backgroundColor: "#283D76",
                  fontFamily: "Poppins,sans-serif",
                }}
              >
                SUBMIT
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        // className="imageBackground"
        style={{
          marginTop: "10vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatbotPane />
      </Grid>
      {/* <Chatbot /> */}
    </Grid>
  );
}

export default DetailsSide;
