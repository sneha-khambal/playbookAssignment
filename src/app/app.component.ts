import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'playbookAssignment';
 
constructor(private elementRef:ElementRef) {}

ngAfterViewInit() {
  //drag slide 
 let dragItem= this.elementRef.nativeElement.querySelector('.drag-item');
     dragItem.addEventListener('dragstart', this.ondragStart.bind(this)); 
     dragItem.addEventListener('dragend', this.onDragEnd.bind(this));  
//drop on playbox
     let playbox= this.elementRef.nativeElement.querySelector('.play-box'); 
     playbox.addEventListener('dragenter', this.ondrageEnter.bind(this)); 
     playbox.addEventListener('dragover', this.onDragOver.bind(this)); 
     playbox.addEventListener('drop', this.onDrop.bind(this),false); 
//drag images
     let dragItem1= this.elementRef.nativeElement.querySelector('.drag-item1');
     dragItem1.addEventListener('dragstart', this.ondragStart.bind(this)); 
      
}
 
//fuction for dragStart event
ondragStart(ev) {
 // console.log('drag start');
 // Set the drag's format and data. Use the event target's id for the data
 ev.dataTransfer.setData("text/plain", ev.target.id);
 }
 
//function for dragend event
onDragEnd(ev){
  // console.log('end');
ev.currentTarget.style.border = "solid";
 }

 //function for dragEnter event
ondrageEnter(event){ 
  event.target.classList.add("dragEnter")
}

onDragOver(event){
  
  event.preventDefault();
}

 

onDrop(ev){
  ev.preventDefault();
  // Get the data, which is the id of the drop target
  var data = ev.dataTransfer.getData("text");
  var id =document.getElementById(data)
  //drop element if id is matched to drop element
  if(data === "yellow" ||"blue" ||"green" || "red"){
    
    ev.target.classList.add("dropped");
    ev.target.classList.add("position");
   ev.target.appendChild(id);
 ev.currentTarget.style.background= "droppable-hover";
 
 ev.target.classList.remove("dragEnter")
  }
//drop element if target contains dropped classname an get data is match the id of drop element
 if(ev.target.classList.contains("dropped") && data === "img1" || "img2" || "img3" || "img4" || "img5" || "img6" ){
   var id =document.getElementById(data)
  ev.target.appendChild(id);
 
 
 }
  
}
 
 
 }

 
