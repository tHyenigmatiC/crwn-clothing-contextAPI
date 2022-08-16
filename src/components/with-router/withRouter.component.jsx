import { useNavigate, useLocation, useParams } from "react-router-dom"

const withRouter = WrappedComponent => {

    const WrappedComponentWithRouter = props => {
        const navigate = useNavigate();
        const location = useLocation();
        const params = useParams();
        return <WrappedComponent 
                    params={params}
                    navigate={navigate}
                    location={location} 
                    {...props} 
                />;
    }

    return WrappedComponentWithRouter;

}


export default withRouter;