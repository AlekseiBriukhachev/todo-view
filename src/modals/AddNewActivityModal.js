import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';
import {useState} from 'react';
import TodoServices from '../services/TodoServices';


const AddNewActivityModal = ({selectedUserId, ...props}) => {

	const {saveActivity} = TodoServices();
	const [activity, setActivity] = useState('');

	const onActivitySave = () => {
		saveActivity(selectedUserId, activity)
			.catch(error => console.error('Add new activity was an error!', error));
		props.onHide();
	};

	const handleInputChange = (event) => {
		setActivity({...activity, [event.target.id]: event.target.value});
	};

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add New Activity
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="title">
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter title"
							onChange={handleInputChange}/>
					</Form.Group>
					<Form.Group controlId="description">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							placeholder="Enter description"
							onChange={handleInputChange}/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onActivitySave}>Save</Button>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddNewActivityModal;