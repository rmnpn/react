import React from 'react';

const Launch = ({launch}) => {
    return (
        <div>
            <p>
                Mission name - {launch.mission_name} <br/>
                Launch year - {launch.launch_year} <br/>
               <img src={launch.links.mission_patch_small}/>  <br/>

            </p>
        </div>
    );
};

export default Launch;