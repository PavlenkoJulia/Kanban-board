import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../../config';
import Form from '../forms/Form';
import SelectTask from '../selectTask/SelectTask';
import './List.css';

const List = props => {
    const {type, title, tasks, allTasks, addNewTask, changeStatus} = props
    const [isFormVisible, setFormVisible] = useState(false)
    const [isSelectVisible, setSelectVisible] = useState(false)

    const handleAddNewClick = () => {
        setFormVisible(!isFormVisible)
        setSelectVisible(!isSelectVisible)
    }

    const formSubmit = (title, description) => {
        addNewTask(title, description)
        setFormVisible(false)
    }

    const tasksBacklog = allTasks.filter(tasks => tasks.status === LIST_TYPES.BACKLOG)
    const tasksReady = allTasks.filter(tasks => tasks.status === LIST_TYPES.READY)
    const tasksInProgress = allTasks.filter(tasks => tasks.status === LIST_TYPES.IN_PROGRESS)

    return (
        <div className='list'>
            <h2 className='listTitle'>{title}</h2>
            <div className='scrollWrapper'>
                {tasks.length?
                    tasks.map(task =>
                            <Link to={`/tasks/${task.id}`} key={task.id} className='taskLink'>
                                <div className='task'>{task.title}</div>
                            </Link>
                        ) : 
                            <p className='noTasks'>No tasks added yet</p>
                }
                {type === LIST_TYPES.BACKLOG && <button onClick={handleAddNewClick} className='addBtn'>+ Add card</button>}
                {type === LIST_TYPES.BACKLOG && isFormVisible && (
                    <Form formSubmit={formSubmit}/>
                )}

                {type === LIST_TYPES.READY && !isSelectVisible &&
                    <SelectTask 
                        tasks={tasksBacklog}
                        type={type}
                        changeStatus={changeStatus}
                        setSelectVisible={setSelectVisible}
                    />
                }

                {type === LIST_TYPES.IN_PROGRESS && !isSelectVisible &&
                    (<SelectTask 
                        tasks={tasksReady}
                        type={type}
                        changeStatus={changeStatus}
                        setSelectVisible={setSelectVisible}
                    />)
                }

                {type === LIST_TYPES.FINISHED && !isSelectVisible &&
                    <SelectTask 
                        tasks={tasksInProgress}
                        type={type}
                        changeStatus={changeStatus}
                        setSelectVisible={setSelectVisible}
                    />
                }

                {type !== LIST_TYPES.BACKLOG && (isSelectVisible) &&(
                    <SelectTask disabled={
                        (type === LIST_TYPES.READY) ? (tasksBacklog.length ? false : true)
                        :
                            (type === LIST_TYPES.IN_PROGRESS)? (tasksReady.length ? false : true)
                            : 
                                (type === LIST_TYPES.FINISHED)? (tasksInProgress.length ? false : true)
                                : 
                                true
                    }/>
                )}
            </div>

        </div>
    )
}

export default List;