
const swiper = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 3,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


const data = [
  {
    title: "Salmon Nigiri",
    description: "A slice of fresh salmon served over a small bed of seasoned rice.",
    img: "https://i.pinimg.com/1200x/55/95/31/559531ece918371c271daaf45ea465ec.jpg",
    price: "$10.31"
  },
  {
    title: "Miso Ramen",
    description: "A slice of fresh salmon served over a small bed of seasoned rice.",
    img: "https://i.pinimg.com/1200x/00/76/fe/0076fe7fc47124e6e4fe5ef54eb7ad36.jpg",
    price: "$10.37"
  },
  { 
    title: "Mochi", 
    description: "Soft rice cake with sweet bean or fruit filling.", 
    img: "https://i.pinimg.com/736x/9a/b3/4b/9ab34b4fe034392b031ffd970835fd03.jpg", 
    price: "$9.51" 
  },
  { 
    title: "Dango", 
    description: "Skewered rice dumplings coated with sweet soy glaze.", 
    img: "https://i.pinimg.com/736x/9e/e1/bc/9ee1bca85f5bd3ca1d1fc82b96ba89ff.jpg", 
    price: "$12.40" 
  },
  { 
    title: "Sake", 
    description: "Traditional Japanese rice wine.", 
    img: "https://i.pinimg.com/736x/3c/27/b5/3c27b5a0e8778f5e8293c3e4170026a6.jpg", 
    price: "$7.52" 
  },
  { 
    title: "Taiyaki (Street Version)", 
    description: "Fish-shaped cake filled with custard or red beans, sold hot on streets.", 
    img: "https://i.pinimg.com/736x/35/50/3c/35503ceded7fad3dfbe632a76b302bf4.jpg", 
    price: "$3.65" 
  },
  { 
    title: "Onigiri", 
    description: "Rice balls wrapped in seaweed, often with filling like salmon or pickled plum.", 
    img: "https://i.pinimg.com/1200x/9e/0c/9c/9e0c9cad2ea44b10ec3429739487c8f8.jpg", 
    price: "$5.89" 
  },
  { 
    title: "Dango (Street Version)", 
    description: "Skewered rice dumplings with sweet sauce, sold at festivals.", 
    img: "https://i.pinimg.com/736x/56/ff/5e/56ff5e3815789ec653aedbf9f141711e.jpg", 
    price: "$5.87" 
  },
  { 
    title: "Sakura Mochi", 
    description: "Pink rice cake wrapped in cherry leaf.", 
    img: "https://i.pinimg.com/736x/0e/9f/63/0e9f63caff0f70a6a29757cbe7cbd47c.jpg", 
    price: "$11.25" 
  },
  { 
    title: "Japanese Coffee", 
    description: "Light roast coffee with mild bitterness.", 
    img: "https://i.pinimg.com/736x/ab/f1/43/abf14316ef88e907ad2837f19684e775.jpg", 
    price: "$5.35" 
  },
  { 
    title: "Matcha Cheesecake", 
    description: "Creamy cheesecake with matcha flavor.", 
    img: "https://i.pinimg.com/736x/86/a7/b7/86a7b7bac7c4358d8f54f7a9e5f7a7a9.jpg", 
    price: "$12.35" 
  },
  { 
    title: "Hojicha Pudding", 
    description: "Roasted tea–flavored pudding.", 
    img: "https://i.pinimg.com/736x/da/37/5a/da375a0c5c749f5edd9d5600d31b2707.jpg", 
    price: "$3.25" 
  }
];


const content = document.getElementById('content');

content.innerHTML = data.map(
  (item) => `
  <div class="card bg-white w-96 shadow-sm">
  <figure>
    <img src="${item.img}" alt="${item.title}" class="w-100 h-100 object-cover rounded-xl" />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-black">${item.title}</h2>
    <p class="text-black">${item.description}</p>
    <div class="card-actions justify-end">
      <button class="btn bg-yellow-400">Buy Now</button>
    </div>
  </div>
</div>
  `).join('')


