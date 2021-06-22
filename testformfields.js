(function () {
  window.addEventListener( 'load', function () {
    init();

    // Ethnicity fields
    function handleEthnicityFields() {
      // IDs of Ethnicity fields
      const ethnicityCheckBoxesFieldID = 97270574;
      const ethnicityHiddenFieldID     = 97270677;

      // Fields
      const ethnicityCheckBoxField = loader.getEngine().getDocument().getElementById( ethnicityCheckBoxesFieldID );
      const ethnicityHiddenField   = loader.getEngine().getDocument().getElementById( ethnicityHiddenFieldID );

      // This is ran every time a checkbox changes from "checked" to "not checked"
      ethnicityCheckBoxField.on( 'value-change', function () {
        // Get current "state" of checkboxes
        const checkBoxes = ethnicityCheckBoxField.getValue();

        // Set comma-separated value to Ethnicity hidden field
        // -> "checkbox value 1,checkbox value 2, ..."
        ethnicityHiddenField.setValue( { value: checkBoxes.values.join() } );
      } );

      // Set comma-separated value to Ethnicity hidden field
      // -> "checkbox value 1,checkbox value 2, ..."
      ethnicityHiddenField.setValue( { value: ethnicityCheckBoxField.getValue().values.join() } );
    }

    function handleGenderFields() {
      // IDs of Gender fields
      const genderCheckBoxesFieldID = 97387782;
      const genderHiddenFieldID     = 97387801;

      // Fields
      const genderCheckBoxesField = loader.getEngine().getDocument().getElementById( genderCheckBoxesFieldID );
      const genderHiddenField     = loader.getEngine().getDocument().getElementById( genderHiddenFieldID );

      // This is ran every time a checkbox changes from "checked" to "not checked"
      genderCheckBoxesField.on( 'value-change', function () {
        // Get current "state" of checkboxes
        const checkBoxes = genderCheckBoxesField.getValue();

        console.log( genderCheckBoxesField, checkBoxes );

        const genderValues = checkBoxes.values.join().replace( 'Female', 'F' ).replace( 'Male', 'M' );

        // Set comma-separated value to Ethnicity hidden field
        // -> "checkbox value 1,checkbox value 2, ..."
        genderHiddenField.setValue( { value: genderValues } );
      } );

      // Set comma-separated value to Ethnicity hidden field
      // -> "checkbox value 1,checkbox value 2, ..."
      genderHiddenField.setValue( { value: genderCheckBoxesField.getValue().values.join() } );
    }

    function handlePoliticalFields() {
      // Political field IDs
      const politicalDropDownFieldID = 97497873;
      const politicalOtherFieldID    = 97500115;
      const politicalHiddenID        = 97387818;

      // Political fields (as objects)
      const politicalDropDownField = loader.getEngine().getDocument().getElementById( politicalDropDownFieldID );
      const politicalOtherField    = loader.getEngine().getDocument().getElementById( politicalOtherFieldID );
      const politicalHiddenField   = loader.getEngine().getDocument().getElementById( politicalHiddenID );

      // The following is triggered when the "Other Political Affiliation" text field changes
      politicalOtherField.on( 'value-change', function () {
        const dropdownValue = politicalDropDownField.getValue();

        // Hidden field should not be filled if dropdown if NOT 'other'
        if ( 'Other' !== dropdownValue.value ) {
          return;
        }

        const other = politicalOtherField.getValue().value;

        // Don't fill hidden field with "null" value
        if ( !other ) {
          politicalHiddenField.setValue( { value: '' } );

          return;
        }

        // As user types in field, fill hidden field
        politicalHiddenField.setValue( {
          value: 'Demographics > Political Party: ' + other,
        } );
      } );

      // The following is triggered when the "What is your political affiliation" dropdown field changes
      politicalDropDownField.on( 'value-change', function () {
        const dropdownValue = politicalDropDownField.getValue();

        if ( 'Other' === dropdownValue.value ) {
          const other = politicalOtherField.getValue().value;

          if ( !other ) {
            politicalHiddenField.setValue( { value: '' } );

            return;
          }

          // As user types in field, fill hidden field
          politicalHiddenField.setValue( {
            value: 'Demographics > Political Party: ' + other,
          } );

          return;
        }

        // Reset hidden field when value of dropdown is NO LONGER 'Other'
        politicalHiddenField.setValue( { value: '' } );
      } );
    }

    function handleEducationLevelFields() {
      // Education Level field IDs
      const educationLevelDropDownFieldID = 97500085;
      const educationLevelOtherFieldID    = 97500111;
      const educationLevelHiddenFieldID   = 97500113;

      // Education Level fields (as objects)
      const educationLevelDropDownField = loader.getEngine().getDocument().getElementById( educationLevelDropDownFieldID );
      const educationLevelOtherField    = loader.getEngine().getDocument().getElementById( educationLevelOtherFieldID );
      const educationLevelHiddenField   = loader.getEngine().getDocument().getElementById( educationLevelHiddenFieldID );

      // The following is triggered when the "Other Education" text field changes
      educationLevelOtherField.on( 'value-change', function () {
        const dropdownValue = educationLevelDropDownField.getValue();

        // Hidden field should not be filled if dropdown if NOT 'other'
        if ( 'Other' !== dropdownValue.value ) {
          return;
        }

        const other = educationLevelOtherField.getValue().value;

        // Don't fill hidden field with "null" value
        if ( !other ) {
          educationLevelHiddenField.setValue( { value: '' } );

          return;
        }

        // As user types in field, fill hidden field
        educationLevelHiddenField.setValue( {
          value: 'Demographics > Education: ' + other,
        } );
      } );

      // The following is triggered when the "Please choose your highest level of education" dropdown field changes
      educationLevelDropDownField.on( 'value-change', function () {
        const dropdownValue = educationLevelDropDownField.getValue();

        if ( 'Other' === dropdownValue.value ) {
          const other = educationLevelOtherField.getValue().value;

          if ( !other ) {
            educationLevelHiddenField.setValue( { value: '' } );

            return;
          }

          // As user types in field, fill hidden field
          educationLevelHiddenField.setValue( {
            value: 'Demographics > Education: ' + other,
          } );

          return;
        }

        // Reset hidden field when value of dropdown is NO LONGER 'Other'
        educationLevelHiddenField.setValue( { value: '' } );
      } );
    }

    function handleCoachingFields() {
      // Education Level field IDs
      const coachingDropDownFieldID = 97500189;
      const coachingOtherFieldID    = 97500201;
      const coachingHiddenFieldID   = 97500204;

      // Education Level fields (as objects)
      const coachingDropDownField = loader.getEngine().getDocument().getElementById( coachingDropDownFieldID );
      const coachingOtherField    = loader.getEngine().getDocument().getElementById( coachingOtherFieldID );
      const coachingHiddenField   = loader.getEngine().getDocument().getElementById( coachingHiddenFieldID );

      // The following is triggered when the "Other Education" text field changes
      coachingOtherField.on( 'value-change', function () {
        const dropdownValue = coachingDropDownField.getValue();

        // Hidden field should not be filled if dropdown if NOT 'other'
        if ( 'Other' !== dropdownValue.value ) {
          return;
        }

        const other = coachingOtherField.getValue().value;

        // Don't fill hidden field with "null" value
        if ( !other ) {
          coachingHiddenField.setValue( { value: '' } );

          return;
        }

        // As user types in field, fill hidden field
        coachingHiddenField.setValue( {
          value: 'Coaching lead: ' + other,
        } );
      } );

      // The following is triggered when the "Please choose your highest level of education" dropdown field changes
      coachingDropDownField.on( 'value-change', function () {
        const dropdownValue = coachingDropDownField.getValue();

        if ( 'Other' === dropdownValue.value ) {
          const other = coachingOtherField.getValue().value;

          if ( !other ) {
            coachingHiddenField.setValue( { value: '' } );

            return;
          }

          // As user types in field, fill hidden field
          coachingHiddenField.setValue( {
            value: 'Coaching lead: ' + other,
          } );

          return;
        }

        // Reset hidden field when value of dropdown is NO LONGER 'Other'
        coachingHiddenField.setValue( { value: '' } );
      } );
    }

    function handleIssuesFields() {
      // Issues fields IDs
      const issuesCheckBoxID    = 97500207;
      const issuesOtherFieldID  = 97537712;
      const issuesHiddenFieldID = 97500243;

      // Issues fields (as objects)
      const issuesCheckBoxField = loader.getEngine().getDocument().getElementById( issuesCheckBoxID );
      const issuesOtherField    = loader.getEngine().getDocument().getElementById( issuesOtherFieldID );
      const issuesHiddenField   = loader.getEngine().getDocument().getElementById( issuesHiddenFieldID );

      issuesCheckBoxField.on( 'value-change', function () {
        /**
         * @type {string[]}
         */
        const checkBoxes = issuesCheckBoxField.getValue().values;

        if ( !checkBoxes.includes( 'Other' ) ) {
          issuesHiddenField.setValue( { value: '' } )

          return;
        }

        /**
         * @type {string}
         */
        const otherIssues = issuesOtherField.getValue().value;

        if ( !otherIssues ) {
          return;
        }

        issuesHiddenField.setValue( { value: otherIssues ? otherIssues : 'Issues > ' } )
      } );

      issuesOtherField.on( 'value-change', function () {
        /**
         * @type {string[]}
         */
        const checkBoxes = issuesCheckBoxField.getValue().values;

        if ( !checkBoxes.includes( 'Other' ) ) {
          issuesHiddenField.setValue( { value: '' } )

          return;
        }

        /**
         * @type {string}
         */
        const otherIssues = issuesOtherField.getValue().value;

        if ( !otherIssues ) {
          issuesHiddenField.setValue( { value: '' } );

          return;
        }

        issuesHiddenField.setValue( { value: otherIssues ? otherIssues : 'Issues > ' } )
      } )
    }

    function handleContactFields() {
      // Contact field IDs
      const contactDropDownFieldID = 97500250;
      const contactOtherFieldID    = 97500253;
      const contactHiddenFieldID   = 97500331;

      // Contact fields (as objects)
      const contactDropDownField = loader.getEngine().getDocument().getElementById( contactDropDownFieldID );
      const contactOtherField    = loader.getEngine().getDocument().getElementById( contactOtherFieldID );
      const contactHiddenField   = loader.getEngine().getDocument().getElementById( contactHiddenFieldID );

      // The following is triggered when the "Other Point of Contact" text field changes
      contactOtherField.on( 'value-change', function () {
        const dropdownValue = contactDropDownField.getValue();

        // Hidden field should not be filled if dropdown if NOT 'other'
        if ( 'Other' !== dropdownValue.value ) {
          return;
        }

        const other = contactOtherField.getValue().value;

        // Don't fill hidden field with "null" value
        if ( !other ) {
          contactHiddenField.setValue( { value: '' } );

          return;
        }

        // As user types in field, fill hidden field
        contactHiddenField.setValue( {
          value: 'Contact mode: ' + other,
        } );
      } );

      // The following is triggered when the "How fo you want Vote Run lead..." dropdown field changes
      contactDropDownField.on( 'value-change', function () {
        const dropdownValue = contactDropDownField.getValue();

        if ( 'Other' === dropdownValue.value ) {
          const other = contactOtherField.getValue().value;

          if ( !other ) {
            contactHiddenField.setValue( { value: '' } );

            return;
          }

          // As user types in field, fill hidden field
          contactHiddenField.setValue( {
            value: 'Contact mode:' + other,
          } );

          return;
        }

        // Reset hidden field when value of dropdown is NO LONGER 'Other'
        contactHiddenField.setValue( { value: '' } );
      } );
    }

    function init() {
      handleEthnicityFields();
      handleGenderFields();
      handlePoliticalFields();
      handleEducationLevelFields();
      handleCoachingFields();
      handleIssuesFields();
      handleContactFields();
    }
  } );
})();
