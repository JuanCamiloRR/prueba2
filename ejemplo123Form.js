
$( document ).ready(function() {
	alert("Conecto 3");
     demo123CF_CopyFieldValue.setFieldOriginID('55501058');
    demo123CF_CopyFieldValue.setFieldDestinationID('55498518');
	
    demo123CF_CopyFieldValue.init();
	
	alert("Entro 2");
	// Short Text
	$('#data-id="55501058').val('55498518');
	$('button[data-role="next-page"]').focus().click();
});

var demo123CF_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.id123cf = '#id123-input';
    this.fieldOrigin = '';
    this.fieldDestination = '';

    this.setFieldOriginID = function ( fieldId ) {
        this.fieldOrigin = fieldId;
    }

    this.setFieldDestinationID = function ( fieldId ) {
        this.fieldDestination = fieldId;
    }


    this.init = function () {
        this.setOnChange();
    }

    this.validateData = function () {
        if(!$(this.id123cf+this.fieldOrigin).length)
            this.errorMessage = 'Invalid origin field';
        if(!$(this.id123cf+this.fieldDestination).length)
		alert((this.id123cf+this.fieldDestination).toString());
            this.errorMessage = 'Invalid destination field';

        return this.errorMessage == '';
    }

    this.updateDestinationValue = function (){
        if(!this.validateData()) {
            alert(this.errorMessage);
            return;
        }

        $(this.id123cf+this.fieldDestination).val($(this.id123cf+this.fieldOrigin).val());
    }

    this.setOnChange = function () {
        if(!this.validateData()) {
            alert(this.errorMessage);
            return;
        }

        //change event from start date to be copied to end date
        $(this.id123cf+this.fieldOrigin).change(function() {
            self.updateDestinationValue();
        });

    }
}

