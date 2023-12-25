
import { AJOUTER_TACHE, SUPPRIMER_TACHE, VALIDER_TACHE, SUPPRIMER_TOUTES_TACHES } from '../actions';



const initialState = [
];

const taskreducer = (state = initialState, action) => {

    switch (action.type) {
        case AJOUTER_TACHE:
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.payload.text,
                    completed: false,
                },
            ];

        case SUPPRIMER_TACHE:
            return state.filter(task => task.id !== action.payload.id);

        case VALIDER_TACHE:
            return state.map(task =>
                task.id === action.payload.id ? { ...task, completed: !task.completed } : task
            );

        case SUPPRIMER_TOUTES_TACHES:
            return [];

        default:
            return state;
    }
}

export default taskreducer;