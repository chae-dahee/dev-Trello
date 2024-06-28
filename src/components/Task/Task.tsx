import React, { FC } from "react";
import { container, description, title } from "./Task.css";

type TTAskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
};

const Task: FC<TTAskProps> = ({
  index,
  id,
  boardId,
  taskName,
  taskDescription,
}) => {
  return (
    <div className={container}>
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDescription}</div>
    </div>
  );
};

export default Task;
