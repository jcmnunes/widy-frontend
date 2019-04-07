// https://github.com/igorprado/react-notification-system/blob/master/src/styles.js
import theme from './theme';

export default {
  NotificationItem: {
    DefaultStyle: {
      borderRadius: '4px',
      padding: '14px',
    },
    success: {
      border: `1px solid ${theme.green600}`,
      backgroundColor: theme.green500,
      color: '#FFFFFF',
    },
    error: {
      border: `1px solid ${theme.red800}`,
      backgroundColor: theme.red100,
      color: theme.red800,
    },
    warning: {
      border: `1px solid ${theme.yellow800}`,
      backgroundColor: theme.yellow100,
      color: theme.yellow800,
    },
    info: {
      border: `1px solid ${theme.blue800}`,
      backgroundColor: theme.blue100,
      color: theme.blue800,
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
      color: theme.red800,
    },

    warning: {
      color: theme.yellow800,
    },

    info: {
      color: theme.blue800,
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
      color: theme.neutral700,
      width: '14px',
      height: '14px',
      fontWeight: 'normal',
      textAlign: 'center',
    },

    success: {
      color: theme.green800,
    },

    error: {
      color: theme.red800,
    },

    warning: {
      color: theme.yellow800,
    },

    info: {
      color: theme.blue800,
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
      backgroundColor: theme.green200,
      color: theme.green800,
    },

    error: {
      backgroundColor: theme.red500,
      color: '#ffffff',
    },

    warning: {
      backgroundColor: theme.yellow500,
      color: '#ffffff',
    },

    info: {
      backgroundColor: theme.blue500,
      color: '#ffffff',
    },
  },
};
