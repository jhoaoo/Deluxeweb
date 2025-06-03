    const imagenesCarrusel = [
      "assets/img/descarga.webp",
      "assets/img/pantalonxd.webp",
      "assets/img/descarga.webp",
      "assets/img/pantalonxd.webp",
      "assets/img/descarga.webp"
    ];

    const carouselContainer = document.getElementById('carousel3d');
    const totalItems = imagenesCarrusel.length;

    imagenesCarrusel.forEach((src, i) => {
      const item = document.createElement('div');
      item.className = 'carousel3d-item';
      const angle = (360 / totalItems) * i;
      item.style.transform = `rotateY(${angle}deg) translateZ(300px)`;
      item.innerHTML = `<img src="${src}" alt="item${i}">`;
      carouselContainer.appendChild(item);
    });

    // Productos
    const productosContainer = document.getElementById('productos');
    let productosMostrados = 3;

    const productos = Array.from({ length: 30 }).map((_, i) => {
      const precio = (Math.random() * 100 + 20).toFixed(2);
      return {
        nombre: `Producto ${i + 1}`,
        precio: `$${precio}`,
        img1: 'assets/img/descarga.webp',
        img2: 'assets/img/pantalonxd.webp'
      };
    });

    function renderizarProductos() {
      productosContainer.innerHTML = '';
      productos.slice(0, productosMostrados).forEach(p => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
          <img src="${p.img1}" alt="">
          <img src="${p.img2}" alt="">
          <div class="producto-info">
            <h4>${p.nombre}</h4>
            <p>${p.precio}</p>
          </div>
        `;
        productosContainer.appendChild(div);
      });
    }

    function verMas() {
      productosMostrados += 3;
      renderizarProductos();
    }

    function verMenos() {
      productosMostrados = Math.max(3, productosMostrados - 3);
      renderizarProductos();
    }

    renderizarProductos();
