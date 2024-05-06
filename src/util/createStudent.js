import { v4 as uuidv4 } from 'uuid';

export default function createStudent(name, email) {
  return {
    id: uuidv4(),
    name: name,
    email: email
  }
}
