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
export interface folder1props{
    data:{
    Folder_id: number;
    Folder_Name: string;
    parent_id: number | null;
    createdAt: string;
    updatedAt: string;
    }
}


export interface filesprops{
    file_id: number;
    file_name: string;
    file_size: float;
    folder_id:number,
    path:string,
    createdAt: string;
    updatedAt: string;
}

export interface YourResponseType {
    error: boolean;
    statusCode: number;
    message: string;
    data: any[]; 
  }