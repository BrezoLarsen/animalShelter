import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

const THUMBUP_ICON = `
<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.363 0-256 114.637-256 256s114.637 256 256 256 256-114.637 256-256-114.637-256-256-256zm128.43 195.873v34.663c-16.345.006-32.226-3.197-47.204-9.516-9.631-4.066-18.604-9.305-26.811-15.636l.246 106.693c-.103 24.025-9.608 46.598-26.811 63.601-14 13.84-31.74 22.641-50.968 25.49-4.518.669-9.116 1.012-13.766 1.012-20.583 0-40.124-6.668-56.109-18.97-3.008-2.316-5.885-4.827-8.624-7.532-18.644-18.427-28.258-43.401-26.639-69.674 1.235-19.999 9.242-39.072 22.59-54.021 17.66-19.782 42.366-30.762 68.782-30.762 4.65 0 9.248.349 13.766 1.018v12.816 35.652c-4.284-1.413-8.859-2.19-13.623-2.19-24.134 0-43.659 19.69-43.298 43.842.229 15.453 8.67 28.961 21.12 36.407 5.851 3.5 12.582 5.668 19.765 6.062 5.628.309 11.032-.475 16.036-2.127 17.243-5.696 29.682-21.892 29.682-40.994l.057-71.447v-130.44h47.736c.046 4.73.526 9.345 1.418 13.817 3.603 18.101 13.806 33.805 28.006 44.511 12.382 9.339 27.8 14.875 44.511 14.875.011 0 .149 0 .137-.011v12.861z"/></svg>`;

/**
 * @title SVG icons
 */
@Component({
  selector: 'icon-tiktok',
  templateUrl: 'tiktok.html',
})
export class IconTiktok {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('tiktok', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }
}
