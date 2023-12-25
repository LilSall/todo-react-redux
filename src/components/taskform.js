// Update your TaskForm component
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ajouterTache, supprimerToutesTaches } from '../actions';
import './TaskForm.css';

const TaskForm = ({ ajouterTache, supprimerToutesTaches }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      ajouterTache(newTask);
      setNewTask('');
    }
  };

  const handleDeleteAll = () => {
    supprimerToutesTaches();
  };

  return (
    <div className="TaskForm">
      <h2>Ajouter une nouvelle tâche</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Ajouter</button>
        <button onClick={handleDeleteAll}>Supprimer toutes les tâches</button>
      </form>
    </div>
  );
};

export default connect(null, { ajouterTache, supprimerToutesTaches })(TaskForm);
