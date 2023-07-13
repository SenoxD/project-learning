import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent {
  items = [
    { 
      title: 'HTML - Hypertext Markup Language', 
      items: [
        { label: 'Ce este HTML?', route: 'html' },
        { label: 'Liste', route: 'item2' },
        { label: 'Formulare', route: 'item3' }
      ]
    },
    { 
      title: 'HTML AVANSAT', 
      items: [
        { label: 'Image Element', route: '' },
        { label: 'Table', route: 'item2' },
        { label: 'SECTION', route: 'item3' },
        { label: 'Div', route: 'item3' },
      ]
    },
    { 
      title: 'CSS - Cascading Style Sheets', 
      items: [
        { label: 'comenzi normale', route: '' },
        { label: 'diferente', route: 'item2' },
        { label: 'culori', route: 'item3' },
        { label: 'texte', route: 'item3' },
      ]
    },
    { 
      title: 'CSS Avansat', 
      items: [
        { label: 'Ce este Css?', route: '' },
        { label: 'Liste', route: 'item2' },
        { label: 'Formulare', route: 'item3' },
        { label: 'Formulare', route: 'item3' },
      ]
    },
    { 
      title: 'JavaScript', 
      items: [
        { label: 'Item 1', route: 'item1' },
        { label: 'Item 2', route: 'item2' },
        { label: 'Item 3', route: 'item3' }
      ]
    },
    { 
      title: 'JavaScript Avansat', 
      items: [
        { label: 'Item 1', route: 'item1' },
        { label: 'Item 2', route: 'item2' },
        { label: 'Item 3', route: 'item3' }
      ]
    },
    { 
      title: 'JavaScipt DOM / ES6', 
      items: [
        { label: 'Item 1', route: 'item1' },
        { label: 'Item 2', route: 'item2' },
        { label: 'Item 3', route: 'item3' }
      ]
    },
    { 
      title: 'MySQL Basic', 
      items: [
        { label: 'Item 1', route: 'item1' },
        { label: 'Item 2', route: 'item2' },
        { label: 'Item 3', route: 'item3' }
      ]
    },
    { 
      title: 'MySQL Avansat', 
      items: [
        { label: 'Item 1', route: 'item1' },
        { label: 'Item 2', route: 'item2' },
        { label: 'Item 3', route: 'item3' }
      ]
    },
    { 
      title: 'Angular Incepatori', 
      items: [
        { label: 'Item 1', route: 'item1' },
        { label: 'Item 2', route: 'item2' },
        { label: 'Item 3', route: 'item3' }
      ]
    },
    { 
      title: 'Angular Avansat', 
      items: [
        { label: 'Item 1', route: 'item1' },
        { label: 'Item 2', route: 'item2' },
        { label: 'Item 3', route: 'item3' }
      ]
    },

  ];

  isDropdownVisible: boolean[] = [];

  toggleDropdown(index: number) {
    this.isDropdownVisible[index] = !this.isDropdownVisible[index];
  }
}