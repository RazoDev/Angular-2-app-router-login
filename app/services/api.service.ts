import { Injectable } from '@angular/core';

export class Note {
    constructor(public id: number, public text: string){}
}

const NOTES: Note[] =[
new Note(1, 'Nota1'),
new Note(2, 'Nota2'),
new Note(3, 'Nota3')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ApiService {
      getNotes() {
        return new Promise<Note[]>(resolve => {
            setTimeout(() => {resolve(NOTES); }, FETCH_LATENCY);
        });
    }

    getNote(id: number | string) {
        return new Promise<Note>(resolve => {
            setTimeout(() => {
                resolve(NOTES.filter(note => note.id === +id)[0]);
            }, FETCH_LATENCY);
        });
    }
}