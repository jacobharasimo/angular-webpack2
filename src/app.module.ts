// app.module.js
import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config';
import './styles/app.scss';

export const AppModule = angular
    .module('app', [
        ConfigModule,
        ComponentsModule,
        CommonModule,
        uiRouter as any
    ])
    .component('app', AppComponent)
    .name;
