import React, {useState} from 'react'

const Characters = ({ characters =[] }) => {

    const [state, setState] = useState("");
    console.log(state);

    return (
        <>
         <div className="mb-3">
            <input type="text" className="form-control" name="nombrepersonaje" id="nombrepersonaje" placeholder="Ingresa el nombre del personaje" onChange={ e => setState(e.target.value)}/>
        </div>
            <div className='row'>
                {characters.filter((user) => 
                    user.name.toLowerCase().includes(state)
                ).map((item, index) => (
                        <div key={index} className='col mb-4'>
                            <div className='card' style={{minWidth: "200px"}}>
                                <img src={item.image} alt=''/>
                                <div className="card-body">
                                    <h5 className='card-title'>{item.name}</h5>
                                </div>
                                <hr />
                            </div>
                        </div>
                    ))}

            </div>
        </>
    );
};

export default Characters