let length_card = 0;
let prices = 0;
let add = document.querySelectorAll('.btn-success');
let price_element = document.getElementById('price');
add.forEach(function(item){
    item.addEventListener('click',function(e){
        let cart = document.querySelector('.modal-body');
        let card_length = document.getElementById('length');
        let name = document.createElement('h4');
        name.appendChild(document.createTextNode(e.target.parentElement.childNodes[3].innerHTML));
        let par = document.createElement('div');
        par.className="container bg-light m-3";
        let row = document.createElement('div');
        row.className = "row";
        let col = document.createElement('col');
        col.className="col-md-6";
        let del = document.createElement('i');
        del.className = 'bi bi-trash fs-4 m-3 text-danger remove';
        del.setAttribute("onclick","remove(this)");
        let pr = document.createElement('p');
        pr.appendChild(document.createTextNode(e.target.parentElement.childNodes[5].textContent));
        col.appendChild(name);
        col.appendChild(pr);
        col.appendChild(del);
        let col2 = document.createElement('div');
        col2.className ="col-md-6";
        let img = document.createElement('img');
        img.setAttribute('src',e.target.parentElement.childNodes[1].src);
        col2.appendChild(img);
        row.appendChild(col2);
        row.appendChild(col);
        par.appendChild(row);
        cart.appendChild(par);
        let price = parseInt(e.target.parentElement.childNodes[5].textContent);
        prices += price;
        price_element.textContent = `${prices}$`;
        length_card++;
        card_length.textContent=length_card;
        e.target.className="bi bi-cart-check fs-4 btn btn-success p-2";
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Add To Card',
            showConfirmButton: false,
            timer: 1000,
            height:50,
            width:400
          });
          })
    })
    function remove(element){
let item_del = element.parentElement;
item_del.parentElement.remove();
prices-=parseInt(item_del.childNodes[1].textContent);
price_element.textContent = `${prices}$`;
length_card--;
document.getElementById('length').textContent = length_card;
    }
    document.querySelector('.clear').addEventListener('click',function(){
        document.querySelector('.modal-body').innerHTML = '';
        length_card=0;
        prices=0;
        price_element.textContent = `${prices}$`;
        document.getElementById('length').textContent = length_card;
    })
    let search_input = document.querySelector('.search');
    search_input.addEventListener('keyup',function(e){
var search_value = e.target.value.toLowerCase();
let all_element =document.querySelectorAll('.item_name');
all_element.forEach(function(element_name){
if(element_name.textContent.toLocaleLowerCase().indexOf(search_value) != -1){
    element_name.parentElement.style.display="inline";
}else{
    element_name.parentElement.style.display="none";
}
})
    })
    document.querySelector('.sm').addEventListener('click',function(){
            document.querySelectorAll('.prr').forEach(function(el){
                var num = parseInt(el.textContent);
    if(num<=50){
        el.parentElement.style.display='inline';
    }else{
        el.parentElement.style.display='none';
    }
            })
        })

// filter
    document.querySelector('.bg').addEventListener('click',function(){
        document.querySelectorAll('.prr').forEach(function(elm){
            var numb = parseInt(elm.textContent);
if(numb>50){
    elm.parentElement.style.display='inline';
}else{
    elm.parentElement.style.display='none';
}
        })
    })
    document.querySelector('.active').addEventListener('click',()=>{
        document.querySelectorAll('section').forEach(function(section){
            section.style.display="inline";
        })
    })
