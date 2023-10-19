import React from 'react';

const WithLogging = WrappedComponent => {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is rendered.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLoggingComponent;
};

export default WithLogging;
