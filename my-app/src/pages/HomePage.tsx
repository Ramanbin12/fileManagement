import { addfile, addfolder, upload } from "../assests"
import ComponentCreateButton from "../components/ComponentCreateButton/ComponentCreateButton"
import ComponentFolder from "../components/ComponentFolder/ComponentFolder"
import ComponentHeader from "../components/ComponentHeader/ComponentHeader"
const HomePage=()=>{

    return(
    <div className=" h-screen ">

<ComponentHeader/>
<div className="flex justify-end gap-4 p-4">
    <ComponentCreateButton />
</div>
<ComponentFolder/>

</div>
    )
}
export default HomePage