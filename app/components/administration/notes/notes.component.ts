import { Component } from '@angular/core';
import { Note, ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'notes-admin',
    template : `
        <h4>Notes Admin Component</h4>
        <div class="collection">
            <a class="collection-item" *ngFor="let note of notes" (click)="onSelect(note)">
                {{note.id}}: {{note.text}}
            </a>
        </div>
    `
})

export class NotesAdminComponent {
    notes: Note[];
    constructor(public apiService: ApiService, public router: Router) {}

    ngOnInit() {
        this.apiService.getNotes().then(notes => this.notes = notes);
    }
    onSelect(note: Note) {
        this.router.navigate(['/administration/notes', note.id]);
    }
}