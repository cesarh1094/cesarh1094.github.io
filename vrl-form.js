(function () {
  init();

  /**
   * @link https://www.123formbuilder.com/blog/pass-field-input-value-to-another-field/#How_to_Pass_Value_From_One_Form_To_Another_Form
   */
  function handleVotesNeededField() {
    const votesNeededFieldID = 101408730;

    const votesNeededField = loader.getEngine().getDocument().getElementById( votesNeededFieldID );

    votesNeededField.on( 'value-change', function () {
      const fieldValue = votesNeededField.getValue().value;

      // Ensure field value we get is a number
      if ( isNaN( fieldValue ) ) {
        return;
      }

      votesNeededField.setValue( { value: Math.ceil( fieldValue ) } );
    } )
  }

  function init() {
    window.addEventListener( 'load', function () {
      handleVotesNeededField();
    } );
  }
})()
