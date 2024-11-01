import Card from "./common/Card";

const empresas = [
  {
    name: "Empresa 1",
    nicho: "Técnología",
    descripcion: "Esta es una empresa de tecnología dedicada",
    tazaCreci: 30,
    riesgo: "medio",
  },
  {
    name: "Empresa 2",
    nicho: "Energía",
    descripcion: "Esta es una empresa de tecnología dedicada",
    tazaCreci: 24,
    riesgo: "alto",
  },
  {
    name: "Empresa 3",
    nicho: "Técnología",
    descripcion: "Esta es una empresa de tecnología dedicada",
    tazaCreci: 46,
    riesgo: "medio",
  },
  {
    name: "Empresa 4",
    nicho: "Energía",
    descripcion: "Esta es una empresa de tecnología dedicada",
    tazaCreci: 24,
    riesgo: "bajo",
  },
];

const Empresas = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 lg:gap-9">
      <h2 className="text-white text-3xl lg:text-5xl font-bold">EMPRESAS</h2>

      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center gap-3">
        {empresas.map((empresa, index) => (
          <Card
            key={index}
            empresa={empresa.name}
            nicho={empresa.nicho}
            descripcion={empresa.descripcion}
            tazaCreci={empresa.tazaCreci}
            riesgo={empresa.riesgo}
          />
        ))}
      </div>
    </div>
  );
};

export default Empresas;
