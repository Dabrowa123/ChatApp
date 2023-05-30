import ChatGroupSection from "./ChatGroupsSection/ChatGroupSection";
import ChatSection from "./ChatSection/ChatSection";
import UsersSection from "./UserSection/UsersSection";
import Stack from "@mui/material/Stack";
import SettingsSection from "./SettingsSection/SettingsSection";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  fetchGroupsDataSuccess,
  fetchGroupsDataFailure,
} from "../../actions/groupActions/fetchGroupsDataActions";

const AppPanel = () => {
  const dispatch = useDispatch();
  const displaySettings = useSelector((state) => state.displaySettings);
  const isGroupsLoading = useSelector(
    (state) => state.chatGroups.isGroupsLoading
  );
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      console.log("Is Groups loading: " + isGroupsLoading);
      try {
        const response = await axios.get("http://localhost:8082/groups");
        setGroups(response.data);
        dispatch(fetchGroupsDataSuccess());
      } catch (error) {
        console.log("Błąd połączenia");
        dispatch(fetchGroupsDataFailure());
      }
    };
    if (isGroupsLoading) {
      fetchGroups();
    }
  }, [isGroupsLoading]);

  return (
    <Stack direction="row">
      <ChatGroupSection groups={groups}></ChatGroupSection>
      {!displaySettings && <ChatSection></ChatSection>}
      {displaySettings && <SettingsSection></SettingsSection>}
      <UsersSection groups={groups}></UsersSection>
    </Stack>
  );
};

export default AppPanel;
