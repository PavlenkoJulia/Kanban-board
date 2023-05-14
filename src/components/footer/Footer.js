import './Footer.css';
import { LIST_TYPES, LIST_COPY } from '../../config';

function Footer(props) {
    const {tasks} = props
    return (
        <footer className='footer'>
            <div className='taskStatus'>
                {Object.values(LIST_TYPES).map(type => {
                    const listTasks = tasks.filter(task => task.status === type)
                    if (!listTasks.length) return null;
                    return (
                        <p className='taskStatusItem' key={LIST_COPY[type]}>{LIST_COPY[type]}: {listTasks.length}</p>
                    )
                })}
            </div>

            <div className='copyright'>Kanban board by Julia Pavlenko, 2023</div>
        </footer>
    )
}

export default Footer;