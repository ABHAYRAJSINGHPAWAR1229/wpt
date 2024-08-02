document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('categorySelect');
    const imagesContainer = document.getElementById('imagesContainer');

    // Sample data for categories and images
    const categories = {
        "Animals": [
            "https://example.com/animal1.jpg",
            "https://example.com/animal2.jpg"
        ],
        "Cars": [
            "https://example.com/car1.jpg",
            "https://example.com/car2.jpg"
        ],
        "Flowers": [
            "https://example.com/flower1.jpg",
            "https://example.com/flower2.jpg"
        ]
    };

    // Populate dropdown with categories
    Object.keys(categories).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    // Event listener for dropdown change
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        imagesContainer.innerHTML = ''; // Clear previous images

        if (selectedCategory !== '') {
            categories[selectedCategory].forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                imagesContainer.appendChild(img);
            });
        }
    });
});