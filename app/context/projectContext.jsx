'use client';

import { createContext, useReducer, useContext } from 'react';

const initialState = {
  currentProject: 'Welcome',
  showForm: false,
};

export const ProjectContext = createContext({
  currentProject: '',
  showForm: false,
  setCurrentProject: (currentProject) => currentProject,
  setShowForm: (showForm) => showForm,
});

const projectReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PROJECT':
      return {
        ...state,
        currentProject: action.payload,
      };
    case 'SET_SHOW_FORM':
      return {
        ...state,
        showForm: action.payload,
      };
    default:
      return { ...state };
  }
};

export const ProjectProvider = (props) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const setCurrentProject = (currentProject) =>
    dispatch({ type: 'SET_CURRENT_PROJECT', payload: currentProject });

  const setShowForm = (showForm) =>
    dispatch({ type: 'SET_SHOW_FORM', payload: showForm });

  return (
    <ProjectContext.Provider
      value={{
        currentProject: state.currentProject,
        showForm: state.showForm,
        setCurrentProject,
        setShowForm,
      }}
      {...props}
    />
  );
};

export const useProjectContext = () => useContext(ProjectContext);
