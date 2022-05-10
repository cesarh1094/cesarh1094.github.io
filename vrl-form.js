(function () {
  init();

  let winNumberField;
  let turnoutOneField;
  let turnoutTwoField;
  let turnoutThreeField;
  let peopleRegisteredField;

  /**
   * @link https://www.123formbuilder.com/blog/pass-field-input-value-to-another-field/#How_to_Pass_Value_From_One_Form_To_Another_Form
   */
  //function handleVotesNeededField() {
  //  const votesNeededFieldID = 101408730;
  //
  //  const votesNeededField = loader.getEngine().getDocument().getElementById( votesNeededFieldID );
  //
  //  votesNeededField.on( 'value-change', function () {
  //    const fieldValue = votesNeededField.getValue().value;
  //
  //    // Ensure field value we get is a number
  //    if ( isNaN( fieldValue ) ) {
  //      return;
  //    }
  //
  //    votesNeededField.setValue( { value: Math.ceil( fieldValue ) } );
  //  } )
  //}

  function bindEvents() {
    turnoutOneField.on( 'value-change', handleUpdatingWinNumberField );
    turnoutTwoField.on( 'value-change', handleUpdatingWinNumberField );
    turnoutThreeField.on( 'value-change', handleUpdatingWinNumberField );
    peopleRegisteredField.on( 'value-change', handleUpdatingWinNumberField );
  }

  function handleUpdatingWinNumberField() {
    if (
      isNaN( peopleRegisteredField.getValue().value )
      || isNaN( turnoutOneField.getValue().value )
      || isNaN( turnoutTwoField.getValue().value )
      || isNaN( turnoutThreeField.getValue().value ) ) {
      return;
    }

    const calculation =
            1 +
            (.5
              * (peopleRegisteredField.getValue().value * ((turnoutOneField.getValue().value + turnoutTwoField.getValue().value + turnoutThreeField.getValue().value) / 300)));

    winNumberField.setValue( { value: Math.ceil( calculation ) } );
  }

  function init() {
    window.addEventListener( 'load', function () {
      winNumberField = loader.getEngine().getDocument().getElementById( 101740683 );

      turnoutOneField   = loader.getEngine().getDocument().getElementById( 101408680 );
      turnoutTwoField   = loader.getEngine().getDocument().getElementById( 101408689 );
      turnoutThreeField = loader.getEngine().getDocument().getElementById( 101408684 );

      peopleRegisteredField = loader.getEngine().getDocument().getElementById( 101408726 );

      bindEvents();
    } );
  }
})()
