import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CategoryComponent= ({prop, onCallDelete, onCallUpdate})=>{
    console.log(prop)
    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="icon">
                    <EditIcon onClick={()=> onCallUpdate(prop._id)}/>
                    <DeleteIcon onClick={()=>onCallDelete(prop._id)}/>
                    </div>
                    <div clasName="what"></div>
                    <div className="card-then">
                        <h3 className="card-tittle">{prop.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryComponent;