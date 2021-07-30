import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'playbookAssignment';
dropTarget = false;
constructor(private elementRef:ElementRef) {}

ngAfterViewInit() {
  //drag slide 
  let dragItem= this.elementRef.nativeElement.querySelector('#yellow');
  let dragItem2= this.elementRef.nativeElement.querySelector('#blue');
  let dragItem3= this.elementRef.nativeElement.querySelector('#green');
  let dragItem4= this.elementRef.nativeElement.querySelector('#gray');
  let dragItem5= this.elementRef.nativeElement.querySelector('#red');
  let dragItem6= this.elementRef.nativeElement.querySelector('#orange');
  dragItem2.addEventListener('dragstart', this.ondragStart.bind(this)); 
  dragItem3.addEventListener('dragstart', this.ondragStart.bind(this)); 
  dragItem4.addEventListener('dragstart', this.ondragStart.bind(this)); 
  dragItem5.addEventListener('dragstart', this.ondragStart.bind(this)); 
  dragItem6.addEventListener('dragstart', this.ondragStart.bind(this)); 
    dragItem.addEventListener('drop', this.onDrop2.bind(this),false);
     dragItem2.addEventListener('drop', this.onDrop2.bind(this),false);
    dragItem3.addEventListener('drop', this.onDrop2.bind(this),false);
     dragItem4.addEventListener('drop', this.onDrop2.bind(this),false);
        dragItem5.addEventListener('drop', this.onDrop2.bind(this),false);
     dragItem6.addEventListener('drop', this.onDrop2.bind(this),false);
     dragItem.addEventListener('dragstart', this.ondragStart.bind(this)); 
     dragItem.addEventListener('dragend', this.onDragEnd.bind(this));  
//drop on playbox
     let playbox= this.elementRef.nativeElement.querySelector('.play-box'); 
     let playbox2= this.elementRef.nativeElement.querySelector('.play-box1'); 

     let playbox3= this.elementRef.nativeElement.querySelector('.play-box2'); 

     playbox.addEventListener('dragenter', this.ondrageEnter.bind(this)); 
     playbox.addEventListener('dragover', this.onDragOver.bind(this)); 
     playbox3.addEventListener('dragenter', this.ondrageEnter.bind(this)); 
     playbox3.addEventListener('dragover', this.onDragOver.bind(this));
     playbox2.addEventListener('dragenter', this.ondrageEnter.bind(this)); 
     playbox2.addEventListener('dragover', this.onDragOver.bind(this));
     playbox.addEventListener('drop', this.onDrop.bind(this),false); 
     playbox2.addEventListener('drop', this.onDrop.bind(this),false);
     playbox3.addEventListener('drop', this.onDrop.bind(this),false);
//drag images
     let img1= this.elementRef.nativeElement.querySelector('#img1');
     let img2= this.elementRef.nativeElement.querySelector('#img2');
     let img3= this.elementRef.nativeElement.querySelector('#img3');
     let img4= this.elementRef.nativeElement.querySelector('#img4');
     let img5= this.elementRef.nativeElement.querySelector('#img5');
     let img6= this.elementRef.nativeElement.querySelector('#img6');
    
     //img1
     img1.addEventListener('dragstart', this.ondragStart2.bind(this)); 
     img2.addEventListener('dragstart', this.ondragStart2.bind(this)); 
     img3.addEventListener('dragstart', this.ondragStart2.bind(this)); 
     img4.addEventListener('dragstart', this.ondragStart2.bind(this)); 
     img5.addEventListener('dragstart', this.ondragStart2.bind(this)); 
     img6.addEventListener('dragstart', this.ondragStart2.bind(this)); 
     
     
}  
ondragStart2(ev){
  console.log("dragStart");
  // Change the source element's background color to signify drag has started
  ev.currentTarget.style.border = "dashed";
  // Set the drag's format and data. Use the event target's id for the data
  ev.dataTransfer.setData("text/plain", ev.target.id);
}
 //fuction for dragStart event
ondragStart(ev) {
  console.log("dragStart");
  // Change the source element's background color to signify drag has started
  ev.currentTarget.style.border = "dashed";
  // Set the drag's format and data. Use the event target's id for the data
  ev.dataTransfer.setData("text/plain", ev.target.id);
 }
 
//function for dragend event
onDragEnd(ev){
  console.log('end');
 }

 //function for dragEnter event
ondrageEnter(event){ 
  event.target.classList.add("dragEnter");
  
}

//function for  dropover event
onDragOver(event){
  event.preventDefault();
  console.log(this.dropTarget)
}
 
//function for drop event
onDrop(ev){
  
  console.log("Drop");
  ev.preventDefault();
   var data = ev.dataTransfer.getData("text");

  if(data == "red" || data == "green" || data == "yellow" || data == "blue" || data == "orange" ||data == "gray" ){
 
  // Get the data, which is the id of the drop target
  let dragedItem =document.getElementById(data);
  
   
   
   dragedItem.classList.add("opacity");
   

  ev.target.appendChild(document.getElementById(data));
   // Clear the drag data cache (for all formats/types)
   ev.target.classList.add("droppedSlides")
  let dragged = ev.target.classList.add("dragged");
  console.log(dragged)
    ev.dataTransfer.clearData();}
    
  
    
  }

  onDrop2(ev){
    console.log("Drop2");
    ev.preventDefault();
    // Get the data, which is the id of the drop target
     var data = ev.dataTransfer.getData("text");
      // ev.target.appendChild(document.getElementById(data));
     if(data == "img1" || data == "img2" || data == "img3" || data == "img4" || data == "img5" ||data == "img6"){
      var test = document.getElementById(data);
 console.log(data)
      
      switch (data) {
        case "img1":
          ev.target.style.backgroundImage = test.style.backgroundImage;
          break;
        case "img2":
          ev.target.style.backgroundImage = test.style.backgroundImage;
          break;
        case "img3":
          ev.target.style.backgroundImage = test.style.backgroundImage;
          break;
        case "img4":
          ev.target.style.backgroundImage = test.style.backgroundImage;
          break;
        default:
          ev.target.style.backgroundColor = "nothing";
      }
        // Clear the drag data cache (for all formats/types)
    }
          ev.target.classList.add("dropped");
          ev.target.classList.add("droppedImg");
        ev.dataTransfer.clearData();
      
    }
   
  
   
 }

 
