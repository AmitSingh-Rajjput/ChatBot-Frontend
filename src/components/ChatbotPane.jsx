import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
// import AvatarWithStatus from './AvatarWithStatus';
// import ChatBubble from './ChatBubble';
// import ChatbotPaneHeader from './ChatbotPaneHeader';
// import { ChatProps, MessageProps } from '../types/types';
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import "../styles/chatbot.css";
import "../styles/general.css";
import Smiley from "@mui/icons-material/SentimentSatisfiedAlt";
import Add from "@mui/icons-material/AddCircle";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bgImage from "../images/bgImage.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ChatbotPane() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, fromUser: true }];
    setMessages(newMessages);
    setInput("");
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botReply = data.reply;
      setMessages([...newMessages, { text: botReply, fromUser: false }]);
    } catch (error) {
      const botReply = "Hello,user";
      setMessages([...newMessages, { text: botReply, fromUser: false }]);
      console.error("Error fetching data:", error);
    }
  };
  const defaultTheme = createTheme();
  // return (
    // <Grid
    //   item
    //   xs={4}
    //   sm={4}
    //   md={4}
    //   style={
    //     {
    //         marginTop:'10vh',
    //         height:' { xs: "calc(90dvh - var(--Header-height))", lg: "90dvh" }',
    //         overflowY:'auto',
    //         flex:1,

    //       // backgroundColor: "white",
    //       // display: "flex",
    //       // alignItems: "flex-end",
    //       // justifyContent: "flex-end",
    //       // marginTop: "10vh",
    //       // flexGrow:1,
    //     }
    //   }

    // >
    //   <Sheet
    //   // className="imageBackground"
    //     sx={{
    //       // height: { xs: "calc(90dvh - var(--Header-height))", lg: "90dvh" },
    //       height:'100%',
    //       display: "flex",
    //       flexDirection: "column",
    //       backgroundColor: "#FFFAF3",

    //     //   backgroundColor: "background.level1",
    //     }}
    //   >
    //     {/* <ChatbotPaneHeader sender={chat.sender} /> */}
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flex: 1,
    //         padding:0,
    //         // width:'100%',
    //         minHeight: 0,
    //         // px: 2,
    //         // py: 3,
    //         // overflowY: "scroll",
    //         flexDirection: "column-reverse",
    //       }}
    //     >
    //       <Stack  justifyContent="flex-end">
    //         {messages.map((message, index) => (
    //           <div
    //             style={{
    //               display: "flex",
    //               alignItems: message.fromUser ? "flex-end" : "flex-start",
    //               flexDirection: "column",
    //               // flexGrow: 1,

    //             }}
    //           >
    //             <ChatMessage
    //               key={index}
    //               text={message.text}
    //               fromUser={message.fromUser}
    //             />
    //           </div>
    //         ))}

    //         <form
    //           onSubmit={handleMessageSubmit}
    //           className="chatbot-input-form"
    //           style={{
    //             display: "flex",
    //             backgroundColor: "#283d76",
    //             borderRadius: "0.5rem",
    //             // position: 'fixed',
    //             flex:1
    //             // width:'100%'
    //                       }}
    //         >
    //           <Add style={{ color: "white" }} />
    //           <Smiley style={{ color: "white" }} />

    //           <input
    //             type="text"
    //             placeholder="Type a message..."
    //             value={input}
    //             onChange={(e) => setInput(e.target.value)}
    //             style={{ margin: "0.5rem", height: "2rem" }}
    //           />
    //           {/* <button type="submit">Send</button> */}
    //           <SendIcon style={{ color: "white" }} />
    //           <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
    //         </form>
    //       </Stack>
    //     </Box>
    //   </Sheet>
    // </Grid>

//     <Sheet
//       className="imageBackground"
//       sx={{
//         height: {
//           xs: "calc(90dvh - var(--Header-height))",
//           lg: "90dvh",
//           md: "calc(90dvh - var(--Header-height))",
//         },
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: "#FFFAF3",
//         overflowY: "auto",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flex: 1,
//           flexDirection: "column-reverse",
//           padding: 2,
//           justifyContent: "space-between",
//         }}
//       >
//         {messages.map((message, index) => (
//           <ChatMessage
//             key={index}
//             text={message.text}
//             fromUser={message.fromUser}
//           />
//         ))}
//       </Box>
//       <form
//         onSubmit={handleMessageSubmit}
//         className="chatbot-input-form"
//         style={{
//           display: "flex",
//           backgroundColor: "#283d76",
//           borderRadius: "0.5rem",
//         }}
//       >
//         <Add style={{ color: "white" }} />
//         <Smiley style={{ color: "white" }} />
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           style={{ margin: "0.5rem", height: "2rem" }}
//         />
//         <SendIcon style={{ color: "white" }} />
//         <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
//       </form>
//     </Sheet>
//   );
// }




  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  useEffect(() => {
    const newMessages = [
      ...messages,
      { text: "Hi, how can I help you?", fromUser: false },
    ];
    setMessages(newMessages);
  },[]);
  return (
    <Sheet
      className="imageBackground"
      sx={{
        height: "90vh", // Set initial height
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFAF3",
        overflowY: "auto",
        flexGrow:1, // Allow growth only on large screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column ",
          padding: 2,
          justifyContent:'flex-end'
        }}
      >
        {messages.map((message, index) => (
          <ChatMessage key={index} text={message.text} fromUser={message.fromUser} />
        ))}
      </Box>
      <form
        onSubmit={handleMessageSubmit}
        className="chatbot-input-form"
        style={{
          display: "flex",
          backgroundColor: "#283d76",
          borderRadius: "0.5rem",
        }}
      >
        <Add style={{ color: "white" }} />
        <Smiley style={{ color: "white" }} />
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ margin: "0.5rem", height: "2rem" }}
        />
        <SendIcon style={{ color: "white" }} />
        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
      </form>
    </Sheet>
  );
}

