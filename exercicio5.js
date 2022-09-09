var usuarios = [
    {
        nome: "Diego",
        habilidades: ["JavaScript","ReactJs","React Native"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS","Ruby on Rails","Elixir"]
    }
];
for(const usuario of usuarios){
    console.log("O "+ usuario.nome +" Possui as habilidades: "+usuario.habilidades.join(" | ")+".")
}