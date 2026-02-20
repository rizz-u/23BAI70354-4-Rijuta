import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Container, Button, Form } from "react-bootstrap";

export default function RSVP() {
  const { state, dispatch } = useContext(AppContext);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: { text, done: false } });
    setText("");
  };

  const toggleTask = (i) => dispatch({ type: "TOGGLE_TASK", payload: i });
  const deleteTask = (i) => dispatch({ type: "DELETE_TASK", payload: i });

  const completed = useMemo(() => {
    return state.tasks.filter(t => t.done).length;
  }, [state.tasks]);

  return (
    <Container className="my-5">
      <h2>RSVP & Task Manager</h2>

      <Form className="d-flex mb-3">
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        <Button onClick={addTask} className="ms-2">Add</Button>
      </Form>

      <p>Total: {state.tasks.length} | Completed: {completed}</p>

      {state.tasks.map((task, i) => (
        <div key={i} className="d-flex justify-content-between border p-2 my-2">
          <span
            onClick={() => toggleTask(i)}
            style={{
              cursor: "pointer",
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>

          <Button size="sm" variant="danger" onClick={() => deleteTask(i)}>
            Delete
          </Button>
        </div>
      ))}
    </Container>
  );
}