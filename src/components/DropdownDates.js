import React from 'react';
import '../styles/Dropdown.css';

class DropdownDates extends React.Component {
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
         <div className="button" onClick={this.showDropdownMenu}> Fecha </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a >1-1-1991 - 5-1-1991</a></li>
         <li><a >1-1-1991 - 5-1-1991</a></li>
         <li><a >1-1-1991 - 5-1-1991</a></li>
         <li><a >1-1-1991 - 5-1-1991</a></li>
         <li><a >1-1-1991 - 5-1-1991</a></li>
         <li><a >1-1-1991 - 5-1-1991</a></li>
         <li><a >1-1-1991 - 5-1-1991</a></li>
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

export default DropdownDates;