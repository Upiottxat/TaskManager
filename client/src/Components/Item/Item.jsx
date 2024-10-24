import React from 'react';
import PropTypes from 'prop-types';
import "./Item.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "font-awesome/css/font-awesome.min.css";
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"
import useCurd from '../../hooks/useCurd';
const Item = (props) => {
    const { deleteTask } = useCurd();
    const handleOnEdit = (index) => {
        props.SetIntputType("editTask")
        props.setInputValue(props.Title)
        console.log(index, "index at itam");
        props.SetEditIndexValue(index)
    }
    const handleOnDelete = (index) => {
        console.log(index, "when delete");
        deleteTask(index)

    }
    return (
        <div className='row item' key={props.index}>
            <div className='col m-2 mb-1 mt-1 p-2 bg-light rounded innerItem' style={{
                backgroundColor: '#f8f9fa'
            }} onMouseOver={(e) => {

                e.target.style.trasition = "all 0.3s"

            }}
                onMouseOut={(e) => {

                    e.target.style.trasition = "all 0.3s"
                }}
            >
                <div className='d-flex align-items-center ' style={{
                    justifyContent: 'space-between'
                }}>
                    <div className='title'>
                        {props.Title}
                    </div>
                    <div className='options '>
                        <FontAwesomeIcon icon={faPencil} className='m-1 mt-0 mb-0 p-2 OptionsIcon editIcon' onClick={() => handleOnEdit(props.index)} />
                        <FontAwesomeIcon icon={faTrashCan} className='m-1  mt-0 mb-0  p-2 OptionsIcon deleteIcon' onClick={() => handleOnDelete(props.index)} />
                    </div>

                </div>
            </div>
        </div>
    );
};

Item.propTypes = {
    Title: PropTypes.string,
    index: PropTypes.number,
    inputValue: PropTypes.string,
    setInputValue: PropTypes.func,
    IntputType: PropTypes.string,
    SetIntputType: PropTypes.func,
    SetEditIndexValue: PropTypes.func,
};

export default Item;
