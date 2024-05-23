import react from 'react'
import './Results.css'


function Results({per}){
    return(
        <>
            <div className="valuePercent" style={{ '--percent': per }}>
                <svg width="120" height="120" >
                    <circle r="55" cx="50%" cy="50%" pathLength="100"/>
                    <circle r="55" cx="50%" cy="50%" pathLength="100"/>
                </svg>
                <label className='label-per'>{per}</label>
            </div>
            
        </>
    );
}

export default Results;