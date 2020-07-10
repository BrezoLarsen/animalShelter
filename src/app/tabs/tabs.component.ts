import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'as-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
}