import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router, ActivatedRoute } from '@angular/router';
import { Lutador } from '../../shared/models/lutador';
import { LutadorService } from '../../shared/services/lutador.service';
import { CalculoCategoriaService } from '../../shared/services/calculo-categoria.service';

@Component({
  selector: 'app-lutador-detalhe',
  templateUrl: './lutador-detalhe.component.html',
  styleUrls: ['./lutador-detalhe.component.scss'],
  animations: [routerTransition()]
})
export class LutadorDetalheComponent implements OnInit {
  lutador: Lutador = { _id: '', nome: '', idade: null, sexo: '', peso: null, paisOrigem: '', dataAtualizacao: null, categoriaPeso: null };
  isLoadingResults = true;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private api: LutadorService,
    private calcula: CalculoCategoriaService
    ) { }


    ngOnInit() {
      this.getLutador(this.route.snapshot.params['id']);
    }

    getLutador(id) {
      this.api.getLutador(id)
      .subscribe(data => {
        this.lutador = data;
        this.lutador.categoriaPeso = this.calcula.verificaCategoria(this.lutador.peso, this.lutador.sexo);
        this.isLoadingResults = false;
      });
    }

    deleteLutador(id) {
      this.isLoadingResults = true;
      this.api.deleteLutador(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/lutadores']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
    }

  }

