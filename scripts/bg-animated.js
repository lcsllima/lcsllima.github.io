const leafs = 10;
let listLeafs = [];

const fragment = document.createDocumentFragment();

const counterElement = document.createElement("div");
counterElement.classList.add("counter");
document.querySelector(".bg-animated").appendChild(counterElement);

let counter = 0;

for (let i = 0; i < leafs; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add(i % 2 === 0 ? 'sp-inv-green' : 'sp-inv-red');

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
      if (!this.classList.contains("expanded")) {
        this.classList.add("expanded");
        setTimeout(() => {
          this.style.display = "none";
          counter++;
          counterElement.textContent = `Aliens encontrados: ${counter}`;
          counterElement.style.display = "block";
        }, 600);
      }
    });

});