import React from 'react';
import { useState } from 'react';
function mytodoapp() {
  const [task, setTask] = useState(['task1', 'task2', 'task3']);
  const [newTask, setNewtask] = useState('');
  const handleInputEvent = (event) => {
    setNewtask(event.target.value);
  };
  const handleAddEvent = () => {
    if (newTask.trim() !== '') {
      setTask((t) => [...t, newTask]);
    }
    setNewtask('');
  };
  const handleDeleteEvent = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };
  const handleUpEvent = (index) => {
    if (index > 0) {
      const updatedtask = [...task];
      [updatedtask[index], updatedtask[index - 1]] = [
        updatedtask[index - 1],
        updatedtask[index],
      ];
      setTask(updatedtask);
    }
  };
  const handleDownEvent = (index) => {
    if (index !== task.length - 1) {
      const updatedtask = [...task];
      [updatedtask[index], updatedtask[index + 1]] = [
        updatedtask[index + 1],
        updatedtask[index],
      ];
      setTask(updatedtask);
    }
  };

  return (
    <div className="container">
      <div className="heading part">
      <h1 className="heading"> TO-DO-APP</h1>
      <input
       className="input"
        type="text"
        placeholder="ENTER YOUR TASK"
        onChange={handleInputEvent}
        value={newTask}
      />
      </div>

      <button  className="addbutton" onClick={handleAddEvent}> ADD TASK</button>
      <h2 className="heading tag">List of task</h2>
      <div className="bodypart">
       
        <ul>
          {task.map((tasks, index) => (
            <li className="taskarea" key={index}>
              {tasks.toUpperCase()}{' '}
              <button
                key={index}
                onClick={() => handleDeleteEvent(index)}
                className="deletebutton"
              >
                DELETE TASK
              </button>{' '}
              <button onClick={() => handleUpEvent(index)} className="upbutton">
                👆
              </button>
              <button
                onClick={() => handleDownEvent(index)}
                className="downbutton"
              >
                👇
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default mytodoapp;

