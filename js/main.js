$( document ).ready( function() {
	$("[name='my-checkbox']").bootstrapSwitch();

    $('[data-toggle="tooltip"]').tooltip();

    setInterval( newActivity, 2000 );


    function newActivity() {

        var flags   = [ 'ad', 'ae', 'af', 'us', 'al', 'am', 'ar', 'au', 'gf', 'gb', 'ph', 'ba', 'us', 're', 'ro', 'pe', 'lv', 'mk', 'us', 'pt', 'europeanunion',
                        'it', 'jp', 'ne', 'nl', 'no', 'ua', 'um'];
        var users   = [ '441Binder','Johnny', 'Attacklord_bro', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoost' ];
        var platforms = [ '<i class="fab fa-windows orange_color"></i>', '<i class="fab fa-android orange_color"></i>', '<i class="fab fa-apple orange_color"></i>' ];

        var UCRand 	 = ( parseInt( Math.floor( ( Math.random() * 100000 ) + 10000 ) / 1000, 10 ) +1 ) * 1000;
        var flag                 = flags[ Math.floor( Math.random() * flags.length ) ];
        var platform             = platforms[ Math.floor( Math.random() * platforms.length ) ];
        var user                 = users[ Math.floor( Math.random() * users.length ) ];
        var tixRand              = Math.floor( ( Math.random() * 5000 ) + 500 );


        $( '.activity' ).last().remove();

        $( '.activityContent' ).hide().prepend('<div class="activity">' +
           '<ul>' +
           		'<li><img class="avatar" src="img/avatar.jpg" alt="avatar" /><img class="flag" src="img/flags/'+flag+'.png" alt="flag" /></li>' +
           		'<li><span>Name</span><br />'+user+'</li>' +
                '<li><span>UC</span><br /><img class="item-icon" src="img/bp.png"> <b>'+UCRand+'</b></li>' +
                '<li><span>Platform</span><br />'+platform+'</li>' +
           '</ul>' +
        '</div>').fadeIn();
    }

	$( '.platforms li' ).click( function() {

		$( '.platforms li' ).removeClass( "active_platform" );
	    $( this ).addClass("active_platform");

	});		


	/* UC - change step, and max if you want other values */
    var $gen_bpoints = $( '.bpoints-input' );
        $gen_bpoints.updown ({

        	step: 10000,
            min: 50000,
            max: 100000

        });

    var $bpoints = $gen_bpoints.data( 'updown');
        $( '.plus-bpoints' ).click( function( event ) {

            $bpoints.increase( event );
            $bpoints.triggerEvents();

        });
        $( '.minus-bpoints' ).click( function( event ) {

            $bpoints.decrease( event );
            $bpoints.triggerEvents();

        });
        

    function goToByScroll( id ) {

        $( 'html, body' ).animate({
            scrollTop: $( "#"+id ).offset().top },
           'slow' );

    }

    $( '.btnVerify' ).click( function() {

        $( '.generator_page_3' ).fadeOut( function() {

            $( '.generatorTxt' ).html( 'UC <span class="orange_color"><img class="item-icon" src="img/bp.png"> </span><span class="orange_color bpJS">10</span>' );

            $( '.generator_page_2' ).fadeIn( 1000 );
                new Audio('run.mp3').play() ;	
                $('.bpJS').countTo({
                    from: 10,
                    to: $( '.bpoints-input' ).val(),
                    speed: 1500,
                    refreshInterval: 1,
                    onComplete: function( value ) {     
                        setTimeout( function() {
                            new Audio('fail.mp3').play() ;	
                            $( '.generator_page_2' ).fadeOut( function() {
                                $( '.generator_page_4' ).fadeIn( 1000 );
                            });

                        }, 2000 );
                    }
                });       
        });        
    });

    $( '.btnGenerate' ).click( function() {
        var usernameInput  = $( '.usernameInput' ).val();
        if( usernameInput == "" ) {
            $( '.usernameAlert' ).fadeIn();
            new Audio('fail.mp3').play() ;	
        } else {
            $( '.usernameAlert' ).fadeOut();

            $( '.generator_page_1' ).fadeOut( function () {

                $( '.generator_page_2' ).fadeIn( 1000 );
                new Audio('run.mp3').play() ;	
                setTimeout( function() {

                    $( '.generatorTxt' ).html( 'Connecting to server<span class="blink">...</span>' );

                    setTimeout( function() {

                        $( '.generatorTxt' ).html( 'Exporting database<span class="blink">...</span>' );

                         setTimeout( function() {

                            $( '.generatorTxt' ).html( 'Importing data info<span class="blink">...</span>' );

                            setTimeout( function() {

                                $( '.generatorTxt' ).html( 'Connecting Player: <span class="orange_color">'+usernameInput+'</span>' );

                                $( '.generatorUsername' ).html( usernameInput );

                                setTimeout( function() {

                                    $( '.generator_page_2' ).fadeOut( function() {

                                        $( '.generator_page_3' ).fadeIn( 1000 );
                                        new Audio('run.mp3').play() ;	
                                    });

                                }, 1500 );                                   

                            }, 3000 );                              

                        }, 3000 );                         

                    }, 3000 );                

                }, 3000 );

            });

        }   

    });
																		
				

});