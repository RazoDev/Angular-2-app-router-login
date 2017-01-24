import { Component } from '@angular/core';
import { Note, ApiService } from '../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'notes-admin-detal',
    template: `
        <h4>NotesAdminDetail Component</h4>
        <div *ngIf="note">
            <h3>{{ note.text }}</h3>
            <div>
                <label> Id: </label>
                    <input [(ngModel)]="note.id" disabled placeholder="noteId"/>
            </div>
            <div>
                <label>Note: </label>
                <input [(ngModel)]="note.text" placeholder="note"/>
            </div>
            <p>
                <button class="waves-afect waves-light btn-large" (click)="gotoNotes()">Back</button>
            </p>
        </div>
    `
})

export class NotesAdminDetailComponent {

    note: Note;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = +params['id'];
            this.apiService.getNote(id).then(note => this.note = note);
    });

    }
    gotoNotes() {
        this.router.navigate(['/administration/notes']);
    }
}








