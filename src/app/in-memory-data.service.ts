import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      { id: 1, surname: 'Jquery', name: 'jscript', patronymic: 'js', phoneNumber: '418136', mail: 'asdsa@inb.ru', rating: 5, dateOfBirth: 'Jun 15, 2015', vacation: false},
      { id: 2, surname: 'Bootstrap', name: 'min', patronymic: 'css', phoneNumber: '4563634', mail: 'adjsk3@itg.ru', rating: 1, dateOfBirth: 'Jun 15, 2015', vacation: true},
      { id: 3, surname: 'Angular', name: 'tscript', patronymic: 'ts', phoneNumber: '418134236', mail: 'asdsa@query.ru', rating: 3, dateOfBirth: 'Jun 15, 2015', vacation: false},
      { id: 4, surname: 'Word', name: 'new Document', patronymic: 'docx', phoneNumber: '417966708136', mail: 'asdsa@boot.ru', rating: 0, dateOfBirth: 'Jun 15, 2015', vacation: false},
      { id: 5, surname: 'Exel', name: 'new Table', patronymic: 'xls', phoneNumber: '64743418136', mail: 'asdsa@jasmin.ru', rating: 4, dateOfBirth: 'Jun 15, 2015', vacation: true},
      { id: 6, surname: 'Game', name: 'bin', patronymic: 'exe', phoneNumber: '547457418136', mail: 'asdsa@inb.ru', rating: 2, dateOfBirth: 'Jun 15, 2015', vacation: false}
      ];
      return {users};
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }
}
