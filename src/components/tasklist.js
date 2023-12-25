import React from 'react';
import { connect } from 'react-redux';
import { supprimerTache, validerTache } from '../actions';
import './TaskList.css';
const TaskList = ({ tasks, supprimerTache, validerTache }) => {
  return (
    <div className="TaskList">
      <h2>Liste des tâches :</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
            <button className="valider" onClick={() => validerTache(task.id)}>
              {task.completed ? 'Annuler' : 'Valider'}
            </button>
            <button className="supprimer" onClick={() => supprimerTache(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { supprimerTache, validerTache })(TaskList);
