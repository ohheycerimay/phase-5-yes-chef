puts "Destroying databases...🧨"

User.destroy_all
Ingredient.destroy_all
Stock.destroy_all

puts "Done!"

puts "Seeding user...👥"

u1= User.create(name:"Chef Ceri", username:"ohheycerimay", password:"jack", profile_pic:"https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/1150656_3263131035302_990227143_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=de6eea&_nc_ohc=F-RXMiCu-MUAX_OYEig&_nc_ht=scontent-iad3-1.xx&oh=00_AfDEzdKgPz1Rpdd4HMUxpC2e_Od2GjcOQzqaRl_vRFM-6A&oe=63E405B4")

puts "Done!"

puts "Seeding ingredients...🍝"

i1= Ingredient.create(name:"malloreddus", image_url:"https://www.the-pasta-project.com/wp-content/uploads/2017/09/Malloreddus-gnocchi-from-Sardinia-1-640x433.jpg", catagory:"pasta")
i2= Ingredient.create(name:"bucatini", image_url:"https://assets.bonappetit.com/photos/5a73698c724b7c4156adb1ef/4:3/w_2984,h_2238,c_limit/BUCATINI-PASTA-RAW.jpg", catagory:"pasta")
i3= Ingredient.create(name:"spaghetti", image_url:"https://cdn.apartmenttherapy.info/image_url/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-10-five-pasta-shapes%2FPastaFour", catagory:"pasta")
i4= Ingredient.create(name:"squid ink", image_url:"https://m.media-amazon.com/image_urls/I/7160DbDvG+L.jpg", catagory:"fish")
i5= Ingredient.create(name:"octopus", image_url:"https://image_urls.unsplash.com/photo-1572542150708-9ff7fb0e1514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2N0b3B1cyUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80", catagory:"fish")
i6= Ingredient.create(name:"skate", image_url:"https://www.thespruceeats.com/thmb/xCwLoxHcg0oykoGcz-hgMyKqRK4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skate-wing-with-brown-butter-1300597-hero-1-13b6ea36048f490eb9e46711767179e1.jpg", catagory:"fish")
i7= Ingredient.create(name:"mussels", image_url:"https://therecipecritic.com/wp-content/uploads/2021/11/howtocookmussels.jpg", catagory:"fish")
i8= Ingredient.create(name:"halibut", image_url:"https://assets.epicurious.com/photos/54b02a09766062b203447310/master/pass/51154980_halibut-hazelnut_1x1.jpg", catagory:"fish")
i9= Ingredient.create(name:"oysters", image_url:"https://www.refinery29.com/image_urls/10571176.jpg", catagory:"fish")
i10= Ingredient.create(name:"bottarga", image_url:"https://www.seriouseats.com/thmb/-pEcW0d9hpgI4KM88cqlWRbJ5ls=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__03__20190312-bottarga-vicky-wasik-smeralda-mullet-sliced-1500x1125-ddd73af2da7641068e2815d4e6356f7a.jpg", catagory:"fish")
i11= Ingredient.create(name:"hanger steak", image_url:"https://grillingsmokingliving.com/wp-content/uploads/2020/09/grilled-hanger-steak-7-1.jpg", catagory:"meat/poultry")
i12= Ingredient.create(name:"short ribs", image_url:"https://afoodloverskitchen.com/wp-content/uploads/beer-braised-short-ribs-p1.jpg", catagory:"meat/poultry")
i13= Ingredient.create(name:"half chicken", image_url:"https://cdn1.jernejkitchen.com/sites/default/files/styles/text_horizontalbreakpoints_theme_jernejkitchenr_screen-md-max_1x/public/roasted-chicken-halves-process03-jernejkitchen.jpg?itok=pMwijZR1", catagory:"meat/poulty")
i14= Ingredient.create(name:"guanciale", image_url:"https://m.media-amazon.com/image_urls/I/51QDyN51DhL._AC_SX679_.jpg", catagory:"meat/poultry")
i15= Ingredient.create(name:"pecorino", image_url:"https://m.media-amazon.com/image_urls/I/41qD4OYTMVL.jpg", catagory:"dairy")
i16= Ingredient.create(name:"parmigiano reggiano", image_url:"https://cdn.shopify.com/s/files/1/0077/8233/4549/products/CheeseParmiggiano_1400x.jpg?v=1596164021", catagory:"dairy")
i17= Ingredient.create(name:"burrata", image_url:"https://www.allrecipes.com/thmb/EE8z7fxQv5PCg50OgIDbaBQQuRg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Gettyimage_urls-489762056-2000-faa56984032c4880a87f47c7d66d6738.jpg", catagory:"dairy")
i18= Ingredient.create(name:"goat cheese", image_url:"https://www.zingermanscreamery.com/app/uploads/2018/04/zing-creamery-375.jpg", catagory:"dairy")
i19= Ingredient.create(name:"taleggio", image_url:"https://image_urls.squarespace-cdn.com/content/v1/568d82dbb204d5990c9bb12b/1613749193600-AJE1THO2OYVDGFZPJ50K/Taleggio+Cheese_Close.jpg?format=1000w", catagory:"dairy")
i20= Ingredient.create(name:"milk", image_url:"https://m.media-amazon.com/image_urls/S/assets.wholefoodsmarket.com/PIE/product/5fcae0b2cbc20b532172c52c_00874613001620-c7n1.jpg", catagory:"dairy")
i21= Ingredient.create(name:"eggs", image_url:"https://www.rd.com/wp-content/uploads/2018/08/12-Foods-That-Heal-Broken-Bones-1.jpg", catagory:"dairy")
i22= Ingredient.create(name:"white wine", image_url:"https://image_urls.squarespace-cdn.com/content/v1/5bb7e9cec2ff6110cdf21896/1621853862909-CD61EIZ4819SQJ06UJWA/Braschi+Albana+Secco.jpg?format=1000w", catagory:"pantry")
i23= Ingredient.create(name:"olive oil", image_url:"https://m.media-amazon.com/image_urls/I/81mvqmZ9oBL.jpg", catagory:"pantry")
i24= Ingredient.create(name:"canned tomatoes", image_url:"https://assets.epicurious.com/photos/5acfbec1c5c3140bdf98db32/4:6/w_1600%2Cc_limit/sanmarzanotoms.jpg", catagory:"pantry")
i25= Ingredient.create(name:"flour", image_url:"https://www.thespruceeats.com/thmb/MecIMVxLn74VSSn1KNcpcDiWqE4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/all_purpose_flour1_2-92747f05d2c7445d86fedae894c8c16e.jpg", catagory:"pantry")
i26= Ingredient.create(name:"lemon", image_url:"https://www.freshpoint.com/wp-content/uploads/commodity-lemon.jpg", catagory:"produce")
i27= Ingredient.create(name:"parsley", image_url:"https://themom100.com/wp-content/uploads/2021/07/how-to-cook-with-parsley-435.jpg", catagory:"produce")
i28= Ingredient.create(name:"basil", image_url:"https://cdn.loveandlemons.com/wp-content/uploads/2019/07/IMG_2600-2-1.jpg", catagory:"produce")
i29= Ingredient.create(name:"garlic", image_url:"https://m.media-amazon.com/image_urls/I/91cfc8pBQQL.jpg", catagory:"produce")
i30= Ingredient.create(name:"shallot", image_url:"https://wavesinthekitchen.com/wp-content/uploads/2022/11/Shallot-Confit-1-of-6.jpg", catagory:"produce")
i31= Ingredient.create(name:"chives", image_url:"https://image_urls.ctfassets.net/3s5io6mnxfqz/5Iz9Dkf5cez2cwqVhMVgJf/5bce0d3f5a2ad77ab5b916987ea9eec8/AdobeStock_84744256.jpeg", catagory:"produce")
i32= Ingredient.create(name:"beets", image_url:"https://www.farmersalmanac.com/wp-content/uploads/2013/02/beets-farmers-market_as61673807.jpeg", catagory:"produce")
i33= Ingredient.create(name:"red onion", image_url:"https://www.growjoy.com/store/pc/catalog/red_burgundy_onion_plants_390_detail.jpg", catagory:"produce")
i34= Ingredient.create(name:"fingerling potatoes", image_url:"https://www.cookingclarified.com/wp-content/uploads/2013/05/fingerling-potatoes-300x300.jpg", catagory:"produce")
i35= Ingredient.create(name:"frisee", image_url:"https://chefsmandala.com/wp-content/uploads/2018/03/Frisee-Lettuce.jpg", catagory:"produce")
i36= Ingredient.create(name:"arugula", image_url:"https://www.acouplecooks.com/wp-content/uploads/2022/05/Arugula-003.jpg", catagory:"produce")
i37= Ingredient.create(name:"pomegranate", image_url:"https://cdn.apartmenttherapy.info/image_url/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FSeries%2F2022-11-how-to-seed-and-cut-pomegranate%20%2FHOW-TO-SEED-AND-CUT-POMEGRANATE-163", catagory:"produce")
i38= Ingredient.create(name:"brussel sprouts", image_url:"https://image_urls.immediate.co.uk/production/volatile/sites/30/2021/12/Bowl-of-sprouts-8305212.jpg", catagory:"produce")
i39= Ingredient.create(name:"blood orange", image_url:"https://www.linsfood.com/wp-content/uploads/2020/03/Blood-oranmge-slices.jpg", catagory:"produce")
i40= Ingredient.create(name:"asparagus", image_url:"https://www.feastingathome.com/wp-content/uploads/2020/03/roasted-asparagus-7-1.jpg", catagory:"produce")

puts "Finished ingredients!"

puts "Seeding stock...🗒"

s1= Stock.create(user_id: u1.id, ingredient_id: i1.id, amount:1, all_day_amount:100, all_day: false)
s2= Stock.create(user_id: u1.id, ingredient_id: i2.id, amount:1, all_day_amount:100, all_day: false)
s3= Stock.create(user_id: u1.id, ingredient_id: i3.id, amount:1, all_day_amount:100, all_day: false)
s4= Stock.create(user_id: u1.id, ingredient_id: i4.id, amount:1, all_day_amount:100, all_day: false)
s5= Stock.create(user_id: u1.id, ingredient_id: i5.id, amount:1, all_day_amount:100, all_day: false)
s6= Stock.create(user_id: u1.id, ingredient_id: i6.id, amount:1, all_day_amount:100, all_day: false)
s7= Stock.create(user_id: u1.id, ingredient_id: i7.id, amount:1, all_day_amount:100, all_day: false)
s8= Stock.create(user_id: u1.id, ingredient_id: i8.id, amount:1, all_day_amount:100, all_day: false)
s9= Stock.create(user_id: u1.id, ingredient_id: i9.id, amount:1, all_day_amount:100, all_day: false)
s10= Stock.create(user_id: u1.id, ingredient_id: i10.id, amount:1, all_day_amount:100, all_day: false)
s11= Stock.create(user_id: u1.id, ingredient_id: i11.id, amount:1, all_day_amount:100, all_day: false)
s12= Stock.create(user_id: u1.id, ingredient_id: i12.id, amount:1, all_day_amount:100, all_day: false)
s13= Stock.create(user_id: u1.id, ingredient_id: i13.id, amount:1, all_day_amount:100, all_day: false)
s14= Stock.create(user_id: u1.id, ingredient_id: i14.id, amount:1, all_day_amount:100, all_day: false)
s15= Stock.create(user_id: u1.id, ingredient_id: i15.id, amount:1, all_day_amount:100, all_day: false)
s16= Stock.create(user_id: u1.id, ingredient_id: i16.id, amount:1, all_day_amount:100, all_day: false)
s17= Stock.create(user_id: u1.id, ingredient_id: i17.id, amount:1, all_day_amount:100, all_day: false)
s18= Stock.create(user_id: u1.id, ingredient_id: i18.id, amount:1, all_day_amount:100, all_day: false)
s19= Stock.create(user_id: u1.id, ingredient_id: i19.id, amount:1, all_day_amount:100, all_day: false)
s20= Stock.create(user_id: u1.id, ingredient_id: i20.id, amount:1, all_day_amount:100, all_day: false)
s21= Stock.create(user_id: u1.id, ingredient_id: i21.id, amount:1, all_day_amount:100, all_day: false)
s22= Stock.create(user_id: u1.id, ingredient_id: i22.id, amount:1, all_day_amount:100, all_day: false)
s23= Stock.create(user_id: u1.id, ingredient_id: i23.id, amount:1, all_day_amount:100, all_day: false)
s24= Stock.create(user_id: u1.id, ingredient_id: i24.id, amount:1, all_day_amount:100, all_day: false)
s25= Stock.create(user_id: u1.id, ingredient_id: i25.id, amount:1, all_day_amount:100, all_day: false)
s26= Stock.create(user_id: u1.id, ingredient_id: i26.id, amount:1, all_day_amount:100, all_day: false)
s27= Stock.create(user_id: u1.id, ingredient_id: i27.id, amount:1, all_day_amount:100, all_day: false)
s28= Stock.create(user_id: u1.id, ingredient_id: i28.id, amount:1, all_day_amount:100, all_day: false)
s29= Stock.create(user_id: u1.id, ingredient_id: i29.id, amount:1, all_day_amount:100, all_day: false)
s30= Stock.create(user_id: u1.id, ingredient_id: i30.id, amount:1, all_day_amount:100, all_day: false)
s31= Stock.create(user_id: u1.id, ingredient_id: i31.id, amount:1, all_day_amount:100, all_day: false)
s32= Stock.create(user_id: u1.id, ingredient_id: i32.id, amount:1, all_day_amount:100, all_day: false)
s33= Stock.create(user_id: u1.id, ingredient_id: i33.id, amount:1, all_day_amount:100, all_day: false)
s34= Stock.create(user_id: u1.id, ingredient_id: i34.id, amount:1, all_day_amount:100, all_day: false)
s35= Stock.create(user_id: u1.id, ingredient_id: i35.id, amount:1, all_day_amount:100, all_day: false)
s36= Stock.create(user_id: u1.id, ingredient_id: i36.id, amount:1, all_day_amount:100, all_day: false)
s37= Stock.create(user_id: u1.id, ingredient_id: i37.id, amount:1, all_day_amount:100, all_day: false)
s38= Stock.create(user_id: u1.id, ingredient_id: i38.id, amount:1, all_day_amount:100, all_day: false)
s39= Stock.create(user_id: u1.id, ingredient_id: i39.id, amount:1, all_day_amount:100, all_day: false)
s40= Stock.create(user_id: u1.id, ingredient_id: i40.id, amount:1, all_day_amount:100, all_day: false)

puts "Finished stock!"