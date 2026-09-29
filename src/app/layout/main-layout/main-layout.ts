import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
