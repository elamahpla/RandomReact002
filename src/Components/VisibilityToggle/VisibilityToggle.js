// import React, { Component } from 'react';

// class VisibilityToggle extends Component {
//   state = {
//     visibility: false
//   }
//   visibilityOpenHandler = () => {
//     this.setState(() => {
//       return {
//         visibility: true
//       };
//     });
//   }
//   visibilityCloseHandler = () => {
//     this.setState(() => {
//       return {
//         visibility: false
//       };
//     });
//   }
//   render() {
//     if(this.state.visibility === true) {
//       return (
//         <div>
//           <p>This is some bullshit text or something</p>
//           <button onClick={this.visibilityCloseHandler}>Close</button>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <button onClick={this.visibilityOpenHandler}>Open</button>
//       </div>
//     );
//   }
// }

// export default VisibilityToggle;

import React, { Component } from 'react';

class VisibilityToggle extends Component {
  state = {
    visibility: false
  }
  handleToggleVisibility = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey, this is some other bullshit</p>
          </div>
        )}
      </div>
    );
  }
}

export default VisibilityToggle;