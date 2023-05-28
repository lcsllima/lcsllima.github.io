const leafs = 10;
let listLeafs = [];

const fragment = document.createDocumentFragment();

for (let i = 0; i < leafs; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add('leaf');

    listLeafs.push(leaf);
    fragment.appendChild(leaf);
}

document.querySelector(".bg-animated").appendChild(fragment);

listLeafs.forEach((el, i, ra) => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
  
    const to = {
      x: Math.random() * screenWidth, // Coordenada X aleatória dentro da largura da tela
      y: screenHeight // Coordenada Y no limite superior da tela
    };
  
    const from = {
      x: Math.random() * screenWidth, // Coordenada X aleatória dentro da largura da tela
      y: 0 // Coordenada Y no limite superior da tela
    };
  
    el.animate(
      [
        { transform: `translate(${from.x}px, ${from.y}px)` },
        { transform: `translate(${to.x}px, ${to.y}px)` }
      ],
      {
        duration: (Math.random() + 1) * 10000, // Duração aleatória
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );

    el.addEventListener('click', function() {
        el.style.display = 'none';
    });

});