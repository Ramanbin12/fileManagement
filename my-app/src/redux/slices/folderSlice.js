import { createSlice } from '@reduxjs/toolkit';

const folderSlice = createSlice({
  name: 'folders',
  initialState: {
    list: [],
    currentFolderId: null,
    folders:[]
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
  },
});

export const { createFolderSuccess, setCurrentFolderId ,fetchFoldersSuccess} = folderSlice.actions;
export default folderSlice.reducer;