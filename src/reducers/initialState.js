export default {
  auth: {
    authenticated: false,
    loading: true,
    fetching: false,
    message: '',
    error: '',
  },
  day: {
    loading: false,
    day: '',
    sections: [],
  },
  modals: {
    modal: '',
  },
  tasks: {
    createTask: {
      dayId: '',
      sectionId: '',
      loading: false,
    },
  },
};
