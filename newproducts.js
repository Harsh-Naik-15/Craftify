const newproducts = [
    {
        "id": 1,
        "name":" High-Quality Red Clay Bricks",
        "price": 7.38,
        "image": "imgs/products/f1.png",
        "description": "Red bricks are a common building material made from clay and shale that have been fired at high temperatures. These bricks have a distinctive red color and are commonly used for construction projects such as building walls, chimneys, and fireplaces. Red bricks have several advantages over other building materials. They are durable, long-lasting, and able to withstand extreme weather conditions, making them a popular choice for construction in many parts of the world. They also provide excellent insulation, helping to keep buildings cool in the summer and warm in the winter."
    },
    {
        "id": 2,
        "name":" Premium Roofing Shingles",
        "price": 50,
        "image": "imgs/products/f2.png",
        "description": "Tenso Structures Metal Roofing Shingles provide the ultimate in modern luxury. The shingles are crafted from the finest aluminium zinc alloy, coated steel and Italian stone chips, and are lightweight yet incredibly durable. The ceramic coating helps resist fading and UV penetration. These premium shingles are designed to provide superior performance; with enhanced wind resistance of up to 200km/hour, you can be sure your building will remain safe and secure."
    },
    {
        "id": 3,
        "name":" Galvanized Steel Metal Rods",
        "price": 40.35,
        "image": "imgs/products/f3.png",
        "description": "These TMT steel bars are made from alloy steel; these bars are incredibly durable and will stand up to any construction project you have. Plus, with a galvanized surface, they're easy to keep clean and look great. It measures 15 feet long, and these bars are perfect for a variety of construction applications. With a galvanized surface and silver color, our steel bars will give your project a professional look. It is perfect for any industrial application. With a thickness of 3 mm, these silver bars are sure to withstand even the most strenuous conditions."
    },
    {
        "id": 4,
        "name":" Versatile Concrete Blocks",
        "price": 10,
        "image": "imgs/products/f4.png",
        "description": "The AAC Blocks are used as a substitute against conventional building masonry such as red clay bricks and have been widely accepted globally because of their beneficial properties.The aeration is caused by a reaction of a mix of various materials mainly consisting of silica (through fly-ash), quicklime, cement and others. AAC Blocks consist of around 80% air, this aerated material is processed through autoclaving which entails high pressure curing of aerated materials formed in cellular shapes."
    },
    {
        "id": 5,
        "name":" Apex Floor Guard (4 Litre)",
        "price": 3999,
        "image": "imgs/products/f5.png",
        "description": "Apex Floor Guard is a water-based crosslinking all-acrylic emulsion. It comes with exceptional durability that can be formulated into high-resistance coatings offering a wide array of performance properties that are tailored to suit application needs."
    },
    {
        "id": 6,
        "name":" Highly Durable And Designer Glass",
        "price": 514,
        "image": "imgs/products/f6.png",
        "description": "Casement windows can be built for inside or outside opening as they are pivoted at the sides.With so many things to consider when choosing a door – brands, materials, functionality, performance and so on – the process can become mind-boggling.Casement windows are superior options for consumers interested with acoustic, thermal and safety performance."
    },
    {
        "id": 7,
        "name":" Premium Interior Paint",
        "price": 1450,
        "image": "imgs/products/f7.png",
        "description": "Buy Indigo Premium Interior Emulsion Online in Hyderabad. Get Indigo Paints Price List Indigo's Premium Interior Emulsion will help you achieve the high-end look you've always desired. Its smooth matt finish adds charm to your walls, while its high washability ensures that you can keep it for a long time. That's not everything, though. It also prevents fungal growth and black spots on your walls."
    },
    {
        "id": 8,
        "name":" Classic Clay Roofing Tiles",
        "price": 50,
        "image": "imgs/products/f8.png",
        "description": "Classic Brown handmade tiles display a variation of colour with shades of reds, browns and purples. Through the application of a carefully controlled reduction atmosphere for a limited period this organic colour variation is achieved. No two clay tiles will have the same stamp giving a beautiful blend of colour on the roof. The Purple Brown colour also mixes well with the Bronze colour to form a charming blend."
    },
    {
        "id": 9,
        "name":" 1.5'' Iron Nail (100 pcs)",
        "price": 70.45,
        "image": "imgs/products/n1.png",
        "description": "Premium quality Concrete iron nails for wall with thick and ribbed shank for easy piercing and strong holding strength. Application: for masonry wall, hanging photo frames and wall Mirror and other decorative item Each nail offers a strong, reliable construction that resists bending while being hammered in Ideal for home improvement, art hanging, repairs, special projects, and more."
    },
    {
        "id": 10,
        "name":" Premium Quality Plywood",
        "price": 6499,
        "image": "imgs/products/n2.png",
        "description": "Kitply 2000 2440x1220 mm MR Grade is part of an elegant collection of Plywood from Kitply is a premium product with unmatched quality and aesthetic. Plywood available in size of 2440x1220 of 8 mm thickness. Plywood best used in Living Room,Bedroom,Office,Kitchen,Hotel for Commercial,Residential projects."
    },
    {
        "id": 11,
        "name":" Two Way Switches",
        "price": 240.35,
        "image": "imgs/products/n3.png",
        "description": "Positive action rocker switches : Designed with soft switching mechanism which will ensure complete isolation during operation Switches with X rating : Designed for inductive and resistive loads Mat black colour : Matches to any interiors Warranty : 10 Year (against manufacturing defect)."
    },
    {
        "id": 12,
        "name":" Unsheathed Industrial Cable",
        "price": 1335,
        "image": "imgs/products/n4.png",
        "description": "Polycab 1 Sqmm 90m Black Single Core FRLF Multistrand PVC Insulated Unsheathed Industrial Cable is a high tension cable made of PVC material. It is black in color and has a length of 90m. The Polycab unsheathed industrial cable is specially designed for high tension applications. It is made of superior quality copper conductor and flame retardant lead free (FRLF) wire that conforms to IS-694:1990 standards."
    },
    {
        "id": 13,
        "name":" Stylish Door Handles",
        "price": 1805.45,
        "image": "imgs/products/n5.png",
        "description": "Made From Stainless Steel SS304. Finish Satin SS. Support All Types Of Wooden Doors Having Door Thickness 32MM-38MM. Smooth Functioning , Never Interrupting Movement. Made With High Class Precision. High Corrosion Resistance. Fire Resistant. Safety Assured. 5 Years Manufacturer Warranty."
    },
    {
        "id": 14,
        "name":" Havana Door (PU-painted)",
        "price": 6499,
        "image": "imgs/products/n6.png",
        "description": "Play up your contemporary quotient with our white premium PU-painted Havana Door. With high-density and high moisture-resistant wood, Havana effortlessly withstands the test of time. While the intricate fluted panel makes it a perfect door to brighten up homes with a touch of serenity."
    },
    {
        "id": 15,
        "name":" Premium Quality Hinges",
        "price": 330,
        "image": "imgs/products/n7.png",
        "description": "The Godrej 7213 Silver Full Overlay Slip On Hinge is a versatile hinge designed for door applications in cupboards, shutters, and other similar furniture pieces. Manufactured by Godrej, a reputable brand known for its quality furniture hardware, this hinge offers reliable performance and ease of installation."
    },
    {
        "id": 16,
        "name":" Xtralite ACC Blocks (4'')",
        "price": 47,
        "image": "imgs/products/n8.png",
        "description": "UltraTech Xtralite is a low-weight Aerated Autoclaved Concrete Block. It is ideal for multistory buildings since it is lighter than normal size bricks and blocks. We deliver these AAC blocks in various sizes such as 4 inch, 6 inch, 8 inch, 9 inch, 12 inch, etc..at the best price in Hyderabad."
    },

];
export default newproducts;