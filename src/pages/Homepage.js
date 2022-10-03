import {FirstScreen} from "../components/FirstScreen";
import {NewSeason} from "../components/NewSeason";
import {NewAdmissions} from "../components/NewAdmissions";
import {OtherCollection} from "../components/OtherCollection";
import {Brands} from "../components/Brands";
import {AboveFooter} from "../components/AboveFooter";

export const Homepage = () => {
    return (
        <div>
            <FirstScreen/>
            <div className="some-table">
                <NewSeason/>
                <OtherCollection/>
            </div>
            <NewAdmissions/>
            <Brands/>
            <AboveFooter/>
        </div>
    )
}