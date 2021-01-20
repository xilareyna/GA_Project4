# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
Blogz.create([
    {title: "winter trees arent cute", content: "ewrnlearnwelrknwewlerwe is how winter trees make me feel", author: "Xila Reyna", img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/twisting-winter-trees-in-forest-canopy-with-bare-branches-philip-openshaw.jpg"  }
])

Comment.create([
    {name: "Candice Sambury", email: "candices@email.com",ideas:"I disagree, winter trees are lovely"}
])