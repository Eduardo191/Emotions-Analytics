function ajaxLoad( data, url, trigger ){

    $.ajax({

        type: 'POST',
        
        dataType: 'json',
        
        url: url,
        
        async: true,
        
        data: { data: data },
        
        success: function( response ){            
        
            if ( trigger )
                trigger( response );
        }
    })
}