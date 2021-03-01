import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {
  }

  showGallery(index: number) {
    let prop = {
        images: [
            {path: 'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg'},
            {path: 'https://www.barcelona-metropolitan.com/downloads/32285/download/Cat-House-photo-by-Josep-Maria-Ezcurra-01.jpg'},
            {path: 'https://images.squarespace-cdn.com/content/v1/5c74288d9b8fe8141c2f96cd/1555288510844-DT8C4TKOK1SCQAYCL5SZ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/cat-read-to-pounce-julie-austin-photography.jpg'},
            {path: 'https://www.petmd.com/sites/default/files/styles/slide_show_840_574/public/petmd-calming-cat.jpg?itok=aln2Frkl'},
            {path: 'https://www.adventurecats.org/wp-content/uploads/2015/09/attentive-cat.jpg'}
        ],
        index
    };
    this.gallery.load(prop);
}

}
