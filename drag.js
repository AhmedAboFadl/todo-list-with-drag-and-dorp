
let btn = document.getElementById(`btn`);
let inp = document.getElementById(`inp`);
let boxs = document.querySelectorAll(`.box`);
let items = document.querySelectorAll('.item');

let drag=null;






btn.onclick=function(){

    if(inp.value != ``)
    {

        boxs[0].innerHTML += `<p class="item"  draggable="true">${inp.value}</p>`;
    inp.value="";
    dragItem();
    }

};


function dragItem(){


    let items = document.querySelectorAll(`.item`);

        items.forEach(item =>{

            item.addEventListener(`dragstart`,function(){
                drag = item;
                this.style.opacity=`0.5`
            });


            item.addEventListener(`dragend`,function(){

                this.style.opacity = ``;



            });

            item.addEventListener(`dblclick`,function(){


                    this.style.display=`none`



            });



    });
    boxs.forEach(box =>{



        box.addEventListener(`dragover`,function(e) {
            e.preventDefault();
            box.style.background=`green`;
            box.style.color = `white`;

        });


        box.addEventListener(`dragleave`,function(){

            box.style.background = ``;
            box.style.color = ``;

        });

        box.addEventListener(`drop`,function(){

            this.append(drag);
            box.style.background = `white`;
            box.style.color = `black`;

        });
    });









};


dragItem();









//  btn.onclick=function(){



//     if(inp.value !=``)
//         {
//                 boxs[0].innerHTML += `<p class="item" >${inp.value}</p>`;
//                 inp.value=``
//                 dragItem();

//         }
// }




// function dragItem(){





//     let items = document.querySelectorAll('.item');

//     items.forEach(item =>{


//         item.addEventListener(`dragstart`,function(){

//             drag=item;
//             this.style.opacity=`0.5`
//         });



//         item.addEventListener(`dragend`,function(){


//             item.style.opacity=``;

//         });


//         item.addEventListener(`dblclick`, function () {

//             inp.value=item.innerHTML;
//             item.style.display=`none`;




//         });




//         boxs.forEach(box =>{

//             box.addEventListener(`dragover`,function(e){

//                 e.preventDefault();

//                 box.style.background = `green`;
//                 box.style.color = `white`;
//             });




//             box.addEventListener(`dragleave`, function () {

//                 box.style.background = ``;
//                 box.style.color = ``;
//             });



//             box.addEventListener(`drop`,function(){


//                 this.append(drag)
//                 box.style.background = `white`;
//                 box.style.color = `black`;


//             });




//         });




























// });















// }
