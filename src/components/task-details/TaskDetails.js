import { useMatch, Link } from 'react-router-dom';
import { LIST_TYPES, LIST_COPY } from '../../config';
import './TaskDetails.css';

const TaskDetail = (props) => {
    const match = useMatch("/tasks/:taskId")
    const {taskId} = match.params
    const {tasks, setTasks} = props
    const task = tasks.find(task => task.id === taskId)

    const handleChange = (e) => {
        const newStatus = e.target.value
        const updateTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {...task, status: newStatus}
            }
            return task
        })

        setTasks(updateTasks)
    }

    const renderTaskDetails = () => {
        return (
            <>
                <div>
                    <h2 className='heading'>{task.title}</h2>
                </div>
                <p className='taskDescription'>{task.description || '(no description)'}</p>
                <select onChange={handleChange} value={task.status}>
                    {Object.values(LIST_TYPES).map(list => {
                        return <option key={list} value={list}>{LIST_COPY[list]}</option>
                    })}
                </select>
            </>
        )
    }

    const renderEmptyState = () => {
        return (
            <div>
                <h2>Task with ID <em>{taskId}</em> was not found</h2>
            </div>
        )
    }

    return (
        <div className='detailsWrapper'>
            <Link className='closeLink' to='/'>&#9747;</Link>
            <div>
                {task ? renderTaskDetails() : renderEmptyState()}
            </div>
        </div>
    )
}

export default TaskDetail;