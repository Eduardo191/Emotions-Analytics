class DataSave{
    
    constructor( data, urlAjax, trigger ){
    
        this.data = data;
        this.urlAjax = urlAjax;
        this.trigger = trigger;
    }    


    save( newSave ){

        if ( newSave )
            ajaxLoad( { newSave: true, data: this.data }, this.urlAjax, this.trigger );
        else
            ajaxLoad( { newSave: false, data: this.data }, this.urlAjax, this.trigger );
    }
}
