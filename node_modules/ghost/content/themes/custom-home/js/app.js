/**
 * Created by artem on 6/16/14.
 */


(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller("PanelController", function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
    });

    app.controller("ReviewController", function(){
       this.review = {};
       this.addReview = function(product) {
           product.reviews.push(this.review);
           this.review = {};
       };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'here u go',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full:'static/images/robot_1.jpg',
                    thumb:'static/images/robot_1.jpg'
                }
            ],
            reviews : [
                {
                    stars: 1,
                    body: "crapy one",
                    author: "troll@lol.com"
                },
                {
                    stars: 5,
                    body: "great, give it a try",
                    author: "artem@ost.com"
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: '2nd item',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full:'static/images/robot_2.jpg',
                    thumb:'static/images/robot_2.jpg'
                }
            ],
            reviews : [
                {
                    stars: 3,
                    body: "it's totally ok",
                    author: "james@ost.com"
                },
                {
                    stars: 5,
                    body: "looks cool",
                    author: "artem@ost.com"
                }
            ]
        }
    ]
})();