const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
const searchForm = document.getElementById('searchForm');
const searchResults = document.getElementById('searchResults');
let products = JSON.parse(localStorage.getItem('products')) || [];

function displayProducts() {
    productList.innerHTML = '';

    const headerRow = productList.insertRow();
    const idHeader = headerRow.insertCell();
    const nameHeader = headerRow.insertCell();
    const quantityHeader = headerRow.insertCell();
    const actionsHeader = headerRow.insertCell();

    idHeader.textContent = 'ID';
    nameHeader.textContent = 'Pavadinimas';
    quantityHeader.textContent = 'Kiekis';
    actionsHeader.textContent = 'Veiksmai';

    products.forEach(product => {
        const row = productList.insertRow();
        const idCell = row.insertCell();
        const nameCell = row.insertCell();
        const quantityCell = row.insertCell();
        const actionsCell = row.insertCell();

        idCell.textContent = product.id;
        nameCell.textContent = product.name;
        quantityCell.textContent = product.quantity;

        const editButton = document.createElement('button');
        editButton.textContent = 'Redaguoti';
        editButton.addEventListener('click', () => editProduct(product.id));
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Ištrinti';
        deleteButton.addEventListener('click', () => deleteProductById(product.id));
        actionsCell.appendChild(deleteButton);
    });
}

function addProduct(event) {
    event.preventDefault();

    const id = productForm.productId.value.trim();
    const name = productForm.productName.value.trim();
    const quantity = productForm.productQuantity.value.trim();

    if (!id || !name || !quantity) {
        alert("Visi laukai privalomi!");
        return;
    }

    if (products.some(product => product.id === id)) {
        alert("Produktas su tokiu ID jau egzistuoja!");
        return;
    }

    const newProduct = { id, name, quantity };
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
    displaySearchResults([]);
    productForm.reset();
}

function findProductById(id) {
    return products.find(product => product.id === id);
}

function deleteProductById(id) {
    const index = products.findIndex(product => product.id === id);

    if (index !== -1) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
        displaySearchResults([]);
    } else {
        alert("Produktas su tokiu ID nerastas!");
    }
}

function editProduct(id) {
    const product = findProductById(id);
    if (product) {
        productForm.productId.value = product.id;
        productForm.productName.value = product.name;
        productForm.productQuantity.value = product.quantity;

       
        productForm.removeEventListener('submit', addProduct);
        productForm.addEventListener('submit', (event) => {
            event.preventDefault();
            updateProduct(id);
        });
    }
}


function updateProduct(id) {
    const existingProductIndex = products.findIndex(product => product.id === id);

    if (existingProductIndex !== -1) {
        products[existingProductIndex] = {
            id: productForm.productId.value.trim(),
            name: productForm.productName.value.trim(),
            quantity: productForm.productQuantity.value.trim()
        };

        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
        displaySearchResults([]);
        productForm.reset();

        
        productForm.removeEventListener('submit', updateProduct);
        productForm.addEventListener('submit', addProduct);


    }
}

function searchProducts(event) {
    event.preventDefault();
    const searchId = searchForm.searchId.value.trim();

    const searchResultsArray = searchId ? products.filter(product => product.id.toString().includes(searchId)) : [];
    displaySearchResults(searchResultsArray);
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';

    const headerRow = searchResults.insertRow();
    const idHeader = headerRow.insertCell();
    const nameHeader = headerRow.insertCell();
    const quantityHeader = headerRow.insertCell();

    idHeader.textContent = 'ID';
    nameHeader.textContent = 'Pavadinimas';
    quantityHeader.textContent = 'Kiekis';

    results.forEach(product => {
        const row = searchResults.insertRow();
        const idCell = row.insertCell();
        const nameCell = row.insertCell();
        const quantityCell = row.insertCell();

        idCell.textContent = product.id;
        nameCell.textContent = product.name;
        quantityCell.textContent = product.quantity;
    });
}

productForm.addEventListener('submit', addProduct);
searchForm.addEventListener('submit', searchProducts);

displayProducts();
