import { createAction, handleActions } from 'redux-actions';

// Actions
export const LOAD_MOLECULES   = 'LOAD_MOLECULES';
export const REQUEST_MOLECULES   = 'REQUEST_MOLECULES';
export const RECEIVE_MOLECULES   = 'RECEIVE_MOLECULES';

export const LOAD_MOLECULE   = 'LOAD_MOLECULE';
export const LOAD_MOLECULE_BY_ID   = 'LOAD_MOLECULE_BY_ID';
export const REQUEST_MOLECULE_BY_ID = 'REQUEST_MOLECULE_BY_ID';
export const REQUEST_MOLECULE   = 'REQUEST_MOLECULE';
export const RECEIVE_MOLECULE   = 'RECEIVE_MOLECULE';

export const SELECT_MOLECULE = 'SELECT_MOLECULE';

export const initialState = {
    molecules: [],
    byId: {},
    byInchiKey: {},
    error: null,
  };

// Reducer
const reducer = handleActions({
  REQUEST_MOLECULES: (state, action) => {
    if (action.error) {
      return {...state, error: action.payload.error};
    }
    else {
      return {...state,  error:null };
    }
  },
  REQUEST_MOLECULE: (state, action) => {
    if (action.error) {
      return {...state, error: action.payload.error};
    }
    else {
      return {...state,  error:null };
    }
  },
  REQUEST_MOLECULE_BY_ID: (state, action) => {
    if (action.error) {
      return {...state, error: action.payload.error};
    }
    else {
      return {...state,  error:null };
    }
  },
  RECEIVE_MOLECULES: (state, action) => {
    const molecules = action.payload.molecules;
    return {...state,  molecules };
  },
  RECEIVE_MOLECULE: (state, action) => {
    const molecule = action.payload.molecule;
    const byId = {...state.byId, [molecule._id]: molecule };
    const byInchiKey = {...state.byInchiKey, [molecule.inchikey]: molecule._id }
    return {...state, byId, byInchiKey};
  }
}, initialState);

// Action Creators

// Fetch molecules
export const loadMolecules = createAction(LOAD_MOLECULES);

export const requestMolecules = createAction(REQUEST_MOLECULES);

export const receiveMolecules = createAction(RECEIVE_MOLECULES, (molecules) => ({ molecules }));

// Fetch molecule
export const loadMolecule = createAction(LOAD_MOLECULE, (inchikey) => ({ inchikey }));

export const loadMoleculeById = createAction(LOAD_MOLECULE_BY_ID, (id) => ({ id }));

export const requestMoleculeById = createAction(REQUEST_MOLECULE_BY_ID, (id) => ({ id }));

export const requestMolecule = createAction(REQUEST_MOLECULE, (inchikey) => ({ inchikey }));

export const receiveMolecule = createAction(RECEIVE_MOLECULE, (molecule) => ({ molecule }));

export default reducer;

