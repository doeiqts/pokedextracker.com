import { connect } from 'react-redux';

import { setNotification } from '../actions/utils';

export function Notification ({ notification, setNotification }) {
  if (notification) {
    return null;
  }

  return (
    <div className="alert alert-muted">
      <i className="fa fa-times" onClick={() => setNotification(true)} />
      <p>Track a National Generation 8 dex now! <a href="http://bit.ly/pt-gen8" target="_blank" rel="noopener noreferrer">Read more</a>.</p>
    </div>
  );
}

function mapStateToProps ({ notification }) {
  return { notification };
}

function mapDispatchToProps (dispatch) {
  return {
    setNotification: (value) => dispatch(setNotification(value))
  };
}

export const NotificationComponent = connect(mapStateToProps, mapDispatchToProps)(Notification);
