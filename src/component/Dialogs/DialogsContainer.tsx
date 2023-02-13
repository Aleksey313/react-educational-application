import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {actions} from "../../redux/dialogs-reducer";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {...actions}))(Dialogs)



