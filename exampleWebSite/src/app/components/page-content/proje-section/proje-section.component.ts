import { Component, OnInit } from '@angular/core';
import { PhotosModel } from 'src/models/photos';
import { PhotosService } from 'src/providers/photos.service';

@Component({
  selector: 'app-proje-section',
  templateUrl: './proje-section.component.html',
  styleUrls: ['./proje-section.component.css']
})
export class ProjeSectionComponent implements OnInit {
  
  photos: PhotosModel[];

  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(
      (datas: PhotosModel[]) => {
        this.photos = datas;
      },
      err => console.log(err)
    )
  }

}
