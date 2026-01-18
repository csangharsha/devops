import { Card } from "react-bootstrap";

interface UserProps {
    id: String;
    firstName: String;
    middleName: String;
    lastName: String;
    username: String;
}

const User: React.FC<UserProps> = ({ id, firstName, middleName, lastName, username }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{firstName} {middleName} {lastName}</Card.Title>
                <Card.Text>Username: {username}</Card.Text>
                <p className="d-none">ID: {id}</p>
            </Card.Body>
        </Card>
    );
}

export default User;
