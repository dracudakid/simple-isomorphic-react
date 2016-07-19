import React, { PropTypes } from 'react';

export default class Html extends React.Component {
  
  static propTypes = {
    bodyHtml: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html>
        <head>
          <title>Simple Universal React</title>
        </head>
        <body dangerouslySetInnerHTML={{ __html: this.props.bodyHtml }}>
          
        </body>
      </html>
    );
  }
}
