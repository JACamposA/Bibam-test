import React from 'react';
import '../styles/Dropdown.css';

class DropdownPassengersClass extends React.Component {
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
         <div className="button" onClick={this.showDropdownMenu}> Pasajeros y Clase </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a >2 Pasajeros, Económica</a></li>
         <li><a >2 Pasajeros, Económica</a></li>
         <li><a >2 Pasajeros, Económica</a></li>
         <li><a >2 Pasajeros, Económica</a></li>
         <li><a >2 Pasajeros, Económica</a></li>
         <li><a >2 Pasajeros, Económica</a></li>
         <li><a >2 Pasajeros, Económica</a></li>
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

export default DropdownPassengersClass;