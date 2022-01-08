import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [expert, setExpert] = useState([])
    useEffect(() => {
        fetch('expert.json')
            .then(res => res.json())
            .then(data => setExpert(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='my-3'>Our Expert</h1>
            <div className="row">
                {
                    expert.map(expert =><Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;