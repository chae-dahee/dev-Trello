import React, { ChangeEvent, FC, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { icon, input, sideFrom } from "./SideForm.css";
import { useTypedDispatch } from "../../../hooks/redux";
import { v4 } from "uuid";
import { addBoard } from "../../../store/slices/boardsSlice";
import { addLog } from "../../../store/slices/loggerSlice";

type TSideFromProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  setIsFromOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideForm: FC<TSideFromProps> = ({ setIsFromOpen }) => {
  const [inputText, setinputText] = useState("");
  const dispatch = useTypedDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setinputText(e.target.value);
  };

  const handleOnBlur = () => {
    setIsFromOpen(false);
  };

  const handleClick = () => {
    if (inputText) {
      dispatch(
        addBoard({
          board: { boardId: v4(), boardName: inputText, lists: [] },
        })
      );

      dispatch(
        addLog({
          logId: v4(),
          logMessage: `게시판 등록 : ${inputText}`,
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );
    }
  };

  return (
    <div className={sideFrom}>
      <input
        // ref={inputRef}
        autoFocus
        className={input}
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck className={icon} onMouseDown={handleClick} />
    </div>
  );
};

export default SideForm;
