import { ListarPensamentosComponent } from './../listar-pensamentos/listar-pensamentos.component';
import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {


formulario!: FormGroup;

    constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder : FormBuilder
  ) {  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([ //esse validators.compose serve para que possamos invocar mais de um validator
        Validators.required, //impede que o campo seja nulo
        Validators.pattern(/(.|\s)*\S(.|\s)*/) // fornece ao campo um requisito de expressoes validas e invalidas
      ])],
      autoria: ['-', Validators.compose([
        Validators.required,
        Validators.minLength(3) //define um tamanho minimo
    ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
    this.service.criar(this.formulario.value).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    })
  }
  }

cancelarPensamento() {
  this.router.navigate(['/listarPensamento'])
}

habilitarBotao(): string {
  if(this.formulario.valid){
    return 'botao'
  } else return 'botao__desabilitado'

}

}
