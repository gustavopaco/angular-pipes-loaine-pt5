import {Component, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Aprendendo JavaScript",
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: "http://google.com"
  }

  livros: any[] = ["Java", "Angular 2"];
  filtro: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  addNovoCurso() {
    this.livros.push(this.filtro);
    console.log(this.livros);
  }

  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === "") {
      return this.livros;
    }

    return this.livros.filter((v: string) => {
        return v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0;

      });
  }

  valorAsync = new Promise(((resolve, reject) => {
    setTimeout(() => resolve("Valor assincrono"), 2000)
  }))

}
