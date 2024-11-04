const ropa = [
    {
      "id": 1,
      "nombre": "Cosplay de Superhéroe",
      "precio": 79.99,
      "imagen": "https://pbs.twimg.com/media/FPbghGNXEAM25kU.jpg:large",
      "genero": "Cosplays"
    },
    {
      "id": 2,
      "nombre": "Cosplay de VideoJuego",
      "precio": 89.99,
      "imagen": "https://i.etsystatic.com/12047134/r/il/5ae49b/5238607580/il_570xN.5238607580_le3w.jpg",
      "genero": "Cosplays"
    },
    {
      "id": 3,
      "nombre": "Cosplay de Personaje Anime",
      "precio": 69.99,
      "imagen": "https://preview.redd.it/mikasa-cosplay-by-sweetiefox-v0-gfeoxbmalzfb1.jpg?width=640&crop=smart&auto=webp&s=e8133878e31a0a52be74c9cea79c5166cda8dae4",
      "genero": "Cosplays"
    },
    {
      "id": 4,
      "nombre": "Traje Formal Clásico",
      "precio": 149.99,
      "imagen": "https://wallpapers.com/images/hd/michael-scott-the-office-7h4zrcgil0q9d1xj.jpg",
      "genero": "suits"
    },
    {
      "id": 5,
      "nombre": "Traje de Gala",
      "precio": 199.99,
      "imagen": "https://i.pinimg.com/736x/ac/c6/b2/acc6b21bddb0bc8fea928d775ed85f1f.jpg",
      "genero": "suits"
    },
    {
      "id": 6,
      "nombre": "Traje de Fiesta",
      "precio": 129.99,
      "imagen": "https://i.pinimg.com/originals/fe/c8/bf/fec8bf698006bc376efd7ace82f7b547.jpg",
      "genero": "suits"
    },
    {
      "id": 7,
      "nombre": "Outfit Vintage 70's",
      "precio": 89.99,
      "imagen": "https://i.pinimg.com/736x/1f/ad/a8/1fada84dd02ff8cc96ed01357e43ea12.jpg",
      "genero": "Vintage Outfits"
    },
    {
      "id": 8,
      "nombre": "Chaqueta Vintage",
      "precio": 99.99,
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/2/25/Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg",
      "genero": "Vintage Outfits"
    },
    {
      "id": 9,
      "nombre": "Vestido Vintage",
      "precio": 79.99,
      "imagen": "https://meu-vestido-vintage.com/cdn/shop/files/Robe_Annee_40_800x_1_800x_800x_0c821073-2342-47ef-a761-b998e041da8b_1600x.webp?v=1688460615",
      "genero": "Vintage Outfits"
    },
    {
      "id": 10,
      "nombre": "Campera Anime Oversized",
      "precio": 39.99,
      "imagen": "https://i.pinimg.com/564x/0f/e9/a4/0fe9a46302c0efed58ad796a199766fd.jpg",
      "genero": "Friki Oversized"
    },
    {
      "id": 11,
      "nombre": "Remera Games Oversized",
      "precio": 25.99,
      "imagen": "https://i.pinimg.com/564x/75/52/f5/7552f5e0b6cde21c1da9605d6404abcf.jpg",
      "genero": "Friki Oversized"
    },
    {
      "id": 12,
      "nombre": "Chaqueta Games",
      "precio": 59.99,
      "imagen": "https://i.pinimg.com/564x/88/f2/52/88f2528c7fddf03b2bfc2dcdc6e1d548.jpg",
      "genero": "Friki Oversized"
    },
    {
      "id": 13,
      "nombre": "Outfit Vintage 80's",
      "precio": 99.99,
      "imagen": "https://i.pinimg.com/564x/36/fb/23/36fb23a9cbe4e27332e39267f53f0c9a.jpg",
      "genero": "80's Style"
    },
    {
      "id": 14,
      "nombre": "Campera 80's",
      "precio": 49.99,
      "imagen": "https://i.pinimg.com/564x/cc/1c/0c/cc1c0ca92a1104c18466d956c3e11271.jpg",
      "genero": "80's Style"
    },
    {
      "id": 15,
      "nombre": "Pantalones Vintage 80's",
      "precio": 69.99,
      "imagen": "https://i.pinimg.com/564x/60/5d/00/605d0084cdfe92df900410951e7fe031.jpg",
      "genero": "80's Style"
    },
    {
      "id": 16,
      "nombre": "Buzo Alternativo",
      "precio": 59.99,
      "imagen": "https://i.pinimg.com/736x/24/8c/23/248c23e983daaa4cee84f83fc6759cc7.jpg",
      "genero": "Alternative Style"
    },
    {
      "id": 17,
      "nombre": "Trajes Alternativa",
      "precio": 29.99,
      "imagen": "https://i.pinimg.com/564x/12/54/f8/1254f814fc3a27816125475dd48c2201.jpg",
      "genero": "Alternative Style"
    },
    {
      "id": 18,
      "nombre": "Dioses Alternativos",
      "precio": 49.99,
      "imagen": "https://i.pinimg.com/564x/07/1f/7f/071f7f528500eb28c39bd84c6a19c72d.jpg",
      "genero": "Alternative Style"
    },
    {
      "id": 19,
      "nombre": "Sudadera Cartoon",
      "precio": 45.99,
      "imagen": "https://i.imgur.com/r1T3hE4.jpg",
      "genero": "cartoon"
    },
    {
      "id": 20,
      "nombre": "Camiseta Cartoon",
      "precio": 25.99,
      "imagen": "https://i.imgur.com/r1T3hE4.jpg",
      "genero": "cartoon"
    },
    {
      "id": 21,
      "nombre": "Pantalones Cartoon",
      "precio": 35.99,
      "imagen": "https://i.imgur.com/r1T3hE4.jpg",
      "genero": "cartoon"
    },
    {
      "id": 22,
      "nombre": "Camiseta Rock Clásica",
      "precio": 25.99,
      "imagen": "https://i.imgur.com/miS5wT9.jpg",
      "genero": "rock"
    },
    {
      "id": 23,
      "nombre": "Chaqueta de Cuero Rock",
      "precio": 99.99,
      "imagen": "https://i.imgur.com/miS5wT9.jpg",
      "genero": "rock"
    },
    {
      "id": 24,
      "nombre": "Pantalones Rock",
      "precio": 49.99,
      "imagen": "https://i.imgur.com/miS5wT9.jpg",
      "genero": "rock"
    },
    {
      "id": 25,
      "nombre": "Camisa Rústica",
      "precio": 39.99,
      "imagen": "https://i.imgur.com/7OqM65D.jpg",
      "genero": "rustic"
    },
    {
      "id": 26,
      "nombre": "Pantalones Rústicos",
      "precio": 59.99,
      "imagen": "https://i.imgur.com/7OqM65D.jpg",
      "genero": "rustic"
    },
    {
      "id": 27,
      "nombre": "Chaqueta Rústica",
      "precio": 69.99,
      "imagen": "https://i.imgur.com/7OqM65D.jpg",
      "genero": "rustic"
    },
    {
      "id": 28,
      "nombre": "Chaqueta de Aventura",
      "precio": 79.99,
      "imagen": "https://i.imgur.com/K9u9QpU.jpg",
      "genero": "adventure"
    },
    {
      "id": 29,
      "nombre": "Camiseta de Aventura",
      "precio": 29.99,
      "imagen": "https://i.imgur.com/K9u9QpU.jpg",
      "genero": "adventure"
    },
    {
      "id": 30,
      "nombre": "Pantalones de Aventura",
      "precio": 49.99,
      "imagen": "https://i.imgur.com/K9u9QpU.jpg",
      "genero": "adventure"
    },
    {
      "id": 31,
      "nombre": "Camisa Serius",
      "precio": 39.99,
      "imagen": "https://i.imgur.com/YJ8NEgD.jpg",
      "genero": "serius"
    },
    {
      "id": 32,
      "nombre": "Pantalones Serius",
      "precio": 49.99,
      "imagen": "https://i.imgur.com/YJ8NEgD.jpg",
      "genero": "serius"
    },
    {
      "id": 33,
      "nombre": "Chaqueta Serius",
      "precio": 69.99,
      "imagen": "https://i.imgur.com/YJ8NEgD.jpg",
      "genero": "serius"
    }
  ]
  
export default ropa;