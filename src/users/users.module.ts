import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {reducers} from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import {effects} from './store/effects';
import { UserService } from './store/services/users.service';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

const routes: Routes = [
    {path : 'login', component : fromContainers.LoginComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature ('UserFeature',reducers),
        EffectsModule.forFeature (effects),
        BrowserModule,
        FormsModule
    ],
    exports: [
        RouterModule,
        ...fromContainers.containers,
        ... fromComponents.components
    ],
    providers : [
        UserService
    ],
    declarations : [
        ...fromContainers.containers,
        ... fromComponents.components
    ]
})
export class UsersModule { }