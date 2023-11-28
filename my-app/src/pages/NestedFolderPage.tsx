import { addfile, addfolder, upload,rectangle } from "../assests"
import ComponentBackButton from "../components/ComponentBackButton/ComponentBackButton"
import ComponentCreateButton from "../components/ComponentCreateButton/ComponentCreateButton"
import ComponentFolder from "../components/ComponentFolder/ComponentFolder"
import ComponentHeader from "../components/ComponentHeader/ComponentHeader"
import ComponentUploadButton from "../components/ComponentUploadButton/ComponentUploadButton"
const NestedFolderPage=()=>{

    return(
    <div className=" h-screen bg-cover bg-center p-10 space-y-4 "style={{ backgroundImage: `url(${rectangle})` }}>

<ComponentHeader/>
<div className="flex justify-between">
<ComponentBackButton/>
<div className="flex justify-end gap-4 p-4">
    <ComponentUploadButton/>
    <ComponentCreateButton />
</div>
</div>
<ComponentFolder/>
</div>
    )
}
export default NestedFolderPage