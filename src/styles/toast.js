// https://github.com/igorprado/react-notification-system/blob/master/src/styles.js
import theme from './theme';

export default {
  NotificationItem: {
    DefaultStyle: {
      borderRadius: '4px',
      padding: '14px',
    },
    success: {
      border: `1px solid ${theme.green700}`,
      backgroundColor: theme.green600,
      color: '#FFFFFF',
    },
    error: {
      border: `1px solid ${theme.red900}`,
      backgroundColor: theme.red200,
      color: theme.red900,
    },
    warning: {
      border: `1px solid ${theme.yellow900}`,
      backgroundColor: theme.yellow200,
      color: theme.yellow900,
    },
    info: {
      border: `1px solid ${theme.blue900}`,
      backgroundColor: theme.blue200,
      color: theme.blue900,
    },
  },

  Title: {
    DefaultStyle: {
      fontSize: '16px',
      fontWeight: 'bold',
    },

    success: {
      color: '#FFFFFF',
    },

    error: {
      color: theme.red900,
    },

    warning: {
      color: theme.yellow900,
    },

    info: {
      color: theme.blue900,
    },
  },

  MessageWrapper: {
    DefaultStyle: {
      fontSize: '16px',
    },
  },

  Dismiss: {
    DefaultStyle: {
      cursor: 'pointer',
      fontFamily: 'Arial',
      fontSize: '20px',
      position: 'absolute',
      top: '6px',
      right: '6px',
      lineHeight: '15px',
      backgroundColor: 'none',
      color: theme.neutral800,
      width: '14px',
      height: '14px',
      fontWeight: 'normal',
      textAlign: 'center',
    },

    success: {
      color: theme.green900,
    },

    error: {
      color: theme.red900,
    },

    warning: {
      color: theme.yellow900,
    },

    info: {
      color: theme.blue900,
    },
  },

  Action: {
    DefaultStyle: {
      background: '#ffffff',
      borderRadius: '4px',
      padding: '4px 12px',
      fontWeight: 'normal',
      fontSize: '16px',
      margin: '10px 0 0 0',
      border: 0,
    },

    success: {
      backgroundColor: theme.green300,
      color: theme.green900,
    },

    error: {
      backgroundColor: theme.red600,
      color: '#ffffff',
    },

    warning: {
      backgroundColor: theme.yellow600,
      color: '#ffffff',
    },

    info: {
      backgroundColor: theme.blue600,
      color: '#ffffff',
    },
  },
};
