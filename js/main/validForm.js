function validateForm( $fields ){

    var valid = true;
    var data = {};

    for( var $field in $fields ){
        
        if( $fields[ $field ].val() == '' ) { 
            
            $fields[ $field ].parent().children().css( { "color":"red", "border-color":"red" } );

            valid = false;
        }

        else{

            $fields[ $field ].parent().children().removeAttr( "style" );
    
            data[ $fields[ $field ].attr("name") ] = $fields[ $field ].val();
        }
    }

    if( valid )
        return data;
    else
        return 0;
}