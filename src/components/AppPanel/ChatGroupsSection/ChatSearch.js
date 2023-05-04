import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const ChatSearch = () => {
  return (
    <Box mt={3}>
      <form>
        <Box component="div" display={"flex"}>
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "90%",
            }}
          >
            <InputBase
              name="groupName"
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search group"
              inputProps={{ "aria-label": "Add a group" }}
              // value={groupNameValue}
              // onChange={onEditHandle}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              type="submit"
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </form>
    </Box>
  );
};

export default ChatSearch;
