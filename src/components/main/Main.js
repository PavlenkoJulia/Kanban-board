import './Main.css';
import {Routes, Route} from 'react-router-dom';
import Board from '../board/Board';
import TaskDetail from '../task-details/TaskDetails';

const Main = (props) => {
	return (
		<main className='main'>
			<Routes>
				<Route exact path={'/'} element={<Board {...props} />}>
				</Route>
				<Route path={'/tasks/:taskId'} element={<TaskDetail {...props} />}>
				</Route>
			</Routes>
		</main>
	)
}

export default Main