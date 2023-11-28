import { createSlice,current } from '@reduxjs/toolkit';

const folderSlice = createSlice({
  name: 'folders',
  initialState: {
    list: [],
    currentFolderId: null,
    folders:[],
    files:[],
    folderIdStack: [],

  },
  reducers: {
    createFolderSuccess: (state, action) => {
      state.list.push(action.payload);
    },
    setCurrentFolderId: (state, action) => {
      state.currentFolderId = action.payload;
    },
    fetchFoldersSuccess: (state, action) => {
        state.folders = action.payload;

      },
      fetchFileSuccess: (state, action) => {
        state.files = action.payload;
      },
      pushToFolderIdStack: (state, action) => {
        state.folderIdStack.push(action.payload);
        console.log("inputdata",action.payload)
      },
      popFromFolderIdStack: (state) => {
        state.folderIdStack.pop();
        console.log("popdata",current(state))

      },
  },
});

export const { createFolderSuccess, setCurrentFolderId ,fetchFoldersSuccess,fetchFileSuccess,pushToFolderIdStack,popFromFolderIdStack} = folderSlice.actions;
export default folderSlice.reducer;