import  { FC } from "react";
import { IList } from "../../types";
import List from "../List/List";
import ActionBtn from "../ActionBtn/ActionBtn";
import { listsContainer } from "./ListsContainer.css";

type TListsContainerProps = {
  boardId: string;
  lists: IList[];
};

const ListsContainer: FC<TListsContainerProps> = ({ lists, boardId }) => {
  return (
    <div className={listsContainer}>
      {lists.map((list) => (
        <List key={list.listId} list={list} boardId={boardId} />
      ))}
      <ActionBtn boardId={boardId} listId={""} list />
    </div>
  );
};

export default ListsContainer;
