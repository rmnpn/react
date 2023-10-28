import {useLocation, useParams} from "react-router-dom";

const Body = () => {

    let location = useLocation();
    let {state: postBody} = location;
    let params = useParams();


    return (
        <div>
            {postBody.body}
        </div>
    );
};

export default Body;