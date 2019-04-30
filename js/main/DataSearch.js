class DataSearch{
    
    constructor( data, urlAjax, trigger ){
    
        this.data = data;
        this.urlAjax = urlAjax;
        this.trigger = trigger
    }    


    search( all ){

        if ( all )
            ajaxLoad( { all: true }, this.urlAjax, this.trigger );
        else
            ajaxLoad( this.data, this.urlAjax, this.trigger );
    }
}