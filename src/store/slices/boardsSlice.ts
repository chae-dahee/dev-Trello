import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardsrState = { modalActive: boolean; boardArray: IBoard[] };

type TAddBoardAction = {
  board: IBoard;
};

const initialState: TBoardsrState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫번째 게시물",
      lists: [
        {
          listId: "list-0",
          listName: "list 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "dah",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Description",
              taskOwner: "dah",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "list 2",
          tasks: [
            {
              taskId: "task-3",
              taskName: "Task 3",
              taskDescription: "Description",
              taskOwner: "dah",
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, { payload }: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(payload.board);
    }, //불변성 신경 x  > immer 라이브러리 사용하기 때문이다.
  },
});

export const { addBoard } = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
