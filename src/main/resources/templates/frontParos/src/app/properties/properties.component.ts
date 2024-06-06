import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  properties = [
    {
      id: 1,
      title: 'Beautiful Family House',
      description: '4 Beds, 2 Baths, 2500 sqft',
      imageUrl: 'https://source.unsplash.com/400x200/?house',
    },
    {
      id: 2,
      title: 'Modern Apartment',
      description: '2 Beds, 1 Bath, 1000 sqft',
      imageUrl: 'https://source.unsplash.com/400x200/?apartment',
    },
    {
      id: 3,
      title: 'Cozy Cottage',
      description: '3 Beds, 2 Baths, 1500 sqft',
      imageUrl: 'https://source.unsplash.com/400x200/?cottage',
    },
    {
      id: 4,
      title: 'Luxurious Villa',
      description: '5 Beds, 4 Baths, 3500 sqft',
      imageUrl: 'https://source.unsplash.com/400x200/?villa',
    },
    {
      id: 5,
      title: 'Elegant Condo',
      description: '3 Beds, 2 Baths, 2000 sqft',
      imageUrl: 'https://source.unsplash.com/400x200/?condo',
    },
    {
      id: 6,
      title: 'Grand Mansion',
      description: '6 Beds, 5 Baths, 5000 sqft',
      imageUrl: 'https://source.unsplash.com/400x200/?mansion',
    },
    // Add more properties here...
  ];
  filteredProperties: any = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredProperties = [...this.properties];
  }

  filterProperties(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredProperties = this.properties.filter((property) =>
      property.title.toLowerCase().includes(searchTerm)
    );
  }
}
