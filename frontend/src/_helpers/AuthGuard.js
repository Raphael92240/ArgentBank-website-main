import { Navigate } from "react-router-dom";
import { accountService } from "@/_Services/accountService";

const AuthGuard = ({ Children }) => {

    if (!accountService.islogged()) {
        return <Navigate to="/signin" />
    }

    return Children
};
export default AuthGuard;