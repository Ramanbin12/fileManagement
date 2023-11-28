import { addfile, addfolder, upload ,rectangle} from "../assests"
import ComponentCreateButton from "../components/ComponentCreateButton/ComponentCreateButton"
import ComponentFolder from "../components/ComponentFolder/ComponentFolder"
import ComponentHeader from "../components/ComponentHeader/ComponentHeader"
const HomePage=()=>{

    return(
    <div className=" h-screen bg-cover bg-center p-10 space-y-4 "style={{ backgroundImage: `url(${rectangle})` }}>
<ComponentHeader/>
<div className="flex justify-end  p-4">
    <ComponentCreateButton />
</div>
<ComponentFolder/>
</div>
    )
}
export default HomePage