(function () {
  window.addEventListener('load', function () {
    // Hobbies Related
    const hobbiesControlID = 97270574;
    const hobbisHiddenControlID = 97270574;
    const hobbiesCheckBoxField = loader.getEngine().getDocument().getElementById(hobbiesControlID);
    const hobbiesHiddenTextField = loader.getEngine().getDocument().getElementById(hobbisHiddenControlID);

    hobbiesCheckBoxField.on('value-change', function () {
      const checkBoxes = hobbiesCheckBoxField.getValue();

      hobbiesHiddenTextField.setValue({ value: checkBoxes.values.join() });
    });

    hobbiesHiddenTextField.setValue({ value: hobbiesCheckBoxField.getValue().values.join() });

    // Animals Related
    const animalControlID = 97387782;
    const animalHiddenControlID = 97387801;
    const animalsCheckBoxField = loader.getEngine().getDocument().getElementById(animalControlID);
    const animalsHiddenTextField = loader.getEngine().getDocument().getElementById(animalHiddenControlID);

    animalsCheckBoxField.on('value-change', function () {
      const checkBoxes = animalsCheckBoxField.getValue();

      animalsHiddenTextField.setValue({ value: checkBoxes.values.join() });
    });

    animalsHiddenTextField.setValue({ value: animalsCheckBoxField.getValue().values.join() });

    // Colors Related
    const colorsControlID = 97487815;
    const colorsHiddenControlID = 97387818;
    const colorsCheckBoxField = loader.getEngine().getDocument().getElementById(colorsControlID);
    const colorsHiddenTextField = loader.getEngine().getDocument().getElementById(colorsHiddenControlID);

    colorsCheckBoxField.on('value-change', function () {
      const checkBoxes = animalsCheckBoxField.getValue();

      colorsHiddenTextField.setValue({ value: checkBoxes.values.join() });
    });

    colorsHiddenTextField.setValue({ value: colorsCheckBoxField.getValue().values.join() });
  });
})();
