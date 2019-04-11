// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateDocumentTitle();
    showArticleF(data);
	showRecipes(data);
	showSectionRecettes();

  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function() {
  // Some code...
  
document.getElementById("title").innerHTML = data.documentTitle;
};

var showArticleF = function(data) {

for(var i=1;i<=3;i++){

  document.getElementById("content"+i).innerHTML = data.articles[i-1].content;
}

for(var i=1;i<=3;i++){

  document.getElementById("subT"+i).innerHTML = data.articles[i-1].subtitle;
}
for(var i=1;i<=3;i++){

  document.getElementById("title"+i).innerHTML = data.articles[i-1].title;
}

};

var showRecipes = function(data){

	for(var i=1; i<=12; i++){
		document.getElementById("titreRecette"+i).innerHTML = data.recipes[i-1].description;
		document.getElementById("prix"+i).innerHTML = data.recipes[i-1].price + "$";
	}


};

var showSectionRecettes = function(){
	$('.multiple-items').slick({
			  infinite: true,
			  slidesToShow: 2,
			  slidesToScroll: 2
			});
}
