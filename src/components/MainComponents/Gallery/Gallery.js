import React, { Component } from 'react'
import './Gallery.scss'
import ImageGallery from 'react-image-gallery';
import ceramics1 from './assets/ANCIENT WORLD/1.JPG'
import ceramics2 from './assets/ANCIENT WORLD/2.JPG'
import ceramics3 from './assets/ANCIENT WORLD/3.JPG'
import ceramics4 from './assets/ANCIENT WORLD/4.jpg'
import bronze1 from './assets/BRONZE/1.jpg'
import bronze2 from './assets/BRONZE/2.jpg'
import bronze3 from './assets/BRONZE/3.jpg'
import bronze4 from './assets/BRONZE/4.jpg'
import bronze5 from './assets/BRONZE/5.jpg'
import bronze6 from './assets/BRONZE/6.jpg'
import polymer1 from './assets/POLYMER/1.jpg'
import polymer2 from './assets/POLYMER/2.jpg'
import polymer3 from './assets/POLYMER/3.jpg'
import polymer4 from './assets/POLYMER/4.jpg'
import polymer5 from './assets/POLYMER/5.jpg'
import polymer6 from './assets/POLYMER/6.jpg'
import polymer7 from './assets/POLYMER/7.jpg'
import polymer8 from './assets/POLYMER/8.jpg'
import polymer9 from './assets/POLYMER/9.jpg'



export default class Gallery extends Component {
  state = {
    pickedGallery: 'Ceramics',
  }
  onMaterialChange = (event) => {
    console.log(event.currentTarget.textContent);
    this.setState({pickedGallery: event.currentTarget.textContent})
  }
  
  getCeramicsImages = () => {
    return [
      {
        original: ceramics1,
        thumbnail: ceramics1,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: ceramics2,
        thumbnail: ceramics2,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: ceramics3,
        thumbnail: ceramics3,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: ceramics4,
        thumbnail: ceramics4,
        originalClass: 'gallery_container__carousel-img'
      }
    ]
  }

  getBronzeImages = () => {
    return [
      {
        original: bronze1,
        thumbnail: bronze1,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: bronze2,
        thumbnail: bronze2,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: bronze3,
        thumbnail: bronze3,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: bronze4,
        thumbnail: bronze4,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: bronze5,
        thumbnail: bronze5,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: bronze6,
        thumbnail: bronze6,
        originalClass: 'gallery_container__carousel-img'
      },
    ]
  }

  getPolymerImages = () => {
    return [
      {
        original: polymer1,
        thumbnail: polymer1,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: polymer2,
        thumbnail: polymer2,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: polymer3,
        thumbnail: polymer3,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: polymer4,
        thumbnail: polymer4,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: polymer5,
        thumbnail: polymer5,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: polymer6,
        thumbnail: polymer6,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: polymer7,
        thumbnail: polymer7,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: polymer8,
        thumbnail: polymer8,
        originalClass: 'gallery_container__carousel-img'
      },
      {
        original: polymer9,
        thumbnail: polymer9,
        originalClass: 'gallery_container__carousel-img'
      }
    ]
  }
  
  getGalleryByMaterail = (pickedGallery) => {
    switch(pickedGallery){
      case 'Ceramics':
        return <ImageGallery items={this.getCeramicsImages()} />
      case 'Bronze':
          return <ImageGallery items={this.getBronzeImages()} />
      case 'Polymer':
          return <ImageGallery items={this.getPolymerImages()} />
      default:
        return null;
    }
  }
  
  render() {
      return (
          <div className="gallery"> 
              <div className="gallery-container">
                  <div className="gallery-container__gallery-options">
                    <ul className="gallery-container__material-list">
                      <li className="gallery-container__material" onClick={this.onMaterialChange}>Ceramics</li>
                      <li className="gallery-container__material" onClick={this.onMaterialChange}>Bronze</li>
                      <li className="gallery-container__material" onClick={this.onMaterialChange}>Polymer</li>
                    </ul>
                  </div>
                  {this.getGalleryByMaterail(this.state.pickedGallery)}

              </div>
          </div>
      )
  }
}
