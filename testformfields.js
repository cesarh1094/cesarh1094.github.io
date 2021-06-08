(function () {
  window.addEventListener('load', function () {
    var sourceControlId = 0000000 /** THE ID OF THE SENDER CONTROL */,
      targetControlId = '0000000c' /** THE ID OF THE RECEIVER CONTROL **/,
      domAbstractionLayer = loader.getDOMAbstractionLayer(),
      sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);

    sourceControlInstance.on('value-change', function () {
      domAbstractionLayer.setControlValueById(
        String(targetControlId),

        domAbstractionLayer.getControlValueById(String(sourceControlId))
      );
    });

    domAbstractionLayer.setControlValueById(
      String(targetControlId),

      domAbstractionLayer.getControlValueById(String(sourceControlId))
    );
  });
})();
