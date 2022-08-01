var images = ["https://m.media-amazon.com/images/M/MV5BMDczMjEwMDYtNjQ3NS00NjE2LTkxM2MtOTc0ZWY0YjkwZTcxXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_.jpg","https://static.wikia.nocookie.net/22d003e5-d000-4e99-8b6f-474623393f41/scale-to-width/370","https://assets.nationbuilder.com/harvardwood/pages/7904/meta_images/original/Andrew_Burlinson.jpg?1570051941","https://m.media-amazon.com/images/M/MV5BNTJhNTVhMTctYzE5OS00Mzg5LWFmMmMtNmExZmQ5OWNkNDRiXkEyXkFqcGdeQXVyMTQ4NzU1OTQ@._V1_.jpg","https://i.pinimg.com/736x/35/ba/4c/35ba4cb71a9ad3a274e30b3b29e41dd9.jpg","https://www.themoviedb.org/t/p/original/ArVLQOI1UMcPjoakXCHIrZYFyVp.jpg" ]
var names= ["Just Add Magic Quinn Family Book","Becky Quinn","Scott Quinn", "Teri Quinn", "Kelly Quinn", "Buddy Quinn"];
var i = 0;

function update()
{    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {i = 0;} 

    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
