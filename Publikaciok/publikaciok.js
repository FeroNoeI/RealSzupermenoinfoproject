window.NutrientViewer.load({
  container: "#nutrient",
  document: "/RealSzupermenoinfoproject/Fooldal/Ady.pdf",
})
.then(instance => {
  console.log("Nutrient loaded", instance);
})
.catch(error => {
  console.error(error.message);
});