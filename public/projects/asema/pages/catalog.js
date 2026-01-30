const data = [
      {
        title: "Salmon Nigiri",
        description: "A slice of fresh salmon served over a small bed of seasoned rice.",
        img: "https://i.pinimg.com/1200x/55/95/31/559531ece918371c271daaf45ea465ec.jpg",
        price: "$10.31"
      },
      {
        title: "Tuna Maki",
        description: "Classic roll with tuna and rice wrapped in seaweed.",
        img: "https://i.pinimg.com/1200x/ea/35/48/ea3548304cbd8a05242f95845b4a035f.jpg",
        price: "$5.90"
      },
      {
        title: "California Roll",
        description: "Crab stick, avocado, and cucumber rolled with rice and sesame.",
        img: "https://i.pinimg.com/1200x/23/29/ae/2329ae334e1d67e43e98745b3f804160.jpg",
        price: "$8.80"
      },
      {
        title: "Spicy Tuna Roll",
        description: "Tuna mixed with spicy mayo and chili sauce.",
        img: "https://i.pinimg.com/1200x/6d/f4/8c/6df48c02bca90fd9728cdad2d1a0426d.jpg",
        price: "$4.21"
      },
      {
        title: "Avocado Roll",
        description: "Fresh creamy avocado wrapped in rice and nori.",
        img: "https://i.pinimg.com/1200x/37/79/7f/37797fc29ef6050818a60c75ebce5ee3.jpg",
        price: "$3.68"
      },
      {
        title: "Dragon Roll",
        description: "Shrimp tempura roll topped with avocado and unagi sauce.",
        img: "https://i.pinimg.com/1200x/41/15/dd/4115dd0ac1c6486884e4768a149cbb2f.jpg",
        price: "$2.57"
      },
      {
        title: "Rainbow Roll",
        description: "Assorted fish layered over a California roll.",
        img: "https://i.pinimg.com/736x/4a/dd/27/4add27c705a3bca06966c5011afb0ab0.jpg",
        price: "$4.50"
      },
      {
        title: "Spider Roll",
        description: "Soft-shell crab tempura with cucumber and spicy mayo.",
        img: "https://i.pinimg.com/736x/2a/ac/35/2aac35f373c45ae11b1739920f41aed9.jpg",
        price: "$3.90"
      }
  ];
  
  
  const content = document.getElementById('Sushi&Rolls');
  
  content.innerHTML = data.map(
    (item) => `
    <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img src="${item.img}" alt="${item.title}" class="w-100 h-100 object-cover rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white">${item.title}</h2>
      <p class="text-black">${item.description}</p>
      <div class="card-actions justify-end">
        <button class="btn bg-yellow-400">Buy Now</button>
      </div>
    </div>
  </div>
    `).join('')
  
  
    const data1 = [
      {
        title: "Miso Ramen",
        description: "A slice of fresh salmon served over a small bed of seasoned rice.",
        img: "https://i.pinimg.com/1200x/00/76/fe/0076fe7fc47124e6e4fe5ef54eb7ad36.jpg",
        price: "$10.37"
      },
      {
        title: "Spicy Ramen",
        description: "Bold and fiery noodles in a spicy broth.",
        img: "https://i.pinimg.com/736x/a3/a2/27/a3a227bbdd6bad405e4bf511edc423c5.jpg",
        price: "$5.44"
      },
      {
        title: "Curry Ramen",
        description: "Japanese curry soup with ramen noodles and veggies.",
        img: "https://i.pinimg.com/1200x/b6/d7/68/b6d768640347d3ff93a0c669ed662bb6.jpg",
        price: "$8.97"
      },
      {
        title: "Seafood Ramen",
        description: "Broth with shrimp, squid, and clams.",
        img: "https://i.pinimg.com/1200x/cb/3e/14/cb3e14a285fc49c768b1fce0f7bd2eb9.jpg",
        price: "$4.11"
      },
      {
        title: "Udon Soup",
        description: "Thick noodles in hot dashi broth with tofu and scallions.",
        img: "https://i.pinimg.com/1200x/75/05/8d/75058d1435db26af9d468188e0738a7b.jpg",
        price: "$3.12"
      },
      {
        title: "Tempura Udon",
        description: "Udon soup topped with crispy tempura shrimp.",
        img: "https://i.pinimg.com/1200x/f7/15/59/f71559380d4afb1bd0641087403b483b.jpg",
        price: "$2.57"
      },
      {
        title: "Soba Soup",
        description: "Buckwheat noodles in soy-flavored broth.",
        img: "https://i.pinimg.com/1200x/86/e6/36/86e636b5816722ee91a8d30efe9edd86.jpg",
        price: "4.50$"
      },
      {
        title: "Cold Ramen (Hiyashi Chuka)",
        description: "Cold ramen noodles with vegetables and sesame dressing.",
        img: "https://i.pinimg.com/1200x/51/67/45/5167453f24188b3272eee8f66416a9a9.jpg",
        price: "$3.90"
      }
  ];

  const content1 = document.getElementById('Ramen&Soups');
  
  content1.innerHTML = data1.map(
    (item) => `
    <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img src="${item.img}" alt="${item.title}" class="w-100 h-100 object-cover rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white">${item.title}</h2>
      <p class="text-black">${item.description}</p>
      <div class="card-actions justify-end">
        <button class="btn bg-yellow-400">Buy Now</button>
      </div>
    </div>
  </div>
    `).join('')




    const data2 = [
      {
        title: "Gyudon",
        description: "Rice bowl topped with thin-sliced beef and onions simmered in sweet soy sauce.",
        img: "https://i.pinimg.com/736x/75/80/7f/75807fb9e5e9316a18637e984d4e7aa6.jpg",
        price: "$10.30"
      },
      {
        title: "Katsudon",
        description: "Breaded pork cutlet served over rice with egg and broth.",
        img: "https://i.pinimg.com/1200x/4c/e1/b3/4ce1b3b26754235de33678cb4f692362.jpg",
        price: "$5.21"
      },
      {
        title: "Oyakodon",
        description: "Chicken and egg simmered in sweet sauce over rice.",
        img: "https://i.pinimg.com/1200x/f9/e4/ab/f9e4ab50c23aada55315ef6a13780da8.jpg",
        price: "$8.33"
      },
      {
        title: "Tendon",
        description: "Rice topped with tempura shrimp and vegetables.",
        img: "https://i.pinimg.com/736x/93/ec/d1/93ecd1ede7465f4452ac89c82bb0d00d.jpg",
        price: "$4.32"
      },
      {
        title: "Unadon",
        description: "Grilled eel glazed with sweet soy sauce over rice.",
        img: "https://i.pinimg.com/1200x/67/e8/a1/67e8a1eed5931a462733759d6acc883e.jpg",
        price: "$5.89"
      },
      {
        title: "Chirashidon",
        description: "Bowl of rice topped with assorted sashimi.",
        img: "https://i.pinimg.com/736x/a7/71/32/a77132d3908e9fa577be4540d1daf799.jpg",
        price: "$6.54"
      },
      {
        title: "Spicy Chicken Don",
        description: "Chicken in spicy sauce over steamed rice.",
        img: "https://i.pinimg.com/1200x/d6/29/be/d629be04b437ba0106f9e21f1e642e3e.jpg",
        price: "$4.50"
      },
      {
        title: "Tofu Don",
        description: "Fried tofu with soy sauce and vegetables.",
        img: "https://i.pinimg.com/1200x/40/b4/92/40b492ab67f9d527d8dd49a1c84f503b.jpg",
        price: "$3.90"
      }
  ];

  const content2 = document.getElementById('Donburi');
  
  content2.innerHTML = data2.map(
    (item) => `
    <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img src="${item.img}" alt="${item.title}" class="w-100 h-100 object-cover rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white">${item.title}</h2>
      <p class="text-black">${item.description}</p>
      <div class="card-actions justify-end">
        <button class="btn bg-yellow-400">Buy Now</button>
      </div>
    </div>
  </div>
    `).join('')





    const data3 = [
      {
        title: "Classic Bento",
        description: "Rice, grilled fish, pickles, and vegetables.",
        img: "https://i.pinimg.com/736x/e0/21/fd/e021fd60c9034fc318c7ec42b9f230cf.jpg",
        price: "$10.47"
      },
      {
        title: "Chicken Katsu Bento",
        description: "Breaded chicken with rice and cabbage salad.",
        img: "https://i.pinimg.com/736x/52/23/2a/52232abaed4d2e557eea5b671351fa79.jpg",
        price: "$5.68"
      },
      {
        title: "Beef Teriyaki Bento", 
        description: "Sweet-savory beef slices with rice and edamame.", 
        img: "https://i.pinimg.com/736x/42/fe/46/42fe46e8f6413d8475f7ecd54e0ad5f1.jpg", 
        price: "$12.22"
      },
      {
        title: "Sushi Bento", 
        description: "Assorted sushi pieces with salad and miso soup.", 
        img: "https://i.pinimg.com/736x/9e/69/12/9e6912b8f301b17f4a2e2214d16bc067.jpg", 
        price: "$11.43"
      },
      {
        title: "Curry Bento", 
        description: "Rice with Japanese curry and side dishes.", 
        img: "https://i.pinimg.com/1200x/01/c8/39/01c8390b80afcf7f73d53add46662d3b.jpg", 
        price: "$10.97"
      },
      {
        title: "Spicy Chicken Bento", 
        description: "Chicken in spicy teriyaki sauce with rice.", 
        img: "https://i.pinimg.com/736x/52/23/2a/52232abaed4d2e557eea5b671351fa79.jpg", 
        price: "$15.21"
      },
      {
        title: "Tofu Bento", 
        description: "Fried tofu with teriyaki glaze and salad.", 
        img: "https://i.pinimg.com/736x/88/21/8a/88218aa0e651ff5a826ee867bf5e0cb2.jpg", 
        price: "$18.13"
      },
      {
        title: "Mini Bento", 
        description: "Compact set with rice ball, omelet, and vegetables.", 
        img: "https://i.pinimg.com/736x/aa/6e/87/aa6e876e8c324de8f623c8e5fddb0404.jpg", 
        price: "$9.52"
      }
  ];

  const content3 = document.getElementById('Bento');
  
  content3.innerHTML = data3.map(
    (item) => `
    <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img src="${item.img}" alt="${item.title}" class="w-100 h-100 object-cover rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white">${item.title}</h2>
      <p class="text-black">${item.description}</p>
      <div class="card-actions justify-end">
        <button class="btn bg-yellow-400">Buy Now</button>
      </div>
    </div>
  </div>
    `).join('')





    const data4 = [
      { 
        title: "Mochi", 
        description: "Soft rice cake with sweet bean or fruit filling.", 
        img: "https://i.pinimg.com/736x/9a/b3/4b/9ab34b4fe034392b031ffd970835fd03.jpg", 
        price: "$9.51" 
      },
      { 
        title: "Taiyaki", 
        description: "Fish-shaped cake filled with custard or red beans.", 
        img: "https://i.pinimg.com/736x/41/0b/4f/410b4ffc4ed3f0c20b1474f725520341.jpg", 
        price: "$8.10" 
      },
      { 
        title: "Dango", 
        description: "Skewered rice dumplings coated with sweet soy glaze.", 
        img: "https://i.pinimg.com/736x/9e/e1/bc/9ee1bca85f5bd3ca1d1fc82b96ba89ff.jpg", 
        price: "$12.40" 
      },
      { 
        title: "Matcha Ice Cream", 
        description: "Green tea flavored ice cream.", 
        img: "https://i.pinimg.com/1200x/5a/15/2c/5a152cffd4dee6ab5fea0d0898793f9e.jpg", 
        price: "$5.71" 
      },
      { 
        title: "Anmitsu", 
        description: "Jelly dessert with fruit, red beans, and syrup.", 
        img: "https://i.pinimg.com/1200x/8a/51/74/8a5174e561ee10f04a3a4f578e455a27.jpg", 
        price: "$6.48" 
      },
      { 
        title: "Matcha Cheesecake", 
        description: "Creamy cheesecake with matcha flavor.", 
        img: "https://i.pinimg.com/736x/86/a7/b7/86a7b7bac7c4358d8f54f7a9e5f7a7a9.jpg", 
        price: "$12.35" 
      },
      { 
        title: "Sakura Mochi", 
        description: "Pink rice cake wrapped in cherry leaf.", 
        img: "https://i.pinimg.com/736x/0e/9f/63/0e9f63caff0f70a6a29757cbe7cbd47c.jpg", 
        price: "$11.25" 
      },
      { 
        title: "Hojicha Pudding", 
        description: "Roasted tea–flavored pudding.", 
        img: "https://i.pinimg.com/736x/da/37/5a/da375a0c5c749f5edd9d5600d31b2707.jpg", 
        price: "$3.25" 
      }
  ];

  const content4 = document.getElementById('JapaneseDeserts');
  
  content4.innerHTML = data4.map(
    (item) => `
    <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img src="${item.img}" alt="${item.title}" class="w-100 h-100 object-cover rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white">${item.title}</h2>
      <p class="text-black">${item.description}</p>
      <div class="card-actions justify-end">
        <button class="btn bg-yellow-400">Buy Now</button>
      </div>
    </div>
  </div>
    `).join('')



    const data5 = [
      { 
        title: "Matcha Latte", 
        description: "Creamy latte made with matcha green tea.", 
        img: "https://i.pinimg.com/736x/78/e9/bb/78e9bb7e16e8ccb40676d1fc30dea4d9.jpg", 
        price: "$4.55" 
      },
      { 
        title: "Sakura Tea", 
        description: "Fragrant cherry blossom tea.", 
        img: "https://i.pinimg.com/736x/38/78/b8/3878b8765dce59af96783ffca7881e3b.jpg", 
        price: "$5.67" 
      },
      { 
        title: "Iced Matcha", 
        description: "Cold-brewed matcha tea with ice.", 
        img: "https://i.pinimg.com/1200x/60/a6/be/60a6bed284124c0cfccbcb4d597b0b58.jpg", 
        price: "$5.32" 
      },
      { 
        title: "Sake", 
        description: "Traditional Japanese rice wine.", 
        img: "https://i.pinimg.com/736x/3c/27/b5/3c27b5a0e8778f5e8293c3e4170026a6.jpg", 
        price: "$7.52" 
      },
      {
        title: "Sayuri Nigori Sake",
        description: "Sweet, creamy Japanese nigori sake with notes of white grape and cherry, perfect chilled or at room temperature.",
        img: "https://i.pinimg.com/736x/3c/17/86/3c178694dda677a02e1cb888ece55120.jpg",
        price: "$8.56"
      },
      { 
        title: "Amazake", 
        description: "Sweet fermented rice drink.", 
        img: "https://i.pinimg.com/736x/43/47/90/4347902e9689d6ee76a35276dd3cd575.jpg", 
        price: "$2.33" 
      },
      { 
        title: "Japanese Coffee", 
        description: "Light roast coffee with mild bitterness.", 
        img: "https://i.pinimg.com/736x/ab/f1/43/abf14316ef88e907ad2837f19684e775.jpg", 
        price: "$5.35" 
      },
      { 
        title: "Plum Wine (Umeshu)", 
        description: "Sweet and fruity plum-infused wine.", 
        img: "https://i.pinimg.com/736x/f4/fb/13/f4fb13aae74ea1117177960541cf4b13.jpg", 
        price: "$7.65" 
      }
    ]


    const content5 = document.getElementById('Drinks');
  
  content5.innerHTML = data5.map(
    (item) => `
    <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img src="${item.img}" alt="${item.title}" class="w-100 h-100 object-cover rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white">${item.title}</h2>
      <p class="text-black">${item.description}</p>
      <div class="card-actions justify-end">
        <button class="btn bg-yellow-400">Buy Now</button>
      </div>
    </div>
  </div>
    `).join('')





    const data6 = [
      { 
        title: "Takoyaki", 
        description: "Fried octopus balls topped with sauce, mayo, and bonito flakes.", 
        img: "https://i.pinimg.com/736x/fe/58/0c/fe580c83a433505a674e19b1a835ab2b.jpg", 
        price: "$4.35" 
      },
      { 
        title: "Okonomiyaki", 
        description: "Savory Japanese pancake with cabbage, meat, and toppings.", 
        img: "https://i.pinimg.com/1200x/46/5a/e6/465ae659e28322d1b2db4d94cffb8df5.jpg", 
        price: "$5.65" 
      },
      { 
        title: "Yakitori", 
        description: "Grilled chicken skewers brushed with teriyaki sauce.", 
        img: "https://i.pinimg.com/1200x/c9/1d/a0/c91da0f2365b442028732d795f4bd659.jpg", 
        price: "$5.89" 
      },
      { 
        title: "Korokke", 
        description: "Japanese croquette filled with meat or vegetables, breaded and fried.", 
        img: "https://i.pinimg.com/736x/cd/65/c6/cd65c6998dbde80735dcb7f3265600e9.jpg", 
        price: "$4.65" 
      },
      { 
        title: "Taiyaki (Street Version)", 
        description: "Fish-shaped cake filled with custard or red beans, sold hot on streets.", 
        img: "https://i.pinimg.com/736x/35/50/3c/35503ceded7fad3dfbe632a76b302bf4.jpg", 
        price: "$3.65" 
      },
      { 
        title: "Karaage", 
        description: "Japanese fried chicken served with dipping sauce.", 
        img: "https://i.pinimg.com/1200x/46/7e/8f/467e8f0c41bc59121ce0896f2778bf1d.jpg", 
        price: "$7.52" 
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
      }
    ]



    const content6 = document.getElementById('StreetFood');
  
  content6.innerHTML = data6.map(
    (item) => `
    <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img src="${item.img}" alt="${item.title}" class="w-100 h-100 object-cover rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white">${item.title}</h2>
      <p class="text-black">${item.description}</p>
      <div class="card-actions justify-end">
        <button class="btn bg-yellow-400">Buy Now</button>
      </div>
    </div>
  </div>
    `).join('')