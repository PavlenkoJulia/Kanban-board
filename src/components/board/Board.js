import './Board.css';
import uniqid from 'uniqid';
import { LIST_TYPES, LIST_COPY } from '../../config';
import List from '../list/List';

const Board = (props) => {
    const {tasks, setTasks} = props

    const addNewTask = (title, description)  => {
        const newTask = {
            id: uniqid(),
            title,
            description,
            status: LIST_TYPES.BACKLOG,
        }
        setTasks([...tasks, newTask]);
    }

    const changeStatus = (newTask, status) => {
        if (!newTask) {
            return tasks
        }

        const newStatus = status
        const newTasks = tasks.map(task => {
            if (task.id === newTask.id) {
                newTask = {...task, status: newStatus}
                return newTask
            }
            return task
        })

        const index = newTasks.indexOf(newTask)
        if (index === newTasks.length-1) {
            return setTasks(newTasks)
        } else {
            const updateTasks = [...(newTasks.slice(0, index)), ...(newTasks.slice(index+1)), newTask]
            return setTasks(updateTasks)
        }
    }

    const handleDelete = (id) => {
        const listTasks = tasks.filter(task => task.id !== id)
        setTasks(listTasks)
    }

    return (
        <div className='board'>
            {
                Object.values(LIST_TYPES).map(type => {
                    const listTasks = tasks.filter(task => task.status === type)
                    return (
                        <List
                            key={LIST_COPY[type]}
                            type={type}
                            title={LIST_COPY[type]}
                            tasks={listTasks || []}
                            allTasks={tasks}
                            addNewTask={addNewTask}
                            handleDelete={handleDelete}
                            changeStatus={changeStatus}
                        />
                    )
                })
            }
        </div>
    )
}

export default Board;