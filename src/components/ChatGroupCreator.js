import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGroup } from "../actions/groupActions/createGroup";

const ChatGroupCreator = () => {
  const dispatch = useDispatch();
  const [groupNameValue, setGroupNameValue] = useState("");

  const onEditHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "groupName") {
      setGroupNameValue(value);
    }
  };

  const createRoom = (e) => {
    e.preventDefault();
    dispatch(createGroup(groupNameValue));
    setGroupNameValue("");
  };
  return (
    <div>
      <form onSubmit={createRoom}>
        <label>
          Nazwa pokoju:
          <input
            type="text"
            name="groupName"
            value={groupNameValue}
            onChange={onEditHandle}
          ></input>
        </label>
        <button>Dodaj pokój</button>
      </form>
    </div>
  );
};

export default ChatGroupCreator;
