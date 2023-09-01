export default function useCripto() {
  const cotizarMoneda = () => {
    console.log("Cotizando desde useCripto");
  };

  return {
    cotizarMoneda,
  };
}
