import React from 'react';
import '../styles/Dropdown.css';

class DropdownOrigin extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" >
         <div className="button" onClick={this.showDropdownMenu}> Origen </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a >Argentina</a></li>
         <li><a >Brazil</a></li>
         <li><a >Peru</a></li>
         <li><a >Chile</a></li>
         <li><a >New York</a></li>
         <li><a >Paris</a></li>
         <li><a >Inglaterra</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default DropdownOrigin;