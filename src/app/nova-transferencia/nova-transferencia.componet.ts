import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from "@angular/core";
import { Transferencia } from 'src/model/transferencia.models';

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor:number;
  destino:number;

  constructor(private service: TransferenciaService){}

  transferir(){
    console.log('Solicitado ao transferir')
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos()
    },
    erro => console.error(erro)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
