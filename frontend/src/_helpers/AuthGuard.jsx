import { Navigate } from "react-router-dom";
import { accountService } from "@/_Services/accountService";

const AuthGuard = ({ Children }) => {

    if (!accountService.islogged()) {
        return <Navigate to="/Home" />
    }

    return Children
};
export default AuthGuard;