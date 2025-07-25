const generateBtn = document.getElementById('generate');
const promptInput = document.getElementById('prompt');
const gallery = document.getElementById('gallery');

generateBtn.addEventListener('click', async () => {
    const prompt = promptInput.value;
    if (!prompt) {
        alert('Please enter a prompt.');
        return;
    }

    const imageUrl = `https://pollinations.ai/p/${prompt}`;

    const img = document.createElement('img');
    img.src = imageUrl;
    gallery.appendChild(img);
});
