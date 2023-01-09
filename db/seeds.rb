puts "Destroying databases...🧨"

User.destroy_all
Ingredient.destroy_all
Stock.destroy_all

puts "Done!"

puts "Seeding user...👥"

u1= User.create(name:"Chef Ceri", username:"ohheycerimay", password:"jack", image_url:"https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/1150656_3263131035302_990227143_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=de6eea&_nc_ohc=F-RXMiCu-MUAX_OYEig&_nc_ht=scontent-iad3-1.xx&oh=00_AfDEzdKgPz1Rpdd4HMUxpC2e_Od2GjcOQzqaRl_vRFM-6A&oe=63E405B4")

puts "Done!"

puts "Seeding ingredients...🍝"

i1= Ingredient.create(name:"", image:"", catagory:"")
i2= Ingredient.create(name:"", image:"", catagory:"")
i3= Ingredient.create(name:"", image:"", catagory:"")
i4= Ingredient.create(name:"", image:"", catagory:"")
i5= Ingredient.create(name:"", image:"", catagory:"")
i6= Ingredient.create(name:"", image:"", catagory:"")
i7= Ingredient.create(name:"", image:"", catagory:"")
i8= Ingredient.create(name:"", image:"", catagory:"")
i9= Ingredient.create(name:"", image:"", catagory:"")
i10= Ingredient.create(name:"", image:"", catagory:"")
i11= Ingredient.create(name:"", image:"", catagory:"")
i12= Ingredient.create(name:"", image:"", catagory:"")
i13= Ingredient.create(name:"", image:"", catagory:"")
i14= Ingredient.create(name:"", image:"", catagory:"")
i15= Ingredient.create(name:"", image:"", catagory:"")
i16= Ingredient.create(name:"", image:"", catagory:"")
i17= Ingredient.create(name:"", image:"", catagory:"")
i18= Ingredient.create(name:"", image:"", catagory:"")
i19= Ingredient.create(name:"", image:"", catagory:"")
i20= Ingredient.create(name:"", image:"", catagory:"")
i21= Ingredient.create(name:"", image:"", catagory:"")
i22= Ingredient.create(name:"", image:"", catagory:"")
i23= Ingredient.create(name:"", image:"", catagory:"")
i24= Ingredient.create(name:"", image:"", catagory:"")
i25= Ingredient.create(name:"", image:"", catagory:"")
i26= Ingredient.create(name:"", image:"", catagory:"")
i27= Ingredient.create(name:"", image:"", catagory:"")
i28= Ingredient.create(name:"", image:"", catagory:"")
i29= Ingredient.create(name:"", image:"", catagory:"")
i30= Ingredient.create(name:"", image:"", catagory:"")
i31= Ingredient.create(name:"", image:"", catagory:"")
i32= Ingredient.create(name:"", image:"", catagory:"")
i33= Ingredient.create(name:"", image:"", catagory:"")
i34= Ingredient.create(name:"", image:"", catagory:"")
i35= Ingredient.create(name:"", image:"", catagory:"")
i36= Ingredient.create(name:"", image:"", catagory:"")
i37= Ingredient.create(name:"", image:"", catagory:"")
i38= Ingredient.create(name:"", image:"", catagory:"")
i39= Ingredient.create(name:"", image:"", catagory:"")
i40= Ingredient.create(name:"", image:"", catagory:"")

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