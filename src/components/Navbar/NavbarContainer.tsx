import { connect } from "react-redux";
import { RootStateType } from "../../redux/store";
import { Navbar } from "./Navbar";

const mstp = (state: RootStateType) => {
    return {
        authUserId: state.auth.userData?.id
    }
}

export const NavbarContainer = connect(mstp)(Navbar);