import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Chip from "@mui/material/Chip";

const Message = ({ author, time, content }) => {
  return (
    <ListItem>
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
            label={content}
            variant="filled"
            color="primary"
            sx={{ fontSize: "16px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <ListItemText
            align="right"
            secondary={`${author} ${time}`}
          ></ListItemText>
        </Grid>
      </Grid>
    </ListItem>
  );
};

{
  /* <ListItem key="2">
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
          </ListItem> */
}

export default Message;
