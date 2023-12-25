export const AJOUTER_TACHE = 'AJOUTER_TACHE';
export const SUPPRIMER_TACHE = 'SUPPRIMER_TACHE';
export const VALIDER_TACHE = 'VALIDER_TACHE';
export const SUPPRIMER_TOUTES_TACHES = 'SUPPRIMER_TOUTES_TACHES';

export const ajouterTache = (text) => {
  return {
    type: AJOUTER_TACHE,   
    payload: {
      text,
    },
  };
};

export const supprimerTache = (id) => {
  return {
    type: SUPPRIMER_TACHE,
    payload: {
      id,
    },
  };
};

export const validerTache = (id) => {
  return {
    type: VALIDER_TACHE,
    payload: {
      id,
    },
    
  };  
};
export const supprimerToutesTaches = () => {
    return {
      type: SUPPRIMER_TOUTES_TACHES,
    };
};