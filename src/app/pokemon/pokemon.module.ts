import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./pokemon.service";
import {FormsModule} from "@angular/forms";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const routes: Routes = [

  {path: 'edit/pokemon/:id', component: EditPokemonComponent},
  {path: 'pokemons', component: ListPokemonComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},

];

@NgModule({
  declarations: [
    ListPokemonComponent,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
