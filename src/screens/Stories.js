import React from 'react';

const Stories = ({match}) => (
    <div>
        <h3>{match.params.storiesId}</h3>
    </div>
);

export default Stories;
