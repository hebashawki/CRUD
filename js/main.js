
var productNameInput = document.getElementById('pn');
var productPriceInput = document.getElementById('pp');
var productCategoryInput = document.getElementById('pc');
var productDescInput = document.getElementById('pd');

var allProducts = []

if(localStorage.getItem('allproducts')!=null){
    allProducts=JSON.parse(localStorage.getItem('allproducts'))
    displayAllProducts();

}


function addNewProduct() {
    var product = {
        name: productNameInput.value,
        price: Number(productPriceInput.value),
        catagory: productCategoryInput.value,
        description: productDescInput.value,
    }
    allProducts.push(product);

    console.log(product);
    clearInput();
    localStorage.setItem('allproducts',JSON.stringify(allProducts));
    displayAllProducts();

}
function clearInput() {
    productNameInput.value = ''
    productPriceInput.value = ''
    productCategoryInput.value = ''
    productDescInput.value = ''
}
function displayAllProducts() {
    var cartoona = "";
    for (var i = 0; i < allProducts.length; i++) {
        cartoona += `<tr>
<td>${allProducts[i].name}</td>
<td>${allProducts[i].price}</td>
<td>${allProducts[i].catagory}</td>
<td>${allProducts[i].description}</td>
<td>
    <button onclick="deleteElement(${i})" class="btn btn-danger">Delete</button></td>
    <td>
    <button class="btn btn-warning">Update</button></td>
</tr>`
    }
    document.getElementById('tbody').innerHTML = cartoona;
}

function deleteElement(idx){
    allProducts.splice(idx,1);
    localStorage.setItem('allproducts',JSON.stringify(allProducts));
    displayAllProducts();
console.log('delete');
}

var searchInput = document.getElementById('search');
function searchedElement (term){
var cartoona='';
for (var i =0; i<allProducts.length; i++){
    if(allProducts[i].name.tolowerCase().includes(term.tolowerCase()) == true ){
cartoona+=`<tr class="text-center">
<td>${allProducts[i].name}</td>
<td>${allProducts[i].price}</td>
<td>${allProducts[i].catagory}</td>
<td>${allProducts[i].description}</td>
<td>
    <button onclick="deleteElement(${i})" class="btn btn-danger">Delete</button></td>
    <td>
    <button class="btn btn-warning">Update</button></td>
</tr>`
    }

}
document.getElementById('tbody').innerHTML=cartoona;
}