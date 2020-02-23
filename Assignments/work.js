var type = $('#create_form input:radio[name=ctype]:checked').val()
         console.log(type)


         $("input[type='radio']").click(function () {
             var villian = $("input[name='villian']:checked").val();
             if (villian === true) {
                 correct++
             } else {
                 wrong++
             }
             console.log(correct);
         })
         $("input[type='radio']").click(function () {
             var father = $("input[name='father']:checked").val();
             if (father === true) {
                 correct++
             }
             else {
                 wrong++
             }
             console.log(wrong);
         })
         $("input[type='radio']").click(function () {
             var ace = $("input[name='ace']:checked").val();
             if (ace) {
                 console.log("Your are a - " + ace);
             }
         })
         $("input[type='radio']").click(function () {
             var robin = $("input[name='robin']:checked").val();
             if (robin) {
                 console.log("Your are a - " + robin);
             }
         })

         $("input[type='radio']").click(function () {
             var alfred = $("input[name='alfred']:checked").val();
             if (alfred) {
                 console.log("Your are a - " + alfred);
             }
         })
         $("input[type='radio']").click(function () {
             var son = $("input[name='son']:checked").val();
             if (son) {
                 console.log("Your are a - " + son);
             }
         })


         var jason = $("input[name='jason']:checked").val();







     })
     triviaStart()
     function triviaStart() {
         timer = 120;
         correct = 0;
         wrong = 0;
         blank = 0;
     }*/ /* var questions = {
             villian: {
                 Joker: false,
                 Bane: true,
                 RasAlGhul: false,
                 Riddler: false,
             },
             father: {
                 thomas: true,
                 wayne: false,
                 john: false,
                 bruce: false,
             },
             robin: {
                 1940: true,
                 1950: false,
                 1956: false,
                 1942: false,
             },
             alfred: {
                 pennyworth: false,
                 chapsman: false,
                 beagle: true,
                 windham: false,

             },
             ace: {
                 ace: true,
                 lucky: false,
                 champ: false,
                 bats: false,

             },
             son: {
                 taliaAlGhul: true,
                 vesperFairchild: false,
                 catwoman: false,
                 batwoman: false,

             },
             jason: {
                 joker: true,
                 batman: false,
                 penguin: false,
                 bane: false,
             },
         }


