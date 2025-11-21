// 引入商品数据
document.addEventListener('DOMContentLoaded', function() {
    // 获取搜索输入框和容器
    const searchInput = document.getElementById('searchInput');
    const container = document.querySelector('.container');
    
    // 生成商品列表
    renderProducts(products);
    
    // 绑定搜索事件
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const filteredProducts = products.filter(product => 
            product.id.toLowerCase().includes(searchTerm) || 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });
    
    // 添加回车键搜索功能
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const event = new Event('input');
            searchInput.dispatchEvent(event);
        }
    });
    
    // 渲染商品列表
    function renderProducts(productsToRender) {
        container.innerHTML = '';
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-product-id', `#${product.id}`);
            productCard.setAttribute('data-product-name', product.name);
            productCard.setAttribute('data-images', JSON.stringify(product.images));
            
            productCard.innerHTML = `
                <div class="product-id">#${product.id}</div>
                <div class="product-images">
                    <img src="${product.thumbnail}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="prices">
                        <div class="price-container kigali-price-container">
                            <div class="location-label">Kigali</div>
                            <div class="price">${product.prices.kigali}</div>
                        </div>
                        <div class="price-container muhanga-price-container">
                            <div class="location-label">Muhanga</div>
                            <div class="price">${product.prices.muhanga}</div>
                        </div>
                    </div>
                </div>
            `;
            
            container.appendChild(productCard);
        });
        
        // 为新生成的商品卡片绑定点击事件
        bindProductCardEvents();
    }
    
    // 获取模态框元素
    const modal = document.getElementById('imageModal');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.product-title-modal');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.image-indicators-modal');
    
    let currentImages = [];
    let currentIndex = 0;
    let currentProductName = '';
    
    // 绑定商品卡片点击事件
    function bindProductCardEvents() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', () => {
                const productId = card.getAttribute('data-product-id');
                const productName = card.getAttribute('data-product-name');
                const images = JSON.parse(card.getAttribute('data-images'));
                
                openModal(images, productName, productId);
            });
        });
    }
    
    // 打开模态框
    function openModal(images, productName, productId) {
        currentImages = images;
        currentProductName = productName;
        currentIndex = 0;
        
        modalTitle.textContent = `${productId} - ${productName}`;
        modalImage.src = images[0];
        
        // 创建指示器
        indicatorsContainer.innerHTML = '';
        images.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator-modal');
            if (index === 0) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                showImage(index);
            });
            indicatorsContainer.appendChild(indicator);
        });
        
        modal.style.display = 'flex';
    }
    
    // 显示指定索引的图片
    function showImage(index) {
        modalImage.src = currentImages[index];
        currentIndex = index;
        
        // 更新指示器
        document.querySelectorAll('.indicator-modal').forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // 下一张图片
    function nextImage() {
        const nextIndex = (currentIndex + 1) % currentImages.length;
        showImage(nextIndex);
    }
    
    // 上一张图片
    function prevImage() {
        const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showImage(prevIndex);
    }
    
    // 关闭模态框
    function closeModal() {
        modal.style.display = 'none';
    }
    
    // 绑定模态框事件监听器
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // 点击模态框背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 键盘事件处理
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        }
    });
});