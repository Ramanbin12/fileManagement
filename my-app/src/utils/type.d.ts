export interface ComponentButtonProps{
    image:string,
    name:string
}
export interface folderNameProps{
    foldername:string
}
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch


export interface folderprops{
        Folder_id: number;
        Folder_Name: string;
        parent_id: number | null;
        createdAt: string;
        updatedAt: string;
}