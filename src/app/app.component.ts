import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'playbookAssignment';

// @ViewChild('dragItem')dragItem !:ElementRef;
// @ViewChild('dragItem1')dragItem1 !:ElementRef;
// @ViewChild('playBox')playBox !:ElementRef;

  
 
constructor(private elementRef:ElementRef) {}

ngAfterViewInit() {
 let dragItem= this.elementRef.nativeElement.querySelector('.drag-item');
     dragItem.addEventListener('dragstart', this.ondragStart.bind(this)); 
     dragItem.addEventListener('dragend', this.onDragEnd.bind(this));  

     let playbox= this.elementRef.nativeElement.querySelector('.play-box'); 
     playbox.addEventListener('dragenter', this.ondrageEnter.bind(this)); 
     playbox.addEventListener('dragover', this.onDragOver.bind(this)); 
     playbox.addEventListener('dragleave', this.ondragLeave.bind(this)); 
     playbox.addEventListener('drop', this.onDrop.bind(this)); 

    //  let dragItem1= this.elementRef.nativeElement.querySelector('.drag-item1');
    //  dragItem1.addEventListener('dragstart', this.ondragStart.bind(this)); 
    //  dragItem1.addEventListener('dragend', this.onDragEnd.bind(this));  


}
 
ondragStart(event) {
  console.log('drag start');
  event.dataTransfer.setData("text", event.target.id)
  console.log(event.target.className);
}
 
 

onDragEnd(event){console.log('end')}

ondrageEnter(event){console.log('enter')}

onDragOver(event){
  console.log('over');
  event.preventDefault();
}

ondragLeave(event){console.log('leave')}

onDrop(event){
   
  console.log('drop');
  event.preventDefault();
  var draggableElementBrand= event.dataTransfer.getData("text");
  console.log(draggableElementBrand)
 var draggableElement= document.getElementById(draggableElementBrand)
 let t = event.target.classList.add("droppable-hover");
 console.log(t)
 console.log(draggableElementBrand)
  event.target.insertAdjacentHTML("afterbegin", `<div class="drag-item" id="${draggableElementBrand}" style>hii</div>`)
 
}
 

 
 
 
}

 
