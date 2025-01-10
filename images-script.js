document.addEventListener('DOMContentLoaded', function() {
    // 处理导航项点击
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            // 移除其他活动状态
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            
            // 添加活动状态
            this.classList.add('active');
            
            // 隐藏欢迎信息
            document.getElementById('welcome').style.display = 'none';
            
            // 显示图片网格
            const imageGrid = document.getElementById('imageGrid');
            imageGrid.style.display = 'grid';
            
            // 加载对应分类的图片
            loadImages(this.dataset.category);
        });
    });

    // 加载图片的函数
    function loadImages(category) {
        const imageGrid = document.getElementById('imageGrid');
        imageGrid.innerHTML = ''; // 清空现有内容
        
        // 根据分类获取对应的图片数组
        const images = getCategoryImages(category);
        
        // 加载图片
        images.forEach(image => {
            imageGrid.innerHTML += `
                <div class="image-item">
                    <img src="${image.url}" alt="${image.alt}">
                    <div class="hover-overlay">
                        <button class="download-btn">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        });

        // 重新绑定下载按钮事件
        bindDownloadButtons();
    }

    // 根据分类返回对应的图片数组
    function getCategoryImages(category) {
        const categoryImages = {
            'glow': [
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 1' },
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 2' },
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 3' },
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 4' },
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 5' },
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 6' },
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 7' },
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 8' },
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 9' },
                { url: '/Users/mmmmac/Pictures/Glow/0014.jpg', alt: 'Glow Effect 10' },
                // ... 更多 Glow 效果图片
            ],
            'fire': [
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 1' },
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 2' },
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 3' },
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 4' },
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 5' },
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 6' },
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 7' },
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 8' },
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 9' },
                { url: '/Users/mmmmac/Pictures/Fire/0014.jpg', alt: 'Fire Effect 10' },
                // ... 更多 Fire 效果图片
            ],
            'smoke': [
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 1' },
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 2' },
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 3' },
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 4' },
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 5' },
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 6' },
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 7' },
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 8' },
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 9' },
                { url: '/Users/mmmmac/Pictures/Smoke/0014.jpg', alt: 'Smoke Effect 10' },
                // ... 更多 Smoke 效果图片
            ],
            'ring': [
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 1' },
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 2' },
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 3' },
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 4' },
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 5' },
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 6' },
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 7' },
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 8' },
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 9' },
                { url: '/Users/mmmmac/Pictures/Ring/0014.jpg', alt: 'Ring Effect 10' },
                // ... 更多 Ring 效果图片
            ],
            'noise': [
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 1' },
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 2' },
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 3' },
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 4' },
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 5' },
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 6' },
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 7' },
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 8' },
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 9' },
                { url: '/Users/mmmmac/Pictures/Noise/0014.jpg', alt: 'Noise Effect 10' },
                // ... 更多 Noise 效果图片
            ]
        };

        return categoryImages[category] || [];
    }

    // 绑定下载按钮事件
    function bindDownloadButtons() {
        document.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const imageItem = this.closest('.image-item');
                const imageUrl = imageItem.querySelector('img').src;
                downloadImage(imageUrl);
            });
        });
    }

    function downloadImage(url) {
        const a = document.createElement('a');
        a.href = url;
        a.download = url.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}); 