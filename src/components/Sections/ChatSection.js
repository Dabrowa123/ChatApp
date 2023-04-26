import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
// import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

const ChatSection = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", height: "100vh", width: "60vw" }}>
      <Grid item xs={9}>
        <List sx={{ minHeight: "86vh" }}>
          <ListItem key="1">
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "right",
                  justifyContent: "right",
                }}
              >
                <Chip
                  label="Hey man, What's up ?"
                  variant="filled"
                  color="primary"
                  align="right"
                  sx={{ fontSize: "16px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  align="right"
                  secondary="Dominik 09:30"
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem key="2">
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "right",
                  justifyContent: "left",
                }}
              >
                <Chip
                  label="Hey, Iam Good! What about you ?"
                  variant="outlined"
                  color="primary"
                  sx={{ fontSize: "16px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <ListItemText align="left" secondary="Me 09:31"></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem key="3">
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "right",
                  justifyContent: "right",
                }}
              >
                <Chip
                  label="Cool. i am good, let's catch up!"
                  variant="filled"
                  color="primary"
                  align="right"
                  sx={{ fontSize: "16px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  align="right"
                  secondary="Dominik 10:30"
                ></ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        </List>
        <Divider />
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={11}>
            <TextField
              id="outlined-basic-email"
              label="Type Something"
              fullWidth
            />
          </Grid>
          <Grid xs={1} align="right">
            <Fab color="primary" aria-label="add">
              <SendIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatSection;
