import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, query, animate, group} from '@angular/animations'


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
    animations:[
      trigger('carousel',[
        transition(':increment',[
          group([
            query(':enter',[
              style({transform:'translateX(-100%)'}),
              animate('1s')
            ]),
            query(':leave',[
              animate('1s', style({transform:'translateX(100%)'}))
            ])
          ])
        ]),
        transition(':decrement', [
          group([
            query(':enter',[
              style({transform:'translateX(100%)'}),
              animate('1s')
            ]),
            query(':leave',[
              animate('1s',style({transform:'translateX(-100%)'}))
            ])
          ])
        ]),
      ])
    ]
})

export class CarouselComponent implements OnInit {
  url: string='../../../assets/'
  imgs=[
    {id:1,name:'1.jpg',state:true},
    {id:2,name:'2.jpg',state:false},
    {id:3,name:'3.jpg',state:false},
  ]
  state=0;
  id:number;
  i=0;
  switch=true
  execTime:number

  constructor(){}

  fn(){
    this.i++;
    if(this.i>this.imgs.length-1){
      this.i=0;
    }
    this.imgs.forEach(val=>{val.state=false})
    this.imgs[this.i].state=true;
    this.state+=0.1;
  }

  ngOnInit(){
    this.id=window.setInterval(this.fn.bind(this),3000)
  }

    stop(){
      clearInterval(this.id)
    }
    start(){
      this.id=window.setInterval(this.fn.bind(this),3000)
    }
    circleEnter(id){
      this.i=id-1;
      this.imgs.forEach(val=>{val.state=false})
      this.imgs[id-1].state=true;
      this.stop();
    }
    circleLeave(){
      this.start();
    }
    go(){
      this.throttle(this.fn.bind(this),1500)
    }
    back(){
      let fn=function(){
        this.i--;
        if(this.i<0){
          this.i=this.imgs.length-1;
        }
        this.imgs.forEach(val=>{val.state=false})
        this.imgs[this.i].state=true;
        this.state-=0.1;
      }
      this.throttle(fn.bind(this),1500)
    }
    throttle(fn,interval){
      if(new Date().getTime()-this.execTime>interval){this.switch=true}
      console.log(this.switch);
      if(this.switch){
        fn();
        this.switch=false;
        this.execTime=new Date().getTime();
      }
    }
  }