import { ListarPensamentosComponent } from './../listar-pensamentos/listar-pensamentos.component';
import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoComponent } from '../pensamento/pensamento.component';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: `modelo1`
  }

    constructor(
    private service: PensamentoService,
    private router: Router
  ) {  }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate([`/listarPensamento`])
    })
  }

cancelarPensamento() {
  this.router.navigate([`/listarPensamento`])
}


}
