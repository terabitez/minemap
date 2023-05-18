import { Component, OnInit } from '@angular/core';
import { MapToggleService } from '../services/map-toggle.service';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  imageList = [
    {url:'assets/media/RLA1705_Year01_Flat.jpg', caption:'Images 1'},
    {url:'assets/media/RLA1705_Year01_Textured.jpg', caption:'Images 2'},
    {url:'assets/media/RLA1705_Year08_Flat.jpg', caption:'Images 3'},
    {url:'assets/media/RLA1705_Year08_Textured.jpg', caption:'Images 4'},
    {url:'assets/media/RLA1705_Year16_Flat.jpg', caption:'Images 5'},
    {url:'assets/media/RLA1705_Year16_Textured.jpg', caption:'Images 6'},
    {url:'assets/media/RLA1705_YearFinal_Flat.jpg', caption:'Images 7'},
    {url:'assets/media/RLA1705_YearFinal_Textured.jpg', caption:'Images 8'},
  ];

  preMining: boolean = true;

  constructor(private mapToggleService: MapToggleService, 
    private modalService:ModalService, public authService: AuthService,
    private router:Router){
    
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openImageSlider(): void {
    this.modalService.modalOpen.next(true);
  }
   
  toggleMap(){
    this.preMining = !this.preMining;
    this.mapToggleService.toggleMap.next(this.preMining);

  }

}
