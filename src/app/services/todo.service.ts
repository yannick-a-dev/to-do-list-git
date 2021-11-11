import { Injectable } from "@angular/core";

@Injectable()
export class TodoService {
  todoOne: string = "Projet 1";
  todoTwo: string = "Projet 2";
  todoThree: string = "Projet 3";
  todoFour: string = "Projet 4";
  todoName = "test";
  todoStatus = "";
  today = new Date();

  todos = [
    {
      todoName: "Projet 1",
      todoStatus: true,
      image:"http://placeimg.com/300/300/tech",
      isModif: false,
      description: "Lorem de la poule",
    },

    {
      todoName: "Projet 2",
      todoStatus: false,
      image:"http://placeimg.com/300/300/tech",
      isModif: false,
      description: "Lorem de la hoya",
    },

    {
      todoName: "Projet 3",
      todoStatus: true,
      image:"http://placeimg.com/300/300/tech",
      isModif: false,
      description: "Lorem de yaounde de la poule",
    },

    {
      todoName: "Projet 4",
      todoStatus: false,
      image:"http://placeimg.com/300/300/tech",
      isModif: false,
      description: "Lorem du coq",
    }
  ];

  onChangeStatus(i: number){
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }

  onChangeIsModif(i: any) {
    this.todos[i].isModif = !this.todos[i].isModif;
  }

  getTodo(index: number){
    if(this.todos[index]){
      return this.todos[index];
    }
    return false;
  }
}
