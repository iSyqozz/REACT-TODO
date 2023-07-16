import { useState } from 'react'

const Task = ({ name, removeTask, editTask }) => {
    const [Editing, setEditing] = useState(false)
    const [NewTaskName, setNewTaskName] = useState(name)

    function handleRemoveTask() {
        removeTask(name)
    }

    const handleEditTask = () => {
        if (Editing) {
            editTask(name, NewTaskName);
        }
        setEditing(!Editing);
    };


    return (
        <div className='task'>
            {!Editing ?
                (<div className='task-name-wrapper'>
                    <div className='task-name'>
                        <div>{name}</div>
                    </div>
                </div>)
                :
                (<div className='task-name-wrapper'>
                    <input
                        className='task-name'
                        type="text"
                        value={NewTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                    />
                </div>
                )
            }
            <div className='task-delete'>
                <div className='img-wrapper' onClick={!Editing?handleRemoveTask:()=>{setEditing(!Editing)} }>
                    <img src=
                        {!Editing ?
                            "src/assets/kisspng-waste-electrical-and-electronic-equipment-directiv-trash-can-5ad11113bf5719.9556141015236508357837.png" : "src/assets/X_mark.png"}
                        alt="DEL" />
                </div>
            </div>
            <div className='task-edit'>
                <div className='img-wrapper edit-wrapper' onClick={handleEditTask}>
                    <img src=
                        {!Editing ?
                            "src/assets/kisspng-computer-icons-clip-art-stylo-5b2f291b0fab05.6204755615298173710642.png" : "src/assets/checkmark.png"}
                        alt="EDIT" />
                </div>
            </div>
        </div>
    )
}

export default Task